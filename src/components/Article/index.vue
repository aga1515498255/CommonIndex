<template>

<el-table ref="multipleTableRef" :data="articleList" style="width: 100%" >
    <el-table-column type="selection" width="55" />
    <el-table-column prop="id" label="Date" width="180" />
    <el-table-column prop="tittleZh" label="tittleZh" width="180" />
    <el-table-column prop="tittleEn" label="tittleEn" width="180" />
    <el-table-column prop="delFlag" label="delFlag" width="180" />
    <el-table-column prop="createTime" label="createTime" width="180" />
</el-table>
</template>
<script setup>
import {allArticles} from "../../api/article.js"
import { ref,onBeforeMount } from "vue";

const articleList = ref([])
onBeforeMount(()=>{
    allArticles().then((res)=>{
        console.log(res)
        articleList.value = res.data
        console.log(articleList)
    })
})


function showMultipleTableRef(){
    console.log(multipleTableRef)
}


</script>


<style>
</style>