<template>
    <el-card >
        <el-row align="middle" justify="space-between" >

        <el-col :span="1">  <el-icon :class="logo" :size="26"><ElementPlus /></el-icon></el-col>
        <el-col :span="17">

            <HorizontalRouters/>

        </el-col>
        <el-col :span="6" >
            <el-row >
                <el-col :span="12">
                    <el-button type="primary" >Search <el-icon><Search /></el-icon></el-button>
                </el-col>
                <el-col :span="12">
                    <el-dropdown>

                        <el-button text>Languages <img alt="Vue logo" class="logo" src="@/assets/languages.svg" width="25" height="25" /></el-button>

                        <template #dropdown>
                            <el-dropdown-menu>
                            <el-dropdown-item @click="changeLanguage('en')">English</el-dropdown-item>
                            <el-dropdown-item @click="changeLanguage('zh')">简体中文</el-dropdown-item>
                            
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-col>
       
    </el-row>
    </el-card>

  

</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { defineComponent} from 'vue';
import HorizontalRouters from "./HorizontalRouters/index.vue"
import { useI18n } from 'vue-i18n'

const {t, locale}  = useI18n()

function changeLanguage(flag){

    locale.value = flag
    // t.locale = locale
}



</script>

<style scoped>

</style>
