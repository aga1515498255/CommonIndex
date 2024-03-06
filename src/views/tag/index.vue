<template>
    <div>
        <el-row>
            <el-col>
                <el-button type="primary" round @click="showAddForm = true">Primary</el-button>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <el-table :data="tags" style="width: 100%">
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column prop="tagKey" label="tagKey" width="180" />
                <el-table-column prop="delFlag" label="delFlag" />
                <el-table-column prop="tagNameZh" label="tagNameZh" />
                <el-table-column prop="tagNameEn" label="tagNameEn" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default = "scope">
                        <el-button link type="danger" size="small" @click="handleClick">Delete</el-button>
                        <el-button link type="primary" size="small" @click="handleClickEdit(scope.row.tagKey)">Edit</el-button>
                    </template>
                </el-table-column>
           </el-table>
        </el-row>
        
    </div>

    <el-dialog v-model="showAddForm" title="添加标签">
        <el-form>
            <el-form-item label="标签值">
                <el-input v-model="tagFormData.tagKey" />
            </el-form-item>
            <el-form-item label="标签中文名">
                <el-input v-model="tagFormData.tagNameZh" />
            </el-form-item>
            <el-form-item label="标签英文名">
                <el-input v-model="tagFormData.tagNameEn" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="addTag">Create</el-button>
                <el-button  @click="showAddForm = false">Cancel</el-button>
            </el-form-item>


        </el-form>
    </el-dialog>

    <el-dialog v-model="showEdit" title="编辑标签" width="75%">
        <TagEditor :tagKey="tagKeyOnEdit" v-model="showEdit">

        </TagEditor>
    </el-dialog>
</template>
<script setup>
import {getAllTags,createTag} from "@/api/tag.js"
import { ref,onBeforeMount ,reactive,watch} from 'vue'
import TagEditor from "@/views/tag/TagEditor.vue"

const showAddForm = ref(false);
const showEdit = ref(false);

const tagKeyOnEdit = ref("")

const tagFormData = reactive({
  tagKey: '',
  tagNameZh:'',
  tagNameEn:''
})

const tags = ref([])

watch(showAddForm,(newValue)=>{
    if(!newValue){

    }
})

const getAllTag = ()=>{
    getAllTags().then((res)=>{
        tags.value = res.data
    })
}

const addTag = ()=>{
    createTag(tagFormData).then((res)=>{
        if(res.code == 200){
            tagFormData.tagKey = ""
            tagFormData.tagNameZh = ""
            tagFormData.tagNameEn = ""
            showAddForm.value = false

            getAllTag()
        }
        console.log(res)
    })
}

onBeforeMount(()=>{
    getAllTag()
})

const handleClickEdit = (tagKey)=>{
    tagKeyOnEdit.value = tagKey
    showEdit.value = true
}


</script>
