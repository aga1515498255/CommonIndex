<template>

    <div>

        <el-icon v-if="props.isSelected" color="blue"><Check /></el-icon>
        <div v-else  class="boxIcon" >
        </div>

    </div>

</template>

<script setup>
import { defineProps } from 'vue';
import { toRef } from 'vue';


const props =  defineProps({
  isSelected: Boolean
})



console.log("in selectedIcon is selected is ",props.isSelected)

// watch(selected,(newValue)=>{
//     console.log("in selected Icon",newValue)
// })

</script>
<style scoped>
.boxIcon{
    border: 1px solid #D3D3D3;
    height: 15px;
    width: 15px;
    border-radius: 4px;
}


</style>