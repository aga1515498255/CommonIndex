<template>

    <el-form :model="setPWDForm" label-width="auto" style="max-width: 600px">
        <el-form-item label="输入新的密码">
            <el-input v-model="setPWDForm.newPWD" type="password" />
        </el-form-item>
        <el-form-item label="再次输入密码">
            <el-input v-model="setPWDForm.PWDConfirm" type="password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>


</template>

<script setup>
import { SetUserPWD } from "@/api/user.js";
import { ref } from 'vue';

const setPWDForm = ref({ newPWD: "", PWDConfirm: "" })


const onSubmit = () => {
    let data = { newPWD: "" }
    if (setPWDForm.value.PWDConfirm === setPWDForm.value.newPWD) {
        data.newPWD = setPWDForm.value.newPWD
    } else {
        return;
    }

    SetUserPWD(data).then(() => {

    })
}

</script>

<style></style>