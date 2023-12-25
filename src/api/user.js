import service from "./base";

export function allPerms(){
    return service({
        url:"/user/perms",
        method:"get"
    })
}