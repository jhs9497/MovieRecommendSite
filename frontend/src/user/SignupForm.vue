<template>
  <div>
    <v-content style="padding: 0px 0px 0px;">
      <v-row no-gutters>
        <v-img
          gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
          height="1100px"
          src="https://i.pinimg.com/originals/21/e2/8f/21e28f6a8c768f83bdfcac28264fcbd0.jpg"
        >
          <v-theme-provider style="padding: 0px 0px 0px;">
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
      .then(() => {
        this.$router.push('/home')
      })
    },
    toLogin() {
      this.$router.push('/login')
    },
    toHome() {
      this.$router.push('/home')
    },
  },
}
</script>

<style>

</style>