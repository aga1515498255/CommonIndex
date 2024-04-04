import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { getLocalToken } from '@/common/LocalStroageUtil'
import store from '@/store'

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    hidden: false
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/Login.vue'),
    hidden: true
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contract/Contact.vue'),
    hidden: false
  },
  {
    path: '/article/:id',
    name: 'aritcle',
    component: () => import('@/views/Article/ArticleView.vue'),
    hidden: true,
    props: true
  }
  // {
  //   name: '404',
  //   path: '/404',
  //   hidden:true,
  //   beforeEnter: (to, from) => {
  //     // reject the navigation
  //     console.log("in 404 beforeEnter from:",from)

  //     // return false
  //   },
  //   component: () => import('../views/notFound.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: '/404',
  //   hidden:true,
  // }
]

export const dynamicRoutes = [
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/Editor.vue'),
    hidden: false,
    permission: ['admin']
  },
  {
    path: '/blockEditor',
    name: 'blockEditor',
    component: () => import('@/views/BlockEditor/index.vue'),
    hidden: false,
    permission: ['admin']
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('@/views/tag/index.vue'),
    hidden: false,
    permission: ['admin']
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/testPage/index.vue'),
    hidden: false,
    permission: ['admin']
  },
  {
    path: '/userManage',
    name: 'userManage',
    component: () => import('@/views/UserManage/UserManage.vue'),
    hidden: false,
    permission: ['root']
  },
  {
    path: '/AritcleManage',
    name: 'AritcleManage',
    component: () => import('@/views/ArticleManage/ArticleManage.vue'),
    hidden: false,
    permission: ['root', 'admin']
  },
  {
    path: '/setPWD',
    name: 'setPWD',
    component: () => import('@/views/SetPWD/SetPWD.vue'),
    hidden: true,
    permission: ['root', 'admin', 'visitor']
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

router.beforeEach(async (to, from, next) => {
  if (getLocalToken()) {
    await store.dispatch('getPermission')

    await store.dispatch('GenerateRoutes', store.getters.permissions).then((routersToAdd) => {
      for (let item of routersToAdd) {
        if (!router.hasRoute(item.name)) {
          router.addRoute(item)
        }
      }
      next()
    })
  } else {
    next()
  }
})

router.onError((err) => {
  console.log('IN onError is,', err)
})

export default router
