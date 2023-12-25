
import axios from "axios"
import { getLocalToken } from "../../common/LocalStroageUtil"
import {allPerms} from "@/api/user.js"
let isLogin = false;
let tokenText = getLocalToken()
if (tokenText && tokenText.length > 0){
  isLogin = true
  axios.defaults.headers.common['Authorization'] = tokenText;
}

const user = {
    state: {
      token:tokenText,
      isLogin: isLogin,
      device: 'desktop',
      permissions:[]
  
    },
    mutations: {
      setIslogin (state,flag) {
        state.isLogin = flag
      },
      TOGGLE_DEVICE: (state, device) => {
          state.device = device
        },

      setPermission(state,perms){
        state.permissions = perms;
      }
    },
    actions:{
      toggleDevice({ commit }, device) {
          commit('TOGGLE_DEVICE', device)
        },
      
      getPermission({ commit }){
        return new Promise(resolve => {
          // 向后端请求路由数据
         
          allPerms().then(res => {
            const perms = res.data
            commit('setPermission', perms)
            console.log("int getPermission perms is ",perms)
            resolve(perms)
          })
        })
      }
      
    },
    getters:{
      getIslogin(state){
          return state.isLogin;
      },
  
      device: state => state.app.device,
    }
  }

export default user;