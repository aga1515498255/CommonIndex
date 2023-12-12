
<template>
      <el-carousel indicator-position="outside">
    <!-- <el-carousel-item v-for="item in 4" :key="item">

      CarouselItem
    </el-carousel-item> -->

      <el-carousel-item v-for="item in items" >

       <CarouselItem :item="item"></CarouselItem>
      </el-carousel-item>

  </el-carousel>
</template>

<script setup>
// 轮播图组件
import { onBeforeMount,ref } from 'vue';
import CarouselItem from './CarouselItem.vue';
import {getAllCarousels} from '../../api/appIndex';

let items = ref([])

onBeforeMount(()=>{
   getAllCarousels().then((res)=>{
    console.log("in onBeforeMount getAllCarousels is ",res)
   })
})



// const items = [{
//   id:1731231481096859649,
//   cover: import.meta.env.VITE_BACKEND_PREFIX + "/static/images/壁纸.jpg",
//   tittleZh:"测试",
//   tittleEn:"test"
// },
// {
//   id:1731231481096859649,
//   cover:import.meta.env.VITE_BACKEND_PREFIX + "/static/images/壁纸.jpg",
//   tittleZh:"测试",
//   tittleEn:"test"
// },
// {
//   id:1731231481096859649,
//   cover:import.meta.env.VITE_BACKEND_PREFIX + "/static/images/壁纸.jpg",
//   tittleZh:"测试",
//   tittleEn:"test"
// }
// ]
</script>