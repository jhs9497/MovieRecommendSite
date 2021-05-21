<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    var router = this.$router;
    router.push({name:'Home'})
  }
}
</script>

<style>
</style>