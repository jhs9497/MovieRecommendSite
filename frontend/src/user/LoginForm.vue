<template>
  <v-content style="padding: 0px 0px 0px;">
    <v-row no-gutters>
      <v-img
        gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
        height="900px"
        src="https://i.pinimg.com/originals/21/e2/8f/21e28f6a8c768f83bdfcac28264fcbd0.jpg"
      >
        <v-theme-provider>
            <!-- 로그인창 시작-->
          <v-container fill-height>
            <v-card width="500" class="mx-auto">
              <v-card-title>Login Area</v-card-title>
              <v-card-text>
                <v-text-field label="username" prepend-icon="mdi-account-circle"></v-text-field>
                <v-text-field 
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
                <v-btn color="info">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
          <!-- 로그인창 끝-->
        </v-theme-provider>
      </v-img>
    </v-row>
  </v-content>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return{
      showPassword: false
    }
  },
  methods: {
    toSignup() {
      this.$router.push('/signup')
    }
  },
}
</script>

<style>

</style>