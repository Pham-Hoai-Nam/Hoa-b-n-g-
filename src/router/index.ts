import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '../layout/AppLayout.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard1',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard2',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard3',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard4',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard5',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard6',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard7',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard8',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard9',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard10',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard11',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard12',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard13',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'dashboard14',
        path: 'dashboard',
        component: () => import('../views/admin/dashboard/Dashboard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
