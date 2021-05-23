<template>
  <v-app id="App">
    <MainAppbar/>

    <v-content>
      <router-view/>
    </v-content>

    <MainFooter/>
  </v-app>
</template>

<script>
import MainAppbar from '@/views/MainAppbar'
import MainFooter from '@/views/MainFooter'

export default {
  name: 'App',
  components: {
    MainAppbar,
    MainFooter,
  },
  created: function () {
    var router = this.$router;
    router.push({name:'Home'})
  }
}
</script>

<style>
</style>