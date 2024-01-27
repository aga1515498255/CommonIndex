<template>
    <div class="CardCell">
        <el-row justify="space-between" align="middle">
                <el-col :span="8">
                    <el-text class="mx-1 tittle" size="large"  tag="b">{{article.tittleZh}}</el-text>
                </el-col>
        </el-row>
            
        <el-row >
            <el-col :span="6">
                <img :src="article.cover" width="150" height="150">
            </el-col>

            <el-col :span="18">
                <el-text class="mx-1">{{article.breifZh}}</el-text>
            </el-col>
        </el-row>
        <el-row align="middle">
            <el-col :span="3">
                <el-text class="mx-1">{{article.createTime}}</el-text>
            </el-col>   
            <el-col :span="3">
            
                <el-icon class="view-icon"><View /></el-icon>
                <el-text class="mx-1 view-text">{{article.visitorEn + article.visitorZh}}</el-text>
            </el-col> 
        </el-row>
        <el-divider />
    </div>
</template>
<script setup>
const props = defineProps(['article','isSelected','selectedMode'])
const article = props.article
console.log(props.selectedMode)
    
</script>
    
    
<style scoped>
.CardCell{
    /* border:1px solid black; */
    /* border-radius: 15px; */
    overflow:hidden;
    /* padding: 10px; */
    /* height: 100%; */
}

.selectBox{
    border: 1px solid black;
    width: 10px;
    height: 10px;
}

.selected{

    
    background-color: skyblue;
}

.unSelected{
    background-color: white;
}
</style>