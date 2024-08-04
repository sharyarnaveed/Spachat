<script setup>
import './navbar.css'
</script>
<template>
    <footer>
        <div class="top_part_footer">
<h1>spachat</h1>
        </div>
        <div class="bottom_part_footer">
<div class="footer_options">
    
    <ul class="nav_option_1">
        <router-link class="the_nav_options" to="/">  <li >Home</li></router-link>
        <router-link class="the_nav_options" to="/features"  >  <li >features</li></router-link>
        <router-link class="the_nav_options" to="/feedback"  > <li >feedback</li></router-link>
    </ul>

</div>

        </div>
    </footer>
</template>