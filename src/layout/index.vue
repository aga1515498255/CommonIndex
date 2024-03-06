<template>

<el-container>
  


    <div class="app-sideBar" v-if="islogin">
        <Menu></Menu>
    </div>

    <div class="app-header">
        <HeaderBar />
    </div>
  <!-- <el-header > -->
  
  <!-- </el-header> -->
  

  <div class="app-main">
    <el-scrollbar >
        <el-row justify="space-around">

            <el-col :span="18" class="content">

                <RouterView />

            </el-col>
        </el-row>
    </el-scrollbar>
    
  </div>


  
  <!-- <el-main>
   
  </el-main> -->
  
</el-container>
    
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from "@/components/Header/HeaderBar.vue"
import store from "@/store/index.js"
import Menu from "./menu/index.vue"

const islogin = store.getters.isLogin;
</script>

<style scoped>
.app-header{
    position:fixed;
    height: 60px;
    width: 100%;
    z-index: 50;
}
.app-sideBar{

    float: left;
    height: 100vh;
}
.app-main{
    padding-top: 80px;
    width: 100%;
    height: 100vh;

}
.content{
    background-color: white;
    padding: 15px;
    border: 1px solid 	#D3D3D3;
}


</style>