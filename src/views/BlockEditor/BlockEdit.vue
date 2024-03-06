<template>
        
        <el-form  :model="blockItem">
            <el-form-item label="orderNum" >
                <el-input-number v-model="blockItem.orderNum" :min="1"/>
            </el-form-item>

            <el-form-item label="width" >
                <el-input-number v-model="blockItem.width" :min="1" :max="10"/>
            </el-form-item>

            <el-form-item label="titleEn" >
                <el-input v-model="blockItem.titleEn" autocomplete="off" />
            </el-form-item>

            <el-form-item label="titleZh" >
                <el-input v-model="blockItem.titleZh" autocomplete="off" />
            </el-form-item>
            
            <el-form-item label="uiType" >
                <el-select v-model="blockItem.uiType" placeholder="please select your zone">
                    <template v-for="uiType in uiTypes">
                        <el-option :label="uiType" :value= "uiType" />
                    </template>
                </el-select>
            </el-form-item>
            <el-form-item label="contentType">
                <el-select v-model="blockItem.contentType" placeholder="please select your zone">
                    <el-option label="Tag" value= 0 />
                    <el-option label="Article" value = 1 />
                </el-select>
            </el-form-item> 
            <el-form-item label="clickable">
                <el-select v-model="blockItem.clickable" placeholder="please select your zone">
                    <el-option label="true" value= true />
                    <el-option label="false" value = false />
                </el-select>
            </el-form-item> 
            <el-form-item label="pageable">
                <el-select v-model="blockItem.pageable" placeholder="please select your zone">
                    <el-option label="true" value= true />
                    <el-option label="false" value = false />
                </el-select>
            </el-form-item> 
        </el-form>

        <el-row justify="end">
            <el-button type="success" @click="props.handler(blockItem)">保存</el-button>
        </el-row>
</template>
<script setup>

import { ref ,toRef} from "vue";

import {allCellType} from "@/components/Cell/CellType.js"
const props = defineProps(['blockItem',"handler"])

const blockItem = toRef(props,"blockItem")

const uiTypes = Reflect.ownKeys(allCellType)


</script>