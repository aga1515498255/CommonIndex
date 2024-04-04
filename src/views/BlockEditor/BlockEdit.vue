<template>

    <el-form :model="blockItem">
        <el-form-item label="顺序号">
            <el-input-number v-model="blockItem.orderNum" :min="1" />
        </el-form-item>

        <el-form-item label="宽度">
            <el-input-number v-model="blockItem.width" :min="1" :max="10" />
        </el-form-item>

        <el-form-item label="英文标题">
            <el-input v-model="blockItem.titleEn" autocomplete="off" />
        </el-form-item>

        <el-form-item label="中文标题">
            <el-input v-model="blockItem.titleZh" autocomplete="off" />
        </el-form-item>

        <el-form-item label="排版类型">
            <el-select v-model="blockItem.uiType" placeholder="please select your zone">
                <template v-for="uiType in   uiTypes  " :key="uiType">
                    <el-option :label="t('uiType.' + uiType)" :value="uiType" />
                </template>
            </el-select>
        </el-form-item>
        <el-form-item label=" 内容类型">
            <el-select v-model="blockItem.contentType" placeholder="please select your zone">
                <el-option label="Tag" value=0 />
                <el-option label="Article" value=1 />
            </el-select>
        </el-form-item>
        <el-form-item label="是否可以点击跳转">
            <el-select v-model="blockItem.clickable" placeholder="please select your zone">
                <el-option label="true" value=true />
                <el-option label="false" value=false />
            </el-select>
        </el-form-item>
        <el-form-item label="是否分页">
            <el-select v-model="blockItem.pageable" placeholder="please select your zone">
                <el-option label="true" value=true />
                <el-option label="false" value=false />
            </el-select>
        </el-form-item>
    </el-form>

    <el-row justify="end">
        <el-button type="success" @click="props.handler(blockItem)">保存</el-button>
    </el-row>
</template>
<script setup>

import { toRef } from "vue";

import { useCellType } from "@/components/Cell/CellType.js"
import { useI18n } from "vue-i18n";
const { t } = useI18n()
const props = defineProps(['blockItem', "handler"])

const blockItem = toRef(props, "blockItem")
const { cellTypes } = useCellType()
const uiTypes = Reflect.ownKeys(cellTypes.value)


</script>