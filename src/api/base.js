import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getLocalToken } from '../common/LocalStroageUtil'
const token = getLocalToken()

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// if (token && token !== ""){
//   axios.defaults.headers.common["Authorization"] = token
// }


// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_BACKEND_PREFIX,
  // 超时
  timeout: 10000
})

service.interceptors.request.use((config)=>{
    config.headers.set("Authorization",token)
    return config
})

service.interceptors.response.use(
  (res)=>{
    return res.data
},
  (err)=>{
    let message = ""
    let status = err.status
    switch(status){
      case 401:
        message = "请重新登录。"
    }

    ElMessage({
      type:"error",
      message
    })
    return Promise.reject(err)
})


export default service;
