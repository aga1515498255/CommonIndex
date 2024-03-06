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

export function getArticlesByTags(data){
    return service({
        url:"//article/getByTagKeys",
        method:"post",
        data
    })
}