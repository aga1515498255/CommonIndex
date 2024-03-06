<template>
    <el-row v-if="props.uiType == 'CardCell'" :gutter="20">
        <el-col v-for=" article in articles" :span = "6" @click="function(e){if (selectedItems) handleClickItem(article.id) }"  :key="article.id"> 
            <CardCell  :article="article" 
                    :isSelected="selectedItems != undefined &&  isSelected(article.id).value " 
                    :selectedMode="selectedItems != undefined" >
            </CardCell>
        </el-col>
    </el-row>


    <el-row v-if="props.uiType == 'RowCell'" :gutter="20">
        <el-col v-for=" article in articles" :span = "24" @click="function(e){if (selectedItems) handleClickItem(article.id) } "  :key="article.id"> 
            <RowCell  :article="article" 
                    :isSelected="selectedItems != undefined && isSelected(article.id).value" 
                    :selectedMode="selectedItems != undefined" >
            </RowCell>
        </el-col>
    </el-row>

    <el-row v-if="props.uiType == 'InfoCell'" :gutter="20">
        <el-col v-for=" article in articles" :span = "24" @click="function(e){if (selectedItems) handleClickItem(article.id) }"  :key="article.id"> 
            <InfoCell  :article="article" 
                    :isSelected="selectedItems != undefined && isSelected(article.id).value" 
                    :selectedMode="selectedItems != undefined" >
            </InfoCell>
        </el-col>
    </el-row>

    <el-text v-if="articles.length == 0 || articles == undefined || articles == null">
        暂无数据
    </el-text>
</template>
<script setup>

import { defineAsyncComponent,defineModel ,computed} from 'vue'

const props = defineProps(['articles','uiType'])
console.log(props)



const CardCell = defineAsyncComponent(() =>
    import('@/components/Cell/CardCell.vue')
)

const RowCell = defineAsyncComponent(() =>
  import('@/components/Cell/RowCell.vue')
)

const InfoCell = defineAsyncComponent(() =>
  import('@/components/Cell/InfoCell.vue')
)

const selectedItems = defineModel({ default: undefined })

// const emit = defineEmits(["update:modelValue"])

const isSelected = (articleId)=>{
    return computed(() => {

        if(selectedItems.value == undefined){
            return false
        }else{
            return  selectedItems.value.includes(articleId)
        }
    });
}

const handleClickItem = (articleId)=>{//点击item触发编辑
    console.log("in handle click item")
    if(isSelected(articleId).value){
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
    
    
<style scoped>
.el-col{
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>