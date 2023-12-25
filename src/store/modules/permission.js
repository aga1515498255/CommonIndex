import { constantRoutes } from "../../router"
import { useStore } from 'vuex'
import { dynamicRoutes } from "../../router"
import router from "@/router"


const permission={
    state:{
        routes: [],
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
          state.addRoutes = routes
          state.routes = constantRoutes.concat(routes)
        },
      },
    actions: {
        GenerateRoutes({ commit },permissions) {
           
            const routesToAdd  = filterRoutes(permissions)
            console.log("in GenerateRoutes routesToAdd is ",routesToAdd)
            commit('SET_ROUTES', routesToAdd)
        }
    }
}


function filterRoutes(permissions){
    const all_permission = "*:*:*";

    let routes = []
    // const permissions =  store.getters.permissions
    dynamicRoutes.forEach(el => {
        if (el.permission.some(permissionInNeed => {
           return permissions.some(permissionOwned => {
             return  permissionOwned === all_permission || permissionOwned === permissionInNeed
            })
        })){
            routes.push(el)
            router.addRoute(el)
        }
    });
    return routes
}
export default permission