<script setup>
import "./signin.css";
import axios from 'axios';
import { ref } from "vue";

const fname = ref('');
const lname = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const rpassword=ref('');
const message = ref('');


const Signup = async () => {
    try {
        const response = await axios.post('http://localhost:3000/api/signup', {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            username: username.value,
            password: password.value,
            rpassword:rpassword.value
        });
        message.value = response.data.message;
      if(response.data.redirecturl)
      {
        window.location.href=response.data.redirecturl
      }
    } catch (error) {
        message.value = 'Error signing up: ' + error.response.data.message;
        console.error(message.value);
    }


   
}


const handlesubmit=(e)=>
{
    e.preventDefault();
    Signup();
}


</script>

<template>
     <div v-if="message" class="tyeconfirmmessgea" >
       
        <h2 >{{ message }}</h2>
    </div>
     <!--  -->
   <section class="signup_container">

    
    <div class="signup_image">
       <img src="../assets/point-normal-mLFyaVdRdpE-unsplash.jpg" alt="">
    </div>
    <div class="signup_form_contain">
        <div class="welcome_text"><h1>sign up TO spachat</h1></div>

<form @submit="handlesubmit" method="post" class="sigupform">
    <input placeholder="First name" v-model="fname" class="sigupform_input" type="text" id="fname" >
<input type="text" v-model="lname"  id="lname" class="sigupform_input" placeholder="Last Name" >
<input type="text" v-model="email"  id="email" class="sigupform_input" placeholder="Email" >

    <input type="text" v-model="username"  class="sigupform_input" placeholder="Username" id="username" >
    <input type="password" v-model="password" minlength="8" maxlength="16"   placeholder="Password" class="sigupform_input" id="password" >
    <input type="password" v-model="rpassword" minlength="8" maxlength="16" class="sigupform_input" placeholder="Re-Password" name="" >
    <input type="submit" class="sigunform_submit" value="Sign up">

    <br>

   
<div class="signin_link"><p>Already Have a Account? <router-link class="signin_routerlink"  to="/signin">Sign In</router-link> </p></div>
</form>
    </div>
   </section>
</template>

<style>

</style>