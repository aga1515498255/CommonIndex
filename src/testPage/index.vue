<template>
        <el-button @click="router.push({name:'BlockIndex'})">
            BlockIndex测试
        </el-button>
        <el-button @click="router.push({name:'DynamicComponent'})">
            动态组件测试
        </el-button>
</template>
    
<script setup>
// import router from '@src/router/index.js'


import { useRouter} from 'vue-router'
import C from "./views/BlockIndex.vue"
import DynamicComponent from "./views/DynamicComponent.vue"
const router = useRouter()


router.addRoute({
    name:'BlockIndex',
    path:'/testView/BlockIndex',
    component:C
})
router.addRoute({
    name:'DynamicComponent',
    path:'/testView/DynamicComponent',
    component:DynamicComponent
})
</script>
    
<style>
    
</style>