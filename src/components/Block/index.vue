<template>
    <el-card >
        <el-row v-if="props.blockItem.title">
            123
        </el-row>
        <el-row >
            <Cell :articles="props.blockItem.articles" :uiType="props.blockItem.uiType"></Cell>
        </el-row>
    </el-card>

</template>

<script setup>

import Cell from "@/components/Cell/index.vue"

const props = defineProps(['blockItem'])


</script>


<style scoped>
</style>