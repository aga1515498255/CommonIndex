<template>
    <el-row :gutter="20">
        <el-col v-for=" article in contentList" :span="24" @click="handleClick" :key="article.id">
            <el-row>
                <el-col :span="1">
                    <SelectedIcon :isSelected="isSelected(article.id).value" />
                </el-col>
                <el-col :span="23">
                    <el-descriptions class="margin-top" :column="4" border>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <user />
                                    </el-icon>
                                    ID
                                </div>
                            </template>
                            {{ article.id }}
                        </el-descriptions-item>

                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <iphone />
                                    </el-icon>
                                    中文标题
                                </div>
                            </template>
                            {{ article.tittleZh }}
                        </el-descriptions-item>

                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <iphone />
                                    </el-icon>
                                    英文标题
                                </div>
                            </template>
                            {{ article.tittleEn }}
                        </el-descriptions-item>

                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <location />
                                    </el-icon>
                                    创建时间
                                </div>
                            </template>
                            {{ article.createTime }}
                        </el-descriptions-item>


                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <location />
                                    </el-icon>
                                    简介
                                </div>
                            </template>
                            <el-text line-clamp="1">
                                {{ article.breifZh }}
                            </el-text>

                        </el-descriptions-item>

                    </el-descriptions>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup>
import { useSelectMode } from './selectMode';
import SelectedIcon from "@/components/SelectedIcon/index.vue"
import { useRouter } from 'vue-router';
import { computed } from 'vue';
const router = useRouter()

const selectedItems = defineModel({ default: undefined })
const { isSelected, handleClickItem } = useSelectMode(selectedItems)
const props = defineProps(['articles', 'clickable'])
console.log("in cardCell")
console.log(props)

const handleClick = (id) => {
    console.log("in handle click")
    if (selectedItems.value) { handleClickItem(id) }
    else if (props.clickable) { navigateTo(id) }
}

const navigateTo = (id) => {
    router.push({ path: "/article", query: { id: id } })
}


const contentList = computed(() => {
    return props.articles.map((item) => {
        let newItem = {}
        Object.assign(newItem, item)

        console.log("locale is ", locale.value)

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



</script>

<style></style>