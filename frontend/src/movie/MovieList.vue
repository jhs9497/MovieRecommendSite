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
              <img style="height: 600px;" v-bind:src="banner">
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
        <v-tab>액션</v-tab>
        <v-tab>로맨스</v-tab>
        <v-tab>공포</v-tab>

        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <!-- 영화정보 -->
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