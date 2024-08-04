<script setup>
import './navbar.css'
</script>

<template>
<header>
<nav>
<div class="logo">
    <a href="#" class="the_logo">spachat</a>
</div>


<div class="nav_options">
    
    <ul class="nav_option_1">
        <router-link class="the_nav_options" to="/">  <li >Home</li></router-link>
        <router-link class="the_nav_options" to="/features"  >  <li >features</li></router-link>
        <router-link class="the_nav_options" to="/feedback"  > <li >feedback</li></router-link>
    </ul>


    <ul class="nav_option_2">
        <router-link class="the_nav_option" to="/signin">    <li >Try now</li></router-link>
    </ul> 

</div>

</nav>
</header>
</template>