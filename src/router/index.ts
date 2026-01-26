import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/home/index.vue')
  },
  {
    path: '/about',
    component: () => import('../pages/about/about.vue')
  },
  {
    path: '/contact',
    component: () => import('../pages/contact/contact.vue')
  },
  {
    path: '/upcoming-events',
    component: () => import ('../pages/upcoming-events/upcoming-events.vue')
  },
  {
    path: '/articles',
    component: () => import('../pages/articles/article-list/index.vue')
  },
  {
    path: '/articles/:slug',
    component: () => import('../pages/articles/article-item/[slug].vue')
  },
  {
    path: '/releases',
    component: () => import('../pages/releases/release-list/index.vue')
  },
  {
    path: '/releases/:slug',
    component: () => import('../pages/releases/release-item/[slug].vue')
  }
]

export default routes

// crna pozadina - hover na item - rectangle - klik - rectangle se siri (beo), pozadina i slova beli - pozadina se zatamnjuje, slova se 'prikazuju'
