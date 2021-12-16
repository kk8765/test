import { createRouter, createWebHistory } from 'vue-router'
const Home = import("@/view/home");
const FirstPage = import("@/view/FirstPage");

const routes = [
    { path: "/", redirect: "/home"},
    { 
        path: "/home",
        name: "Home",
        component: Home
    },
    { 
        path: "/page",
        name: "page",
        component: FirstPage
    }

]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

