<template>

    <el-card>
        <el-row justify="space-between">
            <el-col :span="3">
                <el-button type="primary" :span="3" @click="handleCreate">
                    添加文章
                </el-button>
            </el-col>
            <el-col :span="3">
                <el-button type="danger" :disabled="!editEnable" @click="handleDelete">
                    删除所选
                </el-button>

            </el-col>
        </el-row>



        <Cell v-model="selectedArticles" :articles="articleList" uiType="InfoCell"></Cell>
    </el-card>
</template>

<script setup>

import { useRouter } from "vue-router";
import { batchDelete } from "@/api/article.js"



import { allArticles } from "../../api/article.js"
import { ref, computed, onBeforeMount } from "vue";

import Cell from "@/components/Cell/index.vue"
const articleList = ref([])

const router = useRouter()
const selectedArticles = ref([])
const editEnable = computed(() => {
    if (selectedArticles.value.length > 0) {
        return true
    } else {
        return false
    }
})

const fetchArticles = () => {
    allArticles().then((res) => {
        articleList.value = res.data
    })
}

onBeforeMount(() => {
    fetchArticles()

})

const handleCreate = () => {
    router.push({ path: "/editor" })
}
const handleDelete = () => {
    batchDelete(selectedArticles.value).then(() => {
        fetchArticles()
    })
}

</script>

<style></style>