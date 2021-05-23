import Vue from 'vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'
import store from './store'

// Axios 글로벌 설정
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false
// Vuetify
Vue.use(Vuetify)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

