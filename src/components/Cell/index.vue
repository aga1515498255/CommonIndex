<template>
    <el-row v-if="props.uiType == 'CardCell'" :gutter="20">
        <el-col v-for=" article in articles" :span = "6" @click="function(e){if (selectedItems) handleClickItem(article.id) }"> 
            <CardCell  :article="article" 
                    :isSelected="selectedItems != undefined && isSelected(article.id) " 
                    :selectedMode="selectedItems != undefined" >
            </CardCell>
        </el-col>
    </el-row>

    <el-row v-if="props.uiType == 'RowCell'">
        <el-col v-for=" article in articles">
            <RowCell :article="article" 
                    :isSelected="selectedItems != undefined && isSelected(article.id) " 
                    :selectedMode="selectedItems != undefined" >
            </RowCell>
        </el-col>
    </el-row>
</template>
<script setup>

// import CardCell from './CardCell.vue';

import { defineAsyncComponent,defineModel } from 'vue'

const CardCell = defineAsyncComponent(() =>
  import('@/components/Cell/CardCell.vue')
)

const RowCell = defineAsyncComponent(() =>
  import('@/components/Cell/RowCell.vue')
)

const props = defineProps(['articles','uiType'])


// const selectedItems = props.modelValue
const selectedItems = defineModel({ default: undefined })

// const emit = defineEmits(["update:modelValue"])

const isSelected = (articleId)=>{
    return selectedItems.value.some((item)=>{
        return item == articleId
    })
}

const handleClickItem = (articleId)=>{//点击item触发编辑
    console.log("in handle click item")
    if(isSelected(articleId)){
        console.log("in isSelected")

        for (let i = 0; i < selectedItems.value.length; ++i) {
            if(selectedItems.value[i] == articleId){
                const t = selectedItems.value[i]
                selectedItems.value[i] = selectedItems.value[0]
                selectedItems.value[0] = t;
                break
            }
        }

        selectedItems.value.shift()


    }else{
        console.log("in isNotSelected")
        selectedItems.value.push(articleId)

    }

    console.log(selectedItems.value)
}
    
</script>
    
    
<style>
</style>