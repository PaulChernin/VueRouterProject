import Vue from 'vue'
import VueRouter from 'vue-router'
import LightOn from '../views/LightOn.vue'
import LightOff from '../views/LightOff.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/on',
    name: 'on',
    component: LightOn
  },
  {
    path: '/off',
    name: 'off',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LightOff,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
