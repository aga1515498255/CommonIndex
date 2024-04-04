<template>
  <el-form :v-model="form">
    <el-form-item label="userName">
      <el-input v-model="form.userName" />
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.password" type="password" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">login</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { login } from '@/api/user';
import { ref } from 'vue';
import { LocalStorageKeys } from "@/common/LocalStroageUtil.js"
import service from "@/api/base.js"
import { useStore } from "vuex";
import router from "@/router"

const store = useStore()

const form = ref({
  userName: '',
  password: '',
})

const onSubmit = () => {

  login(form.value).then(async (res) => {

    console.log(res)
    let token = res.data.Authorization
    service.defaults.headers.common['Authorization'] = token;
    localStorage.setItem(LocalStorageKeys.token, token);
    await store.dispatch("login", token)

    router.push({ path: "/" })

    console.log(res)
  })
}

</script>