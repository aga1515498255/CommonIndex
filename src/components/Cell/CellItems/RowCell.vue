<template>
    <el-row :gutter="20">
        <el-col v-for=" article in contentList" :span="24" @click="handleClick(article.id)" :key="article.id">
            <div class="CardCell">
                <el-row justify="space-between" align="middle">
                    <el-col :span="8">
                        <el-text class="mx-1 tittle" size="large" tag="b">{{ article.tittle }}</el-text>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6">
                        <img :src="article.cover" width="150" height="150">
                    </el-col>

                    <el-col :span="18">
                        <el-text class="mx-1">{{ article.breif }}</el-text>
                    </el-col>
                </el-row>
                <el-row align="middle">
                    <el-col :span="3">
                        <el-text class="mx-1">{{ article.createTime }}</el-text>
                    </el-col>
                    <el-col :span="3">

                        <el-icon class="view-icon">
                            <View />
                        </el-icon>
                        <el-text class="mx-1 view-text">{{ article.visitorEn + article.visitorZh }}</el-text>
                    </el-col>
                </el-row>
                <el-divider />
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { useSelectMode } from './selectMode';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
const router = useRouter()
const { locale } = useI18n()
const selectedItems = defineModel({ default: undefined })
const { handleClickItem } = useSelectMode(selectedItems)
const props = defineProps(['articles', 'clickable'])

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
    if (selectedItems.value !== undefined) { handleClickItem(id) }
    else if (props.clickable) { navigateTo(id) }
}

const navigateTo = (id) => {
    router.push({ path: "/article/" + id })
}




</script>

<style></style>