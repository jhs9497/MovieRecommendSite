<template>
  <div>
    <!-- 배너 -->
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="banner in banners"
        :key="banner"
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
              <img class="img-thumbnail" style="height: 600px;" v-bind:src="banner">
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- 3가지 추천 시스템 -->

    <!-- 영화정보 -->

    <div class="row row-cols-1 row-cols-md-6 g-4">
      <div
        v-for="movie in movies"
        :key="movie.id" 
      >
        <router-link :to="{ 
          name: 'MovieSelect', 
          params: {
            title: movie.title,
            poster: movie.poster_path,
            release_date: movie.release_date,
            voteavg: movie.voteavg,
            overview: movie.overview
          }}"
        >
            <div class="col">
              <v-hover
                v-slot="{ hover }"
              >
                <v-card
                  class="mx-auto"
                  max-width="344"
                  :elevation="hover ? 12 : 2"
                  shaped
                  @click="clickParams"
                >
                  <v-img
                    v-bind:src="movie.poster_path"
                    height="300px"
                  ></v-img>
                </v-card>
              </v-hover>
            </div>
        </router-link>
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
      movies: [],
      banners: [
        'https://caching2.lottecinema.co.kr/lotte_image/2021/Voyagers/0518/Voyagers_1920774.jpg',
        'https://caching2.lottecinema.co.kr/lotte_image/2021/Truck/0520/Truck_1920774.jpg',
        'https://caching2.lottecinema.co.kr/lotte_image/2021/Ella/Ella_1920774.jpg',
        'https://caching2.lottecinema.co.kr/lotte_image/2021/Spiral/0520/Spiral_1920774.jpg',
        'https://caching2.lottecinema.co.kr/lotte_image/2021/Conjuring/0518/Conjuring_1920774.jpg',
        'https://caching2.lottecinema.co.kr/lotte_image/2021/Ella/Ella_1920774.jpg',
        'https://caching2.lottecinema.co.kr/lotte_image/2021/InTheHeights/InTheHeights_1920774.jpg',
      ],
    };
  },
  async created() {
    const url = 'http://127.0.0.1:8000/api/v1/movie/' // 장고의 서버주소
    const response = await this.axios.get(url)
    this.movies = response.data
  },
  methods: {
  }
}

</script>

<style>

</style>