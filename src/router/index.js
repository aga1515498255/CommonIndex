import { createRouter, createWebHistory } from 'vue-router'



export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    hidden:false
  },
  {
    path: '/editor',
    name: 'editor',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Editor.vue'),
    hidden:false
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Auth/Login.vue'),
    hidden:true
  },
  {
    path:"/sysindex",
    name: 'sysindex',
    component: () => import('../views/SysIndex.vue'),
    hidden:false
  }
]

export const dynamicRoutes = [
  {
    path: '/editor',
    name: 'editor',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Editor.vue'),
    hidden:false,
    permission:["article:edit"]
  },
  {
    path:"/sysindex",
    name: 'sysindex',
    component: () => import('../views/SysIndex.vue'),
    hidden:false,
    permission:["index:edit"]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
