<template>

    <el-row justify="space-between">
        <el-col :span="6">
            <el-text  tag="b" class="containedTitle">
                所有文章
            </el-text>
        </el-col >
        <el-col :span="2">
            <el-button type="primary" @click="hanldeAddArticletoTag">添加</el-button>
        </el-col>
    </el-row>


    <el-scrollbar height="400px">
        <ArtcleList v-model="selectedItems">

        </ArtcleList>
    </el-scrollbar>

    <el-divider></el-divider>

    <el-row justify="space-between">
        <el-col :span="6">
            <el-text  tag="b" class="containedTitle">
                已存在于该标签的文章
            </el-text>
        </el-col >
        <el-col :span="2">
            <el-button type="danger" @click="handleRemove">删除所选</el-button>
        </el-col>
    </el-row>



    <el-scrollbar height="400px">

        <Cell :articles="containedAritcles" uiType="InfoCell" v-model="selectedItemsToDelete">

        </Cell>   

    </el-scrollbar>



</template>
<script setup>
import ArtcleList from "@/components/Article/index.vue"

import {findAllArticles,addToArticle,removeTagFromArticles} from "@/api/tag.js"
import { ref,onBeforeMount, toRef, watch ,defineModel} from "vue";
import Cell from "@/components/Cell/index.vue"


const isOpen = defineModel({ default: false })
const selectedItems = ref([])
const containedAritcles = ref([])
const selectedItemsToDelete = ref([])
const props = defineProps(['tagKey'])
const tagKey = toRef(props,"tagKey")

const findTagArticles = (tagKey)=>{
    findAllArticles(tagKey).then((res)=>{
        console.log("res in findAllArticles",res)
        containedAritcles.value = res.data
    })
}

watch(tagKey,(newValue,oldValue) => {
    findTagArticles(newValue)
},{immediate:true})


watch(isOpen,(newValue,oldValue) => {
    if (!newValue){
        selectedItems.value =[]
        selectedItemsToDelete.value = []
    }
})


onBeforeMount(()=>{
    findTagArticles(props.tagKey)
})


const hanldeAddArticletoTag = ()=>{
    const data = {
        tagKey:tagKey.value,
        articleId:selectedItems.value
    }
    addToArticle(data).then((res)=>{
        selectedItems.value = []
        findTagArticles(tagKey.value)
    })
}

const handleRemove = ()=>{
    const data = {
        tagKey:tagKey.value,
        articleId:selectedItemsToDelete.value
    }
    removeTagFromArticles(data).then((res)=>{
        selectedItemsToDelete.value = []
        findTagArticles(tagKey.value)
    })
}

</script>
<style scoped>
    .containedTitle{
        margin-bottom: 10px;
        margin-top: 20px;
        font-size: var(--el-font-size-extra-large);
    }
</style>