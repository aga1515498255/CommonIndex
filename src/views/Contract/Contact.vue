<template>

    <el-row v-if="isLogin" justify="end">
        <el-col :span="3">
            <el-button type="primary" >
                添加联系人
            </el-button>

            <el-dialog v-model="showAddForm" title="Shipping address" width="80%" >
                
            </el-dialog>
        </el-col>
    </el-row>

    <el-descriptions 
        v-for="item in contacts"
        :column="3"
        border
    >
        <el-descriptions-item>
        <template #label>
            <div class="cell-item">
            <el-icon :style="iconStyle">
                <user />
            </el-icon>
            {{ t("contact.contactName") }}
            </div>
        </template>
         {{ locale == "en" ? item.nameEn : item.nameZh }}
        </el-descriptions-item>

        <el-descriptions-item>
        <template #label>
            <div class="cell-item">
            <el-icon :style="iconStyle">
                <user />
            </el-icon>
            {{ t("contact.phonNo") }}
            </div>
        </template>
         {{ item.phoneNo }}
        </el-descriptions-item>

        <el-descriptions-item>
        <template #label>
            <div class="cell-item">
            <el-icon :style="iconStyle">
                <user />
            </el-icon>
            {{ t("contact.phonNo") }}
            </div>
        </template>
         {{ item.phoneNo }}
        </el-descriptions-item>

        

    </el-descriptions>
</template>
    
<script setup>
import {allContact} from "@/api/contact.js";
import { ref ,onBeforeMount,computed} from "vue";
import {useI18n } from 'vue-i18n';
import { useStore } from 'vuex'
const {t, locale}  = useI18n()
const contacts = ref([])
const showAddForm = ref(false)
const store = useStore()

const isLogin = computed(()=>{
      return store.getters.isLogin
}) 


onBeforeMount(()=>{
    allContact().then((res)=>{
        contacts.value = res.data
    })
})


</script>

<style>
    
</style>