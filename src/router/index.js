import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import { getLocalToken } from "@/common/LocalStroageUtil";
import store from "@/store"


export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
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
    path: '/blockIndex',
    name: 'blockIndex',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/testPage/BlockIndex.vue'),
    hidden:false
  },
  {
    path: '/blockEditor',
    name: 'blockEditor',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/BlockEditor/index.vue'),
    hidden:false
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Contract/Contact.vue'),
    hidden:false
  },

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
  },
  {
    path: '/tag',
    name: 'tag',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/tag/index.vue'),
    hidden:false,
    permission:["tag:list"]
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})



router.beforeEach(async (to, from,next) => {
    // next();
    console.log("in beforeEach")
    
    if(getLocalToken()) {
        await store.dispatch('getPermission')
         
        await store.dispatch('GenerateRoutes',store.getters.permissions).then((routersToAdd)=>{
            // next({ ...to, replace: true });
            // router.addRoutes(routersToAdd)
            console.log(routersToAdd)
            for(let item of routersToAdd){
                if(!router.hasRoute(item.name)){
                  router.addRoute(item)
                }
                
            }
            next()
        })

    }else{
        next()

    }
});

router.onError((err)=>{
  console.log("IN onError is,",err)
})

export default router
