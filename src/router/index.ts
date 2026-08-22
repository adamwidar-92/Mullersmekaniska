import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/om-oss',
    name: 'About',
    component: () => import('../views/AboutPage.vue'),
  },
  {
    path: '/produkter',
    name: 'Products',
    component: () => import('../views/ProductsPage.vue'),
  },
  {
    path: '/kompetenser',
    name: 'Competencies',
    component: () => import('../views/CompetenciesPage.vue'),
  },
  {
    path: '/nyheter',
    name: 'News',
    component: () => import('../views/NewsPage.vue'),
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
