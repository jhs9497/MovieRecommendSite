<template>
  <v-app id="App">
    <MainAppbar/>

    <v-main>
      <router-view/>
    </v-main>

    <MainFooter/>
  </v-app>
</template>

<script>
import MainAppbar from '@/views/MainAppbar.vue'
import MainFooter from '@/views/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainAppbar,
    MainFooter,
  },
  created: function () {
    const router = this.$router;
    router.push({name:'Home'})
  }
}
</script>

<style>
</style>