<template>
    <el-row justify="end">
        <el-col :span="3">
            <el-button type="primary" @click="showAddForm = true">添加</el-button>
        </el-col>

        <el-dialog v-model="showAddForm" title="添加块儿" width="50%">
            <BlockAdd :blockItem="blockOnAdd" :handler="hanldeAddSave" />
        </el-dialog>

    </el-row>
    <el-table :data="items" stripe style="width: 100%">
        <el-table-column prop="orderNum" label="顺序号" width="180" />
        <el-table-column prop="titleEn" label="英文标题" width="180" />
        <el-table-column prop="titleZh" label="中文标题" width="180" />
        <el-table-column prop="uiType" label="排版类型">
            <template #default="scope">
                <el-text>
                    {{ t("uiType." + scope.row.uiType) }}
                </el-text>
            </template>
        </el-table-column>
        <el-table-column prop="contentType" label="内容类型">
            <template #default="scope">
                <el-text>
                    {{ scope.row.contentType == 0 ? "标签" : "文章" }}
                </el-text>
            </template>
        </el-table-column>
        <el-table-column prop="clickable" label="是否可以跳转">
            <template #default="scope">
                <el-text>
                    {{ scope.row.clickable ? "是" : "否" }}
                </el-text>
            </template>
        </el-table-column>
        <el-table-column prop="pageable" label="是否分页">
            <template #default="scope">
                <el-text>
                    {{ scope.row.pageable ? "是" : "否" }}
                </el-text>
            </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
                <el-button link type="danger" size="small" @click="hanleClickDelete(scope.row.id)">删除</el-button>
                <el-button link type="primary" size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-dialog v-model="showEditForm" title="编辑内容区块" width="80%">
        <BlockEdit :blockItem="blockOnEdit" :handler="hanldeEditSave"></BlockEdit>
        <el-row justify="end" class="editArticleList">
            <el-col :span="3">
                <el-text></el-text>
            </el-col>
            <el-col :span="3">
                <el-button type="danger" @click="handleDeleteOnEdit">删除所选</el-button>
            </el-col>
            <el-col :span="3">
                <el-button type="success" @click="showAddContent = true">添加内容</el-button>
            </el-col>
            <el-dialog v-model="showAddContent" title="添加文章" width="80%">
                <el-row justify="end">
                    <el-col :span="3">
                        <el-button type="success" @click="handleAddContentToBlock">添加</el-button>
                    </el-col>
                </el-row>
                <el-scrollbar height="600px">
                    <ArtcleList v-model="seletedAddedArticles"></ArtcleList>
                </el-scrollbar>
            </el-dialog>
        </el-row>
        <Cell :articles="articlesOnEdit" uiType="InfoCell" v-model="selectedArticles"></Cell>
    </el-dialog>

    <el-dialog v-model="showDeleteConfirm" title="是否删除" width="50%">
        <el-text>
            是否删除该区块？
        </el-text>

        <el-row justify="end" :gutter="15">
            <el-col :span="3">
                <el-button @click="showDeleteConfirm = false">取消</el-button>
            </el-col>
            <el-col :span="3">
                <el-button type="danger" @click="handleDelete()">删除</el-button>
            </el-col>
        </el-row>

    </el-dialog>
</template>
<script setup>
import { allBlocks, createBlock, updateBlock, deleteBlock, insertBatcch, deleteBatcch } from "@/api/block.js"
import { onBeforeMount, ref } from "vue"
import { oneBlock } from "@/api/block.js"
import BlockEdit from "./BlockEdit.vue"
import BlockAdd from "./BlockEdit.vue"
import Cell from "@/components/Cell/index.vue"
import { useI18n } from "vue-i18n"
import ArtcleList from "@/components/Article/index.vue"
import { watch } from "vue"

const { t } = useI18n()
const items = ref([])
const blockOnEdit = ref({})
const blockOnAdd = ref({})
const showEditForm = ref(false)
const showAddForm = ref(false)
const showAddContent = ref(false)
const showDeleteConfirm = ref(false)
const tagsOnEdit = ref([])
const articlesOnEdit = ref([])
const seletedAddedArticles = ref([])
const blockToDelete = ref({ id: 0 })

const selectedArticles = ref([])

console.log("blockOnEdit is ", blockOnEdit)

watch(showAddContent, (newValue) => {
    if (!newValue) {
        seletedAddedArticles.value = []
    }
})

watch(showEditForm, (newValue) => {
    if (!newValue) {
        selectedArticles.value = []
    }
})


const fetchEditBlock = (blockId) => {
    oneBlock(blockId).then((res) => {

        tagsOnEdit.value = res.data.tags
        articlesOnEdit.value = res.data.articles

        Reflect.deleteProperty(res.data, "tags")
        Reflect.deleteProperty(res.data, "articles")
        blockOnEdit.value = res.data
        console.log(blockOnEdit.value)
        showEditForm.value = true
    })
}


const handleEdit = (blockId) => {
    console.log("in handleEdit blockId is " + blockId)
    fetchEditBlock(blockId)
}

const handleDeleteOnEdit = () => {
    const data = {
        blockId: blockOnEdit.value.id,
        articleIds: selectedArticles.value
    }
    deleteBatcch(data).then(() => {

        fetchEditBlock(blockOnEdit.value.id)
    })
}

const handleAddContentToBlock = () => {
    const data = {
        blockId: blockOnEdit.value.id,
        articleIds: seletedAddedArticles.value
    }
    insertBatcch(data).then(() => {
        fetchEditBlock(blockOnEdit.value.id)
        showAddContent.value = false
    })
}

const hanldeEditSave = (item) => {
    updateBlock(item).then(() => {
        getItems()
        showAddForm.value = false
    })
}

const hanldeAddSave = (item) => {
    createBlock(item).then(() => {
        getItems()
        showAddForm.value = false
    })
}

const hanleClickDelete = (id) => {
    blockToDelete.value.id = id
    showDeleteConfirm.value = true
}

const handleDelete = () => {
    deleteBlock(blockToDelete.value).then(() => {
        showDeleteConfirm.value = false
        getItems()
    })
}


const getItems = () => {
    allBlocks().then((res) => {
        console.log("in getItems data is ", res.data)
        items.value = res.data
    })
}



onBeforeMount(() => {
    getItems()
})

</script>


<style scoped>
.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}

.editArticleList {
    margin-top: 20px;
}
</style>