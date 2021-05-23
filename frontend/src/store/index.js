import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

axios.defaults.baseURL = 'http://localhost:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  getters: {

  },
  mutations: {
    CREATE_USER(state, userInfo) {
      state.userInfo = userInfo
    },
  },
  actions: { // restAPI랑 연결 ㄱㄱ
    async CREATE_USER({ commit }, userInfo) {
      const USER_CREATE_URL = '/accounts/signup/'
      const data = userInfo
      const response = await axios.post(USER_CREATE_URL, data)
  
      commit('CREATE_USER', response.data)
    },
  },
  modules: {
  }
})