<template>
  <div>
    <v-app-bar
      app
      color="white"
      height="70"
    >
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="70%"
          src="https://image.flaticon.com/icons/png/512/1038/1038100.png"
        ></v-img>
      </v-avatar>
      <router-link :to="{ name: 'Home' }" tag='div'>
        <v-toolbar-title class="font-weight-black" tag='btn'>
          <v-btn 
            large
            text
          >
            J&J CINEMA
          </v-btn>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <!-- 로그인 유무에 따라 .. 라우터링크에 삼항연산 안되는거 같아서 수작업 했슴다 ㅎㅎ -->
      <!-- 로그인 시 보이는 부분 -->
      <router-link :to="{name: 'MovieAll'}" tag='div' v-if="isAuthen">
        <v-btn 
          text
          color="#FF5252"
        >
          Movie
        </v-btn>
      </router-link>
      <router-link :to="{name: 'PhotoChoice'}" tag='div' v-if="isAuthen">
        <v-btn
          text
          color="primary"
        >
          Recommand
        </v-btn>
      </router-link>
      <router-link :to="{name: 'Community'}" tag='div' v-if="isAuthen">
        <v-btn
          text
          color="green"
        >
          Review
        </v-btn>
      </router-link>
      <v-btn @click="Logout" v-if="isAuthen" text>
          Logout
      </v-btn>
      <router-link :to="{ name: 'MyPage' }" tag='div' v-if="isAuthen">
        <v-btn text>
          MyPage
        </v-btn>
      </router-link>


      <!-- 로그인 X 시 보이는 부분 -->
      <!-- 잘 안되어서 겉바속촉 느낌으로 껍데기만 두고 안에 주소만 바꿨습니다 ㅎㅎ -->
      <router-link :to="{name: 'Login'}" tag='div' v-if="!isAuthen">
        <v-btn 
          text
          color="#FF5252"
        >
          Movie
        </v-btn>
      </router-link>
      <router-link :to="{name: 'Login'}" tag='div' v-if="!isAuthen">
        <v-btn
          text
          color="primary"
        >
          Recommand
        </v-btn>
      </router-link>
      <router-link :to="{name: 'Login'}" tag='div' v-if="!isAuthen">
        <v-btn
          text
          color="green"
        >
          Review
        </v-btn>
      </router-link>

      <router-link :to="{ name: 'Login' }" tag='div' v-if="!isAuthen">
        <v-btn text>
          Login
        </v-btn>
      </router-link>
      <router-link :to="{ name: 'Signup' }" tag='div' v-if="!isAuthen">
        <v-btn text>
          Sign up
        </v-btn>
      </router-link>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'MainAppbar',
  // 로그인한 경우
  computed: {
    isAuthen() {
      return this.$store.getters.isAuthenticated
    },
  },
  methods: {
    Logout() {
      this.$store.commit('LOGOUT')
      this.$router.push('/login')
    },
  }
}
</script>

<style>

</style>