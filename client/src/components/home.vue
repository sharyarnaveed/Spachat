<script setup>
import navbar from './subcomponents/nav_bar.vue';
import foot from './subcomponents/footer.vue'
import './home.css';
import { defineProps } from 'vue';
defineProps({
    main_image:String
})





</script>
<template>
    <main>
   <navbar/>
   <section class="intro_section">
    <div class="into_image_text">
        <div class="intro_text"><h1>
            Connect in Real-
            <br>Time, Anytime: <span>
            <br>Where <br> Conversations Come Alive!</span>
        </h1></div>
        <div class="intro_image">
            <img src="../assets/shubham-dhage-_afH9fjiom0-unsplash-removebg-preview.png" alt="">
        </div>
    </div>
    <div class="intro_buttons">
        <button type="button" id="learn_more">Learn More</button>
 <button type="button" id="download_now" >Download Now</button>
    </div>
   </section>
</main>


<section id="home_about" class="about_application">
    <h1>ABOUT application</h1>
<br>
    <p>
        Our chatting application is built using Express.js, a popular and flexible web application framework for Node.js.  Leveraging Express.js allows us to develop a robust and scalable backend that powers our real-time chat features. <br> Key Components and Technologies Used: <br>
<b>Express.js:</b> As mentioned, Express.js forms the core of our backend infrastructure. It simplifies the process of handling HTTP requests, routing, middleware integration, and more. <br>
<b>Socket.io: </b>For real-time communication between clients and the server, we use Socket.io. It enables bidirectional event-based communication, making it perfect for instant messaging and live updates. <br>
<b>MongoDB:</b> Our application uses MongoDB as the database to store chat messages, user profiles, and other relevant data. MongoDB's flexible document-based structure fits well with the dynamic nature of chat applications.  <br>
<b>Mongoose: </b> To interact with MongoDB in a more organized manner, we employ Mongoose, an ODM (Object Data Modeling) library for Node.js. It provides a straightforward way to define schemas, validate data, and perform CRUD operations. <br>
<b>Authentication: </b>For user authentication and authorization, we implement JSON Web Tokens (JWT) along with bcrypt for password hashing. This ensures secure and seamless user experiences. <br>
<b>Frontend Technologies:</b> On the client-side, we utilize HTML, CSS, and JavaScript, along with frameworks like React or Vue.js for building dynamic and interactive user interfaces.  <br>  
    </p>
</section>

<foot/>

</template>