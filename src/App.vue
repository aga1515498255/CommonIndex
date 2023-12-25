<script>
// import { RouterView } from 'vue-router'
// import HeaderBar from "./components/Header/HeaderBar.vue"
import {useHandleResize} from "@/layout/HandleResize"
import {useMeta} from "vue-meta"
import Layout from "@/layout/index.vue"

  // useHandleResize()
  export default{
    components:{
        Layout
    },
    setup() {
      useHandleResize()
      useMeta(
          {
          title: import.meta.env.VITE_APP_NAME,
        }
      )
    }

  }
  
</script>

<template>

  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content}` : `Common Index` }}</template>
  </metainfo>


  <Layout/>
  <!-- <el-container>
  

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
    
  </el-container> -->
  
  
</template>

<style scoped>


</style>
