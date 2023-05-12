import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Blog.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/About.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('./views/Contact.vue'),
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('./views/Portfolio.vue'),
    },
    {
        path: '/wedding',
        name: 'Wedding',
        component: () => import('./views/Wedding.vue'),
    },
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')


