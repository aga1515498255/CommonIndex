import { createStore } from 'vuex'
import Keys from "../common/LocalStorageKey"
import axios from "axios"

const tokenText = localStorage.getItem(Keys.token);

let isLogin = false;
if (tokenText !== null){
  isLogin = true
  axios.defaults.headers.common['Authorization'] = tokenText;
}


// 创建一个新的 store 实例
const store = createStore({
  state: {
    isLogin: isLogin,
    device: 'desktop',

  },
  mutations: {
    setIslogin (state,flag) {
      state.isLogin = flag
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device
      },
  },
  actions:{
    toggleDevice({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
      },
  },
  getters:{
    getIslogin(state){
        return state.isLogin;
    },

    device: state => state.app.device,
  }
})


export default store;