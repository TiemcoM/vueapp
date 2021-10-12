import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import login from "@/components/login"
import registreren from "@/components/registreren"
import harderwijk from "@/components/harderwijk";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/harderwijk',
    name: 'harderwijk',
    component: harderwijk,
  },
  {
    path: '/about',
    name: 'About',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
