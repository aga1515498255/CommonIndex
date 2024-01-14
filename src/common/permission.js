import router from "@/router"
import { getLocalToken } from "./LocalStroageUtil";
import store from "@/store"

router.beforeEach(async (to, from) => {
    // next();
    console.log("in beforeEach")
    
    if(getLocalToken()) {
        await store.dispatch('getPermission')
         
        await store.dispatch('GenerateRoutes',store.getters.permissions).then((routersToAdd)=>{
            // next({ ...to, replace: true });
            // router.addRoutes(routersToAdd)
            console.log(routersToAdd)
            for(let item of routersToAdd){
                router.addRoute(item)
            }
            // next()
            // next({ ...to, replace: true });
            return to.fullpath;
        })

    }else{
        // next()
        return to.name
    }
});