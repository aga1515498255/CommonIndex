<template>

    <el-row >
        <el-col :span="1" @click="">
            <SelectedIcon :isSelected="isSelected"/>
        </el-col>
        <el-col :span="23">
            <el-descriptions
                class="margin-top"
                :column="4"

                border
            >
                <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                    <el-icon >
                        <user />
                    </el-icon>
                    ID
                    </div>
                </template>
                {{article.id}}
                </el-descriptions-item>

                <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                    <el-icon >
                        <iphone />
                    </el-icon>
                    中文标题
                    </div>
                </template>
                {{article.tittleZh}}
                </el-descriptions-item>

                <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                    <el-icon >
                        <iphone />
                    </el-icon>
                    英文标题
                    </div>
                </template>
                {{article.tittleEn}}
                </el-descriptions-item>

                <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                    <el-icon >
                        <location />
                    </el-icon>
                    创建时间
                    </div>
                </template>
                {{article.createTime}}
                </el-descriptions-item>


                <el-descriptions-item>
                <template #label>
                    <div class="cell-item">
                    <el-icon >
                        <location />
                    </el-icon>
                    简介
                    </div>
                </template>
                <el-text line-clamp="1">
                    {{article.breifZh}}
                </el-text>
                
                </el-descriptions-item>

            </el-descriptions>
        </el-col>
    </el-row>

    
</template>
<script setup>
import SelectedIcon from "@/components/SelectedIcon/index.vue"
import { toRef ,watch } from "vue";
const props = defineProps(['article','isSelected','selectedMode'])
const isSelected = toRef(props,"isSelected")
const article = props.article

watch(isSelected,(newValue)=>{
    console.log("in InfoCell isSelected is ",newValue)
})

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