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
            <!-- <el-table  :data="articleList" style="width: 100%" >
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column prop="tittleZh" label="tittleZh" width="180" />
                <el-table-column prop="tittleEn" label="tittleEn" width="180" />
                <el-table-column prop="delFlag" label="delFlag" width="180" />
                <el-table-column prop="createTime" label="createTime" width="180" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default="scope">
                    <el-button
                        link
                        type="primary"
                        size="small"
                        @click.prevent="addToCarousel(scope.row.id)"
                    >
                        ADD
                    </el-button>
                    </template>
                </el-table-column>

            </el-table> -->
                <ArticleList/>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">
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
import ArticleList from "@/components/Article/index.vue"

let items = ref([])
let dialogVisible = ref(false)
const articleList = ref([])

function getCarousels(){
  getAllCarousels().then((res)=>{
        items.value = res.data.data
    })
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
        articleList.value = res.data.data
        console.log(articleList)
    })

    getCarousels()
})




function addToCarousel(articleId){
  const data = {
    articleId:articleId
  }
  addToCarousels(data).then((res)=>{
    console.log("in addToCarousel res is ",res)
    getCarousels()
  })
}
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