<template>

    <Cell  v-model="selectedItems" :articles="articleList" uiType = "InfoCell"></Cell>


</template>
<script setup>
import {allArticles,getArticlesByTags as getArticlesByTagsApi} from "../../api/article.js"
import { ref,onBeforeMount,defineModel,toRef,watch } from "vue";

import Cell from "@/components/Cell/index.vue"

const props = defineProps(['tags','uiType'])

const articleList = ref([])
const selectedItems = defineModel({ default: undefined })
const tags =  toRef(props,"tags") 

// onBeforeMount(()=>{

//     console.log("in aritcle onBeforeMount")

//         allArticles().then((res)=>{
//                 console.log("in aritcles")
//             console.log(res)
//             articleList.value = res.data
//             console.log(articleList)
//         })
 
// })

watch(
    tags,
    async () => {

        console.log("in aritcle watch tags is", tags.value)

        if(tags.value == [] || tags.value == null || tags.value == undefined){

            console.log("in if a")
            await allArticles().then((res)=>{
                console.log("in aritcles")
                console.log(res)
                articleList.value = res.data
                console.log(articleList)
            })

        }else{
            await getArticlesByTagsApi().then((res)=>{
                console.log(res)
                articleList.value = res.data
                console.log(articleList)
            })
        }

    },
    { immediate: true ,deep:true}
)

function getArticlesByTags(){
    getArticlesByTagsApi().then((res)=>{
            console.log(res)
            articleList.value = res.data
            console.log(articleList)
        })
}


function showMultipleTableRef(){
    console.log(multipleTableRef)
}


</script>


<style>
</style>