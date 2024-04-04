<template>
         <div>
            <el-row>
                <el-text class="mx-1 view-text">{{item.tittleZh}}</el-text>
            </el-row>
            <el-row>
                <img :src="item.cover">
            </el-row>
       
        </div>
</template>
    
<script setup >
    const props = defineProps(["item"])
    const item = props.item
</script>
    
<style scoped>
    
</style>