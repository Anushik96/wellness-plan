import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WellnessPlan from '../views/WellnessPlan.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: WellnessPlan
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
