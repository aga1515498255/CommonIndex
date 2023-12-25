<template>
    <el-card>
        <el-row v-for="item in items">
            <el-col :span="24">
                    <el-row justify="space-between" align="middle">
                        <el-col :span="8">
                            <el-text class="mx-1 tittle" size="large"  tag="b">{{item.tittleZh}}</el-text>
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
                            <el-text class="mx-1 view-text">{{item.visitorEn + item.visitorZh}}</el-text>


                        </el-col> 
                    </el-row>
            </el-col>
            <el-divider />
        </el-row>
       
    </el-card>

</template>

<script setup>
import { allArticles } from '../../api/article';
import { ref,onBeforeMount } from 'vue';


const items = ref([])

onBeforeMount(()=>{
    allArticles().then((res)=>{
        items.value = res.data
    })
})
</script>
<style scoped>
.view-icon{
    position:relative;
    top: 2px;
    margin: 0 5px 0 10px
}

</style>