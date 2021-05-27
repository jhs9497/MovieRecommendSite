<template>
  <v-footer
    class="justify-center"
    color="#292929"
    height="70px"
  >
    <div class="title font-weight-light grey--text text--lighten-1 text-center">
      <div
        class="subtitle-1"
      >
        &copy; {{ (new Date()).getFullYear() }} - SSAFY 5th. Final Project - Made with JHS & JSG 🔥
      </div>
      <br>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style>

</style>