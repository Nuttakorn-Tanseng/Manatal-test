import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import('../views/Read.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
