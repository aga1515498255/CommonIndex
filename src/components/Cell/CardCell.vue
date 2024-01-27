<template>
    <div class="CardCell">
        <div v-if="props.selectedMode" :class="props.isSelected ? 'selected selectBox' : 'unSelected selectBox'" >
            <el-icon v-if="props.isSelected"><Check /></el-icon>
        </div>
        <div >
            <el-row><img :src="article.cover" alt="" height="150" width="200"></el-row>
            <el-row><el-text class="mx-1" size="large">{{article.tittleZh}}</el-text></el-row>
            <el-row><el-text class="mx-1" type="info" size="small"  line-clamp="4">{{article.breifZh}}</el-text></el-row>
         </div>
    </div>
</template>
<script setup>
const props = defineProps(['article','isSelected','selectedMode'])
const article = props.article
console.log(props.selectedMode)
    
</script>
    
    
<style scoped>
.CardCell{
    border:1px solid black;
    border-radius: 15px;
    overflow:hidden;
    padding: 10px;
    height: 100%;
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