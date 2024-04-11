import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },   
    {
      path: '/Demo',
      name: 'Demo',
      component: () => import('../views//Demo.vue')
    },

    {
      path: '/RoomA',
      name: 'RoomA',
      component: () => import('../views/Provide&Inject/RoomA.vue')
    },
    {
      path: '/DefineExpose',
      name: 'DefineExpose',
      component: () => import('../views//DefineExpose.vue')
    },
    {
      path: '/Test',
      name: 'Test',
      component: () => import('../views//Test.vue')
    },
    {
      path: '/ElementPlusStyle',
      name: 'ElementPlusStyle',
      component: () => import('../views/ElementPlusStyle.vue')
    },
  ]
})

export default router
