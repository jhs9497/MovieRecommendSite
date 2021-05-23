<template>
  <div>
    <v-content>
      <MovieList/>
    </v-content>
  </div>
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