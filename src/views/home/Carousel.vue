<template>

  <el-card>
    <el-carousel indicator-position="outside">
    <!-- <el-carousel-item v-for="item in 4" :key="item">

      CarouselItem
    </el-carousel-item> -->

      <el-carousel-item v-for="item in items" >

        <div>
          <el-row>
            <el-text class="mx-1 view-text">{{item.tittleZh}}</el-text>
          </el-row>
          <el-row>
            <img :src="item.cover">
          </el-row>
       
        </div>
      </el-carousel-item>

  </el-carousel>
  </el-card>

  


  <!-- <ArticleList/> -->
  
</template>

<script setup>

import { getAllCarousels,addToCarousels,deleteCarousels} from '../../api/appIndex';
import { onBeforeMount ,ref} from 'vue';


const items = ref([])

onBeforeMount(()=>{
    getAllCarousels().then((res)=>{
        items.value = res.data.data
    })
})

</script>

<style scoped>
/* .el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
} */
/* 
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
} */

/* .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>

