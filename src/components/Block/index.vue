<template>
    <div class="blockItem">

        <div>
            <el-row justify="space-between">
                <el-col :span="3" v-if="showTitle">
                    {{ title }}
                </el-col>

                <el-col :span="3">
                    {{ }}
                </el-col>
            </el-row>
            <p v-if="props.blockItem.title">
                <el-text size="large">
                    {{ props.blockItem.title }}
                </el-text>
            </p>
            <!-- <Cell :articles="props.blockItem.articles" :uiType="props.blockItem.uiType"></Cell> -->
            <component :is="cellTypes[props.blockItem.uiType]" :articles="props.blockItem.articles"
                :clickable="props.blockItem.clickable"></component>
        </div>
    </div>

</template>

<script setup>

import Cell from "@/components/Cell/index.vue"
import { useCellType } from '@/components/Cell/CellType.js';
import { computed } from 'vue'
import { useI18n } from 'vue-i18n';
const props = defineProps(['blockItem'])
const { t, locale } = useI18n()
const { cellTypes } = useCellType()
console.log(locale)

const showTitle = computed(() => {
    return (locale.value == 'en' && props.blockItem.titleEn != '') || (locale.value == 'zh' && props.blockItem.titleZh != '')
})

const title = locale.value == 'en' ? props.blockItem.titleEn : props.blockItem.titleZh

</script>



<style scoped>
.blockItem {
    width: 100%;
}
</style>