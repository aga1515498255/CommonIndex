<template>
    <el-row :gutter="10">
        <el-col v-for=" article in contentList" :span="6" @click="handleClick(article.id)" :key="article.id">
            <el-card shadow="hover" class="CellItem">
                <div v-if="selectedItems != undefined"
                    :class="isSelected(article.id) ? 'selected selectBox' : 'unSelected selectBox'">
                    <el-icon v-if="isSelected(article.id).value">
                        <Check />
                    </el-icon>
                </div>
                <div>
                    <el-row><img :src="article.cover" alt="" height="120"></el-row>
                    <el-row><el-text size="large">{{ article.tittle }}</el-text></el-row>
                    <el-row><el-text type="info" size="small" line-clamp="3">{{ article.brief }}</el-text></el-row>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup>
import { useSelectMode } from './selectMode';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const router = useRouter()
const selectedItems = defineModel({ default: undefined })
const { isSelected, handleClickItem } = useSelectMode(selectedItems)
const props = defineProps(['articles', 'clickable'])
const { locale } = useI18n()

const contentList = computed(() => {
    return props.articles.map((item) => {
        let newItem = {}
        Object.assign(newItem, item)


        if (locale.value == "en") {
            newItem.content = newItem.contentEn
            newItem.tittle = newItem.tittleEn
            newItem.brief = newItem.breifEn
        }
        if (locale.value == "zh") {
            newItem.content = newItem.contentZh
            newItem.tittle = newItem.tittleZh
            newItem.brief = newItem.breifZh
        }
        return newItem
    })
})

const handleClick = (id) => {
    console.log("in handle click")
    if (selectedItems.value) { handleClickItem(id) }
    else if (props.clickable) { navigateTo(id) }
}

const navigateTo = (id) => {
    router.push({ path: "/article/" + id })
}



</script>

<style scoped>
.CardCell {
    border: 1px solid #D3D3D3;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    height: 100%;
}

.selectBox {
    border: 1px solid black;
    width: 10px;
    height: 10px;
}


.CellItem {
    cursor: pointer;
}

.selected {

    background-color: skyblue;
}

.unSelected {
    background-color: white;
}
</style>