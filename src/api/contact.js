import service from "./base";


export function allContact(){
    return service({
        url:"/contract/all",
        method:"get"
    })
}


export function addContact(data){
    return service({
        url:"/contract/add",
        method:"post",
        data
    })
}
