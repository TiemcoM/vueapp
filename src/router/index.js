import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import login from "@/components/login"
import registreren from "@/components/registreren"
import pizzas from "@/components/pizzas";
import users from "@/components/users"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pizzas',
    name: 'pizzas',
    component: pizzas,
  },
  {
    path: '/users',
    name: 'users',
    component: users,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/registreren',
    name: 'registreren',
    component: registreren,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
