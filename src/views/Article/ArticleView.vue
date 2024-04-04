<template>

    <el-row>
        <el-col :span="20">
            <MdPreview editorId="content" :modelValue="content" class="markdownDoc" />
        </el-col>
        <!-- <el-col :span="4">
            <MdCatalog editorId="scroll" :scrollElement="scrollElement" />
        </el-col> -->
    </el-row>

</template>

<script setup>
import { useRoute } from 'vue-router';
import { MdPreview, MdCatalog } from 'md-editor-v3';
import { computed, onBeforeMount, ref } from 'vue';
import { getOneArticle } from '@/api/article';
import { useI18n } from 'vue-i18n';
import 'md-editor-v3/lib/style.css';
import { watch } from 'vue';
const { locale } = useI18n()
const route = useRoute()
const content = ref("")

const article = ref({})

const scrollElement = document.documentElement;

watch(locale, () => {
    updateContent()
},
    { deep: true })
watch(article, () => {
    updateContent()
},
    { deep: true })


const updateContent = () => {
    if (locale.value == "zh") {
        content.value = article.value.contentZh
    }

    if (locale.value == "en") {
        content.value = article.value.contentEn
    }
}

onBeforeMount(() => {
    getOneArticle(route.params.id).then((res) => {
        article.value = res.data

        console.log("article is ", article.value)
    })
})


</script>

<style></style>