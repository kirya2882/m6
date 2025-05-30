import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import("../views/Main.vue"),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import("../views/FAQ.vue"),
    },
    {
      path: '/:id',
      name: 'details',
      component: () => import("../views/Details.vue"),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import("../views/Admin.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
