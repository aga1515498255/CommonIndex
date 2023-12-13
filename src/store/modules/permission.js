import { constantRoutes } from "../../router"
import { useStore } from 'vuex'
import { dynamicRoutes } from "../../router"

const store = useStore()

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
        GenerateRoutes({ commit }) {
            const routesToAdd  =filterRoutes()
            commit('SET_ROUTES', routesToAdd)
        }
    }

}


function filterRoutes(){
    const all_permission = "*:*:*";

    let routes = []
    const permissions = store.getters && store.getters.permissions
    dynamicRoutes.forEach(el => {
        if (el.permission.some(permissionInNeed => {
           return permissions.some(permissionOwned => {
            permissionOwned === all_permission || permissionOwned === permissionInNeed
            })
        })){
            routes.push(el)
        }
    });
    return routes
}
export default permission