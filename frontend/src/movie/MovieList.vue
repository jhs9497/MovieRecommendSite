<template>
  <div>
    <!-- 배너 -->
    <v-carousel
      cycle
      height="600"
      delimiter-background="black"
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
            <div class="displaty-3">
              <img style="height: 700px;" v-bind:src="banner">
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card
      elevation="5"
    >
      <v-tabs
        color="deep-purple accent-4"
        rtight
        dark
      >
        <!-- 장르별 탭 -->
        <v-tab
          v-for="t in all_genres"
          :key="t"
        > 
          <v-btn
            @click="sendGenre(t.id)"
          >
            {{ t.name }}
          </v-btn>
        </v-tab>
        
        <!-- 영화정보 -->
        <v-tab-item
          v-for="n in all_genres"
          :key="n"
        >
          <div
            id="movie"
            class="row row-cols-1 row-cols-md-6 g-4"
          >
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
                  overview: movie.overview,
                  movieid: movie.id,
                }}"
              >
                <div class="col">
                  <v-hover
                    v-slot="{ hover }"
                  >
                    <v-card
                      class="mx-auto"
                      max-width="344"
                      :elevation="hover ? 16 : 4"
                      :class="{ 'on-hover': hover }"
                      shaped
                      @click="clickParams"
                    >
                      <v-img
                        v-bind:src="movie.poster_path"
                        height="300px"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out red accent-3 v-card--reveal white--text"
                          >
                            <v-row
                              style="padding: 0px 10px"
                            >
                              <v-col>
                                <div class="title">
                                  영화 상세정보
                                </div>
                                <div>
                                  Click!
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </div>
              </router-link>
            </div>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  components: {
  },
  data() {
    return {
      all_genres: [],
      movies: [],
      genre_id: 12,
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
  methods: {
    async sendGenre (id) {
      const genre_url = `http://localhost:8000/api/v1/movie/genre/${ id }/`
      const genre_response = await this.axios.get(genre_url)
      this.movies = genre_response.data
    }
  },
  async created() {
    // 모든 영화정보
    // const url = 'http://127.0.0.1:8000/api/v1/movie/' // 장고의 서버주소
    // const response = await this.axios.get(url)
    // this.movies = response.data
   
    // 모든 장르
    const all_genre_url = 'http://localhost:8000/api/v1/movie/genre/'
    const all_genre = await this.axios.get(all_genre_url)
    this.all_genres = all_genre.data
    localStorage.setItem('genre_id', 12)

    // const router = this.$router;
    // router.push({name:'MovieGenre'})

    // // 장르별 영화
    const genre_id = this.genre_id
    const genre_url = `http://localhost:8000/api/v1/movie/genre/${ genre_id }/`
    const genre_response = await this.axios.get(genre_url)
    this.movies = genre_response.data
  },
}

</script>

<style scope>
  body {
    background-color: black;
  }
  #movie {
    background-color: black;
  }
</style>

<style lang="sass" scoped >
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 1)
  >.v-card__text
    color: #000
</style>