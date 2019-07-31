// vuex插件  共享token的
import Vue from 'vue'
import Vuex from 'vuex'
// import { getUser, setUser } from './utils/auth'
import * as auth from '@/utils/auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  // state是对象，用来声明数据
  state: {
    user: auth.getUser()
  },
  // mutations中是一个方法改变state的数句
  mutations: {
    setUser (state, data) {
      state.user = data
      auth.setUser(state.user)
    }
  }
})
export default store
