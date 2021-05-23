<template>
  <div>
    <v-content>
      <h1>회원가입</h1>
      <SignupForm/>
    </v-content>
  </div>
</template>

<script>
import SignupForm from '@/user/SignupForm'

export default {
  name: 'Signup',
  components: {
    SignupForm,
  }
}
</script>

<style>

</style>