import axios from 'axios'

const token = localStorage.getItem("JwtToken")

// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

if (token && token !== ""){
  axios.defaults.headers.common["Authorization"] = token
}


// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_BACKEND_PREFIX,
  // 超时
  timeout: 10000
})




export default service;
