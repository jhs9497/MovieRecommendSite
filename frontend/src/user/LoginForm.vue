<template>
  <div>
    <v-content style="padding: 0px 0px 0px;">
      <v-row no-gutters>
        <v-img
          gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
          height="700px"
          src="https://i.pinimg.com/originals/21/e2/8f/21e28f6a8c768f83bdfcac28264fcbd0.jpg"
        >
          <v-theme-provider>
              <!-- 로그인창 시작-->
            <v-container fill-height style="padding: 0px 0px 0px;">
              <v-card width="500" class="mx-auto">
                <v-card-title>Login Area</v-card-title>
                <v-card-text>
                  <v-text-field
                    v-model="userInfo.username" 
                    label="username" 
                    prepend-icon="mdi-account-circle">
                  </v-text-field>
                  <v-text-field
                    v-model="userInfo.password" 
                    label="password" 
                    :type="showPassword ? 'text' : 'password'" 
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword =!  showPassword">
                  </v-text-field>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click.prevent="onClick" color="info">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-container>
            <!-- 로그인창 끝-->
          </v-theme-provider>
        </v-img>
      </v-row>
      
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return{
      showPassword: false,
      userInfo: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    toSignup() {
      this.$router.push('/signup')
    },
    toHome() {
      this.$router.push('/home')
    },
    onClick() {
      this.$store.dispatch('AUTH_USER', this.userInfo)
      .then(() => {
        this.$store.dispatch('USER_INFO', this.userInfo)
        this.$router.push('/home')
      })
    }
  },
}
</script>

<style>

</style>