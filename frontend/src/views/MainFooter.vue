<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style>

</style>