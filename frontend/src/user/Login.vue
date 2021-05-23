<template>
  <div>
    <v-content>
      <h1>로그인</h1>
      <LoginForm/>
    </v-content>
  </div>
</template>

<script>
import LoginForm from '@/user/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
}
</script>

<style>

</style>