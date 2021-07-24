import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../views/Content.vue'
import DetailJob from '../views/DetailJob.vue'
import Page404 from '../views/Page404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  },
  {
    path: '/jobs/:id',
    name: 'DetailJob',
    component: DetailJob,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'Page404',
    component: Page404,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
