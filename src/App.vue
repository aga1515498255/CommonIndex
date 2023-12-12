<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from "./components/Header/HeaderBar.vue"
import {useHandleResize} from "./layout/HandleResize"
useHandleResize()
</script>

<template>

  <el-container>
  

    <el-header >
      <HeaderBar />
    </el-header>
    

    
    <el-main>
      <el-row justify="space-around">

          <el-col :span="18" >
           
              <RouterView />

           
          </el-col>
      </el-row>
    </el-main>
    
  </el-container>
  
  
</template>

<style scoped>

.el-header{

    /* background-color: white; */
    padding: 0;

}

</style>
