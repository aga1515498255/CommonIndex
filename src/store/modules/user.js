
import axios from "axios"
import { getLocalToken } from "../../common/LocalStroageUtil"

let isLogin = false;
let tokenText = getLocalToken()
if (tokenText && tokenText.length > 0){
  isLogin = true
  axios.defaults.headers.common['Authorization'] = tokenText;
}

const user = {
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
  }

export default user;