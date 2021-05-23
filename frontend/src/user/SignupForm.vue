<template>
  <div>
    <v-app>
      <!-- Navbar -->
      <v-app-bar
        app
        color="white"
        height="100"
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

        <v-toolbar-title class="font-weight-black headline">
          J&J CINEMA
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text rounded @click="toLogin">
          Login
        </v-btn>
      </v-app-bar>

      <v-content style="padding: 50px 0px 0px;">
        <v-row no-gutters>
          <v-img
            gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
            height="700px"
            src="https://i.pinimg.com/originals/21/e2/8f/21e28f6a8c768f83bdfcac28264fcbd0.jpg"
          >
            <v-theme-provider>
               <!-- 회원가입창 시작-->
              <v-container fill-height>
                <v-card width="500" class="mx-auto">
                  <v-card-title>Signup Area</v-card-title>
                  <v-card-text>
                    <v-text-field
                      v-model="userInfo.username"
                      label="username" 
                      prepend-icon="mdi-account-circle">
                    </v-text-field>
                    <v-text-field
                      v-model="userInfo.password" 
                      label="password" 
                      type='password'
                      prepend-icon="mdi-lock">
                    </v-text-field>
                    <v-text-field
                      v-model="userInfo.password_confirmation" 
                      label="password_confirmation" 
                      type='password'
                      prepend-icon="mdi-lock">
                    </v-text-field>
                    <v-textarea 
                      v-model="userInfo.introduce"
                      label="introduce" 
                      prepend-icon='mdi-dropbox'>
                    </v-textarea>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click.prevent="onClick" type="submit" color="error" >Register</v-btn>
                  </v-card-actions>
                </v-card>
              </v-container>
              <!-- 회원가입창 끝-->
            </v-theme-provider>
          </v-img>
        </v-row>
        
      </v-content>

      <!-- footer -->
      <v-footer
        class="justify-center"
        color="#292929"
        height="100"
      >
        <div class="title font-weight-light grey--text text--lighten-1 text-center">
          <subtitle>
            &copy; {{ (new Date()).getFullYear() }} - SSAFY 5th. Final Project - Made with JHS & JSG 🔥
          </subtitle>
          <br>
          <p class="font-weight-thin">
          </p>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  data() {
    return{
      userInfo: {
        username: '',
        password: '',
        password_confirmation: '',
        introduce: '',
      },
    }
  },
  methods: {
    onClick() {
      this.$store.dispatch('CREATE_USER', this.userInfo)
    },
    toLogin() {
      this.$router.push('/login')
    }
  },
}
</script>

<style>

</style>