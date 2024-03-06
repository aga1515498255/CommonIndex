<template>
    <el-row v-for="item in items">
        <Block  :blockItem = "item"/>
    </el-row>
    
</template>
<script setup>
import Block from "@/components/Block/index.vue"
import {allBlocks} from "@/api/block"
import { onBeforeMount,ref } from "vue";

const items = ref([])

onBeforeMount(()=>{
    allBlocks().then((res)=>{

        console.log("in allBlock res =  ")
        console.log(res)
        items.value = res.data

        
        
    })
})


</script>
