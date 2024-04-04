<template>


  <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="/"
    text-color="#fff" @open="handleOpen" @close="handleClose" router>


    <el-menu-item v-for=" item in routes" :index="item.path" v-show="item.hidden == false" :key="item.name">
      <!-- <el-icon><icon-menu /></el-icon> -->
      <span v-if="!item.hidden">{{ t("navigatorBar." + item.name) }}</span>
    </el-menu-item>


    <!-- <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item> -->
  </el-menu>

</template>
<script setup>

import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { computed } from 'vue';

const { t } = useI18n()
const store = useStore()
let routes = computed(() => {
  return store.getters.routes
})


const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}


</script>


<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
  padding-top: 80px;
}
</style>