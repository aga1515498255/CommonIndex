import { createStore } from 'vuex'
import user from './modules/user'
import permission from './modules/permission'

const gettter = {
  permissions: (state) => state.user.permissions,
  routes: (state) => state.permission.routes,
  isLogin: (state) => state.user.isLogin
}

// 创建一个新的 store 实例
const store = createStore({
  modules: {
    user,
    permission
  },
  getters: gettter,
  actions: {
    init() {}
  }
})
export default store
