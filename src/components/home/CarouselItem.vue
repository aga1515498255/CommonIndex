<template>


    <el-row justify="space-between" align="middle">
        <el-col :span="8">
            <el-text class="mx-1 tittle" size="large"  tag="b">{{item.tittleZh}}</el-text>
        </el-col>

        <el-col :span="8">
            <el-row justify="end">
                <el-button type="danger"  circle >
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
            <el-text class="mx-1 view-text">{{visitors}}</el-text>


        </el-col> 
    </el-row>


</template>


<script setup>

const props = defineProps(["item"])
const item = props.item

let visitors = item.visitorEn + item.visitorZh 
if (typeof(visitors )   != Number){
    visitors = 0
}


 console.log(item)
</script>

<style scoped>

.view-icon{
    position:relative;
    top: 2px;
    margin: 0 5px 0 10px
}

.tittle{
    font-size: 19px;
}
</style>