import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home.vue';
import Signin from './components/signin.vue';
import Signup from './components/signup.vue';
import Features from './components/features.vue';
import Feedback from './components/feedback.vue';
import Thechatpage from './components/thechatpage.vue';




const routes= [

    {
        path: '/' ,component: Home
    },
    {
        path : '/signin' , component :Signin
    }
    ,
    {
        path: '/signup' , component:Signup
    }
    
    ,{
        path: '/features' , component:Features
    }
    ,{
        path: '/feedback', component:Feedback
    }
    ,
    {
        path: '/chathome',component:Thechatpage
    }
];

const router =createRouter({
    history:createWebHistory(),
    routes
})
const app=createApp(App);
app.use(router);


app.mount('#app')
