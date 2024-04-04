<template>
    <el-row>
        <el-col :span="24">
            <el-carousel trigger="click">
                <el-carousel-item v-for="item in contentList" :key="item.id">
                    <div class="CellItem" @click="handleClick(item.id)">
                        <el-row>
                            <el-text class="mx-1 view-text">{{ item.tittle }}</el-text>
                        </el-row>
                        <el-row>
                            <img :src="item.cover">
                        </el-row>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { locale } = useI18n()
const router = useRouter()
const props = defineProps(['articles', 'clickable'])
const handleClick = (id) => {

    if (props.clickable) {
        navigateTo(id)
    }

}


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

const navigateTo = (id) => {
    router.push({ path: "/article/" + id })
}




</script>

<style scoped>
.CellItem {
    cursor: pointer;
}
</style>