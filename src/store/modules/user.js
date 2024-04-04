import axios from 'axios'
import { getLocalToken, deleteLocalToken } from '../../common/LocalStroageUtil'
import { allPerms } from '@/api/user.js'
let isLogin = false
let tokenText = getLocalToken()
if (tokenText && tokenText.length > 0) {
  isLogin = true
  axios.defaults.headers.common['Authorization'] = tokenText
}

const user = {
  state: {
    token: tokenText,
    isLogin: isLogin,
    device: 'desktop',
    permissions: []
  },
  mutations: {
    setIslogin(state, flag) {
      state.isLogin = flag
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },

    setToken(state, perms) {
      state.token = perms
    },

    setPermission(state, perms) {
      state.permissions = perms
    },
    logout(state) {
      axios.defaults.headers.common['Authorization'] = ''
      state.isLogin = false
      state.token = ''
      deleteLocalToken()
    }
  },
  actions: {
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    hanldeLogout({ commit }) {
      commit('logout')
    },

    getPermission({ commit }) {
      return new Promise((resolve) => {
        // 向后端请求路由数据

        allPerms().then((res) => {
          const perms = res.data
          commit('setPermission', perms)

          resolve(perms)
        })
      })
    },
    login({ commit }, token) {
      commit('setToken', token)
      commit('setIslogin', true)
    }
  },
  getters: {
    getIslogin(state) {
      return state.isLogin
    },

    getToken(state) {
      return state.token
    },

    device: (state) => state.app.device
  }
}

export default user
