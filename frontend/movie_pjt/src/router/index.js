import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/user/login.vue'
import signup from '@/user/signup.vue'
import MovieAll from '@/movie/MovieAll.vue'
import MovieSelect from '@/movie/MovieSelect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
  },
  {
    path: '/movieall',
    name: 'MovieAll',
    component: MovieAll,
  },
  {
    path: '/movieSelect',
    name: 'MovieSelect',
    component: MovieSelect,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router