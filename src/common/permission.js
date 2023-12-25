import router from "@/router"
import { getLocalToken } from "./LocalStroageUtil";
import store from "@/store"

router.beforeEach((to, from, next) => {
    // next();
    if(getLocalToken()) {
        store.dispatch('getPermission').then(()=>{
            store.dispatch('GenerateRoutes',store.getters.permissions).then(()=>{
                next();
            })
        })
    }else{
        next()
    }
});