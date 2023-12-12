import service from "./base";
export function allArticles(){
    return service({
        url:"/article/list",
        method:"get"
    })
}

export function createArticle(data){
    return service({
        url:"/article/create",
        method:"post",
        data
    })
}