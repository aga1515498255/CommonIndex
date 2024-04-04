<template>
    <el-button @click="handleChange">
        更换ui
    </el-button>

    <component :is="cellTypes[currentui]" v-model='selectedItems' :articles="fakeArticles">

    </component>
</template>

<script setup>
import { useCellType } from '@/components/Cell/CellType.js';
import { ref } from 'vue';

const currentui = ref("CardCell")

const selectedItems = ref([])

const { cellTypes } = useCellType()

const fakeArticles = ref([
    {
        id: 1,
        tittleZh: "abc",
        tittleEn: 'bcd',
        breifEn: "123456",
        breifZh: "465",
        cover: ""
    },
    {
        id: 2,
        tittleZh: "abc",
        tittleEn: 'bcd',
        breifEn: "123456",
        breifZh: "465",
        cover: ""
    }
])

console.log(cellTypes)

const handleChange = () => {
    if (currentui.value == "CardCell") {
        currentui.value = 'InfoCell'
    } else {
        currentui.value = 'CardCell'
    }
}


</script>

<style></style>