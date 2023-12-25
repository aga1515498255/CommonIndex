<template>
    <el-form :v-model="form">
      <el-form-item label="userName">
        <el-input v-model="form.userName" />
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password" />
      </el-form-item>

      <el-form-item>
      <el-button type="primary" @click="onSubmit">login</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
    </el-form>
</template>
  
<script setup>
  import { ref ,reactive} from 'vue';
  import {LocalStorageKeys} from "@/common/LocalStroageUtil.js"
  import axios from "axios"
  import { useStore } from "vuex";
  import router from "@/router"

  const store = useStore()

  const form = reactive({
    userName: '',
    password: '',
  })

  const onSubmit = () => {
    axios.post("http://127.0.0.1:7879/user/login",form)
    .then(
      (res)=>{
        console.log(res)
        let token = res.data.data.Authorization
        axios.defaults.headers.common['Authorization'] = token;
        localStorage.setItem(LocalStorageKeys.token,token);
        store.commit('setIslogin',true)
        router.push({path:"/"})
      })
    .catch((err)=>{
      console.log(err)
    })
  }

</script>