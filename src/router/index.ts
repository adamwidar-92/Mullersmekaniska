import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: { title: 'Müller Mekaniska AB — Quality by Innovation' },
  },
  {
    path: '/om-oss',
    name: 'About',
    component: () => import('../views/AboutPage.vue'),
    meta: { title: 'Om oss — Müller Mekaniska AB' },
  },
  {
    path: '/produkter',
    name: 'Products',
    component: () => import('../views/ProductsPage.vue'),
    meta: { title: 'Produkter — Müller Mekaniska AB' },
  },
  {
    path: '/kompetenser',
    name: 'Competencies',
    component: () => import('../views/CompetenciesPage.vue'),
    meta: { title: 'Kompetenser — Müller Mekaniska AB' },
  },
  {
    path: '/nyheter',
    name: 'News',
    component: () => import('../views/NewsPage.vue'),
    meta: { title: 'Nyheter — Müller Mekaniska AB' },
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue'),
    meta: { title: 'Kontakt — Müller Mekaniska AB' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue'),
    meta: { title: 'Sidan hittades inte — Müller Mekaniska AB' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 96, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) ?? 'Müller Mekaniska AB'
})

export default router
