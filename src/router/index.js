import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue"
import UserPage from '@/pages/UserPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/userPage',
    name: 'userPage',
    component: UserPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
