import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Keyboard.vue')
  },
  {
    path: '/vging',
    name: 'vging',
    component: () => import('../views/Vging.vue')
  },
  {
    path: '/galery',
    name: 'galery',
    component: () => import('../views/Galery.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
