<template>
        <el-card class="box-card">
            <template #header>
            <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text @click="dialogVisible = true">ADD</el-button>
            </div>
            </template>
            <el-row>
                <el-col v-for="item in items" class="myCarouselItem">
                    <el-row justify="space-between" align="middle">
                        <el-col :span="8">
                            <el-text class="mx-1 tittle" size="large"  tag="b">{{item.tittleZh}}</el-text>
                        </el-col>

                        <el-col :span="8">
                            <el-row justify="end">
                                <el-button type="danger"  circle @click="deleteCarouselItem(item.id)">
                                    <el-icon><Delete /></el-icon>
                                </el-button>
                            </el-row>

                        </el-col>
                    </el-row>
                    
                    <el-row >
                        <el-col :span="6">
                            <img :src="item.cover" width="150" height="150">
                        </el-col>

                        <el-col :span="18">
                            <el-text class="mx-1">{{item.contentZh}}</el-text>
                        </el-col>
                    </el-row>
                    <el-row align="middle">
                        <el-col :span="3">
                            <el-text class="mx-1">{{item.createTime}}</el-text>
                        </el-col>   
                        <el-col :span="3">
                        
                            <el-icon class="view-icon"><View /></el-icon>
                            <el-text class="mx-1 view-text">{{item.visitorEn + item.visitorZh}}</el-text>
                        </el-col> 
                    </el-row>
                </el-col>
            </el-row>

            <el-dialog v-model="dialogVisible" title="添加轮播图" width="75%">
    
                <Cell :articles = "articleList" uiType = "CardCell" v-model="selectedArticles"></Cell>

                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="handleCancelAdd">Cancel</el-button>
                        <el-button type="primary" @click="handleConfimAdd">
                        Confirm
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-card>
</template>
<script setup>
import { getAllCarousels,addToCarousels,deleteCarousels} from '../api/appIndex';
import {allArticles} from "../api/article.js"
import { ref,onBeforeMount } from "vue";
import Cell from "@/components/Cell/index.vue"


let items = ref([])
let dialogVisible = ref(false)
const articleList = ref([])
const selectedArticles = ref([])

function getCarousels(){
  getAllCarousels().then((res)=>{
        items.value = res.data
    })
}

function handleConfimAdd(){
    addToCarousels(selectedArticles.value).then((res)=>{
        console.log(res)
        dialogVisible = false

        getCarousels()
    })
}

function handleCancelAdd(){

    console.log("in cancel")
    selectedArticles.value = []
    dialogVisible = false
}

function deleteCarouselItem(id){
    const data = {
        articleId:id
    }
    deleteCarousels(data).then((res)=>{
        getCarousels()
    })
}

onBeforeMount(()=>{
    allArticles().then((res)=>{
        console.log(res)
        articleList.value = res.data
        console.log(articleList)
    })

    getCarousels()

})

</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.myCarouselItem{
  margin-bottom: 20px;
}

.el-dialog{
   width: 95%;
}

.box-card{
    width:  100%;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.view-icon{
    position:relative;
    top: 2px;
    margin: 0 5px 0 10px
}

.tittle{
    font-size: 19px;
}
</style>