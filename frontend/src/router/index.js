import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/user/Login.vue'
import Signup from '@/user/Signup.vue'
import MyPage from '@/user/MyPage.vue'
import MyPageForm from '@/user/MyPageForm.vue'
import MovieAll from '@/movie/MovieAll.vue'
import MovieSelect from '@/movie/MovieSelect.vue'
import Community from '@/community/Community.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/movieall',
    name: 'MovieAll',
    component: MovieAll,
  },
  {
    path: '/movieselect',
    name: 'MovieSelect',
    component: MovieSelect,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
  },
  {
    path: '/mypageform',
    name: 'MyPageForm',
    component: MyPageForm,
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router