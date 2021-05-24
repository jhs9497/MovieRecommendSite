import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

axios.defaults.baseURL = 'http://localhost:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    token: localStorage.getItem('token'),
    // username: localStorage.getItem('state.userInfo.username')
  },
  getters: {
    isAuthenticated(state){
      const result = state.token ? true : false
      return result
    },
  },
  mutations: {
    CREATE_USER(state, userInfo) {
      state.userInfo = userInfo
    },
    AUTH_USER(state, token) {
      state.token = token
    },
    LOGOUT(state) {
      state.token = '' // vuex 토큰 지우기
      localStorage.removeItem('token') // 로컬스토리지에서도 토큰 지우기
    },
  },
  actions: { // restAPI랑 연결 ㄱㄱ
    async CREATE_USER({ commit, dispatch }, userInfo) {
      const USER_CREATE_URL = '/accounts/signup/'
      const data = userInfo
      const response = await axios.post(USER_CREATE_URL, data)
  
      commit('CREATE_USER', response.data)
      dispatch('AUTH_USER', data)
    },

    AUTH_USER({ commit }, userInfo) {
      return new Promise((resolve) => {
        const AUTH_USER_URL = '/api/token/'
        const data = userInfo
        axios.post(AUTH_USER_URL, data)
        .then((response) => {
          const token = response.data.access
          window.localStorage.setItem('token', token) // web 로컬스토리지에 로그인정보 저장
          commit('AUTH_USER', token)
          resolve()
        })
      })
    },
  },
  modules: {
  }
})