import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'


axios.defaults.baseURL = 'http://localhost:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    id: localStorage.getItem('id'),
    introduce: localStorage.getItem('introduce'),
  },
  getters: {
    isAuthenticated(state){
      const result = state.token ? true : false
      return result
    },
    getUserInfo(state) {
      const username = state.username
      const id = state.id
      const introduce = state.introduce
      var infoArray = [username, id, introduce]
      return infoArray
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
      state.username = ''
      localStorage.removeItem('username')
      state.id = ''
      localStorage.removeItem('id')
      state.introduce = ''
      localStorage.removeItem('introduce')
      localStorage.removeItem('select_movie')
      localStorage.removeItem('select_movie_poster')
      localStorage.removeItem('select_review_movie')
      localStorage.removeItem('select_review_movie_poster')
    },
    USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    }
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
    async USER_INFO({ commit }, userinfo) {
      const USER_INFO_URL = '/accounts/userinfo/'
      const data = userinfo
      const response = await axios.post(USER_INFO_URL, data)

      localStorage.setItem('username', response.data[0].username)
      localStorage.setItem('id', response.data[0].id)
      localStorage.setItem('introduce', response.data[0].introduce)
      
      commit('USER_INFO', response.data)
    }

  },
  modules: {
  }
})