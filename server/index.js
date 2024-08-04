const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const port = 3000;

// Create HTTP server
const server = http.createServer(app);

// Initialize socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/spachat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
});

// Define a schema
const userSchema = new mongoose.Schema({
  fname: String, 
  lname: String,
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
});

// Create a model
const User = mongoose.model('accounts', userSchema);

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(bodyParser.json());

// Define a route for sign-up
app.post('/api/signup', async (req, res) => {
  const { fname, lname, username, password, rpassword, email } = req.body;

  if (!fname || !lname || !username || !password || !rpassword || !email) {
    return res.status(400).send({ message: 'Fill The Form' });
  }

  if (password !== rpassword) {
    return res.status(400).send({ message: 'Passwords Do Not Match' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ message: 'Username Is Already Taken' });
    }

    const user = new User({ fname, lname, username, password: hashedPassword, email });
    await user.save();
    res.status(201).send({ message: 'User Created Successfully', redirecturl: '/signin' });
  } catch (error) {
    res.status(500).send({ message: 'Error Creating User' });
    console.log(error);
  }
});

// Define a route for sign-in
app.post('/api/signin', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ message: 'Fill The Form' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ message: 'Username Does Not Exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Login Unsuccessful' });
    }

    res.status(200).send({ message: 'Login Successful', redirecturl: '/' });
  } catch (error) {
    res.status(500).send({ message: 'Error Logging In' });
    console.log(error);
  }
});

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle custom events
  socket.on('message', (data) => {
    const uid=socket.id;
    console.log('Message received:', data);
    io.emit('message', data,uid); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
