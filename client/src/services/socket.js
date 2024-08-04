import { io } from "socket.io-client";

// Replace with your server URL using environment variables
const SERVER_URL =  'http://localhost:3000';

const socket = io(SERVER_URL, {
  reconnectionAttempts: 5, // Attempt to reconnect 5 times before giving up
  reconnectionDelay: 1000, // Wait 1 second before trying to reconnect
});

// Handle connection errors
socket.on('connect_error', (error) => {
  console.error('Connection error:', error);
});

// Handle successful connection
socket.on('connect', () => {
  console.log('Connected to server');
});

// Handle disconnection
socket.on('disconnect', (reason) => {
  console.log('Disconnected from server:', reason);
});

export default socket;
