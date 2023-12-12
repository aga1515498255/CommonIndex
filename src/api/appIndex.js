import service from "./base";

export function getAllCarousels(){
    return service({
        url:"/index/carousel/all",
        method:"get"
    })
}

export function addToCarousels(data){
    return service({
        url:"/index/carousel/insert",
        method:"post",
        data
    })
}

export function deleteCarousels(data){
    return service({
        url:"/index/carousel/delete",
        method:"post",
        data
    })
}