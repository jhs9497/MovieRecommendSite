<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="movie in movies"
        :key="movie.id"
      >
        <v-sheet
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              <img class="img-thumbnail" style="height: 400px;" v-bind:src="movie.poster_path">
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div  
        :key="movie.id" 
        v-for="movie in movies"
      >
        <div class="col">
          <div class="card" style="height: 600px;">
            <img class="img-thumbnail" style="height: 400px;" v-bind:src="movie.poster_path">
              <div class="card-body" style="height: 200px;">
                <h5 class="card-title fw-bold" style="font-family: 궁서">{{ movie.title }}</h5>
                <p class="card-text">{{ movie.overview.slice(0,100) }}...</p>
              </div>
          </div>
        </div>
        <!-- <h1>{{ movie.title }}</h1> -->
      </div>
    </div>
    <MovieSelect/>
  </div>
</template>

<script>
import MovieSelect from '@/movie/MovieSelect'

export default {
  name: 'MovieList',
  components: {
    MovieSelect,
  },
  data() {
    return {
      movies: []
    };
  },
  async created() {
    const url = 'http://127.0.0.1:8000/api/v1/movie/' // 장고의 서버주소
    const response = await this.axios.get(url)
    this.movies = response.data

    const axios = require('axios')
    axios.get(`https://www.lottecinema.co.kr/NLCHS/`)
    .then(dataa => {
        console.log(dataa);
    });

}
 
}
</script>

<style>

</style>