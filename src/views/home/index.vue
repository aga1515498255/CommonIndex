<template>


  <el-row v-for="item in items" class="blockRow" :key="item.id">
    <Block :blockItem="item" />
  </el-row>

</template>
<script setup>
import Block from "@/components/Block/index.vue"
import { allBlocks } from "@/api/block"
import { onBeforeMount, ref } from "vue";

const items = ref([])

onBeforeMount(() => {
  allBlocks().then((res) => {
    console.log("in allBlock res =  ")
    console.log(res)
    res.data.sort((a, b) => a.orderNum - b.orderNum)
    console.log("sorted Item is", res.data)
    items.value = res.data
  })
})


</script>
<style scoped>
.blockRow {
  background-color: white;
  border: 1px solid #DCDCDC;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 8px;
}
</style>