// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'devicelist',
        component: () => import('@/views/DeviceList.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
