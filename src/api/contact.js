import service from "./base";


export function allContact(){
    return service({
        url:"/contract/all",
        method:"get"
    })
}
