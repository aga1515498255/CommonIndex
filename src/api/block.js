import service from "./base";

export function allBlocks(){
    return service({
        url:"/block/all",
        method:"get"
    })
}

export function oneBlock(blockId){
    return service({
        url:"/block/one/?blockId="+blockId,
        method:"get"
    })
}

export function createBlock(data){
    return service({
        url:"/block/create",
        method:"post",
        data
    })
}

export function updateBlock(data){
    return service({
        url:"/block/update",
        method:"post",
        data
    })
}

export function deleteBlock(data){
    return service({
        url:"/block/delete",
        method:"post",
        data
    })
}


export function addToBlock(data){
    return service({
        url:"/block/delete",
        method:"post",
        data
    })
}

export function insertBatcch(data){
    return service({
        url:"/block/article/batchInsert",
        method:"post",
        data
    })
}

export function deleteBatcch(data){
    return service({
        url:"/block/article/batchRemove",
        method:"post",
        data
    })
}



