import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { label: 'Home' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: { label: 'About Me' },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue'),
    meta: { label: 'My Project' },
  },
  {
    path: '/journal',
    name: 'journal',
    component: () => import('../views/Journal.vue'),
    meta: { label: 'Journal' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: { label: 'Contact' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
