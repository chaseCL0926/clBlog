import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/about/index.vue')
  },
  {
    path: '/codeEditor',
    name: 'CodeEditor',
    component: () => import('@/pages/codeEditor/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
