<template>
  <v-main style="padding: 0px 0px 0px;">
    <MovieList/>
  </v-main>
</template>

<script>
import MovieList from '@/movie/MovieList'

export default {
  name : 'MovieAll',
  components: {
    MovieList,
  },
}
</script>