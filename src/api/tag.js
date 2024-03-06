import service from "./base";
export function getAllTags(){
    return service({
        url:"/tag/all",
        method:"get"
    })
}

export function findAllArticles(data){
    return service({
        url:"/tag/findAll?tagKey="+data,
        method:"get"
    })
}

export function createTag(data){
    return service({
        url:"/tag/create",
        method:"post",
        data
    })
}

export function addToArticle(data){
    return service({
        url:"/tag/addToArticle",
        method:"post",
        data
    })
}

export function removeTagFromArticles(data){
    return service({
        url:"/tag/removeTagFromArticles",
        method:"post",
        data
    })
}