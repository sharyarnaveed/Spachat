<script setup>
// import navbar from "./subcomponents/nav_bar.vue"
import "./signin.css"
import { ref } from "vue";
import axios from "axios";
const username = ref('');
const password = ref('');
const successmessage = ref('');

const signin = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/signin', {
      username: username.value,
      password: password.value
    });
    successmessage.value = response.data.successmessage;
   
    if (response.data.redirecturl) {
      window.location.href = response.data.redirecturl;
    }
  } catch (error) {
    successmessage.value = 'Error signing in: ' + (error.response?.data?.successmessage || 'Unknown error');
    console.error(successmessage.value);
  }
}

const handlesignin = (e) => {
  e.preventDefault();
  signin();
}

</script>




<template>
  <div v-if="successmessage" class="tyeconfirmmessgea" >
       
       <h2 >{{ successmessage }}</h2>
   </div>
<section class="signin_conatiner">
    <div class="signinimage">
<img src="../assets/allison-saeng-dKmwpcvqQ3g-unsplash.jpg" alt="">
    </div>
    <div class="signinform">
<div class="welcome_text"><h1>Welcome TO spachat</h1></div>

<form @submit="handlesignin" method="post" class="siginform">
    <input v-model="username" type="text" class="siginform_input" placeholder="Username" name="username" id="">
    <input v-model="password" type="password" placeholder="Password" class="siginform_input">
    <input type="submit" class="siginform_submit" value="Sign in">

    <br>

   
<div class="signup_link"><p>Dont Have A Account ? <router-link class="signup_routerlink"  to="/signup">Sign Up</router-link> </p></div>
</form>
    </div>
</section>


</template>