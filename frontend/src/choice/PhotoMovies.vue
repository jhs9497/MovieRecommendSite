<template>
  <div>
    <!-- banner -->
    <section 
      id="hero"
    >
      <v-row no-gutters>
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1000 : 300"
          src="https://images.unsplash.com/photo-1608434903972-1c35c741f8e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        >
          <v-theme-provider dark>
            <v-container 
              fill-height
            >
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-left"
                  cols="12"
                  tag="h1"
                >
                  <span>
                    <br>
                  </span>
                  <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-2']"
                    class="font-weight-light display-1"
                  >
                    그림으로 보는 나의 심리
                  </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-3']"
                    class="font-weight-black"
                  >
                    {{ this.photo_theme }}
                  </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-3']"
                  >
                  </span>

                  <br>

                  <span>
                    <div class="d-flex flex-row pa-0">
                      <router-link :to="{name: 'MovieAll'}" tag='div'>
                        <v-btn
                          rounded
                          color="#FF1744"
                          x-large
                          style="margin-right : 10px"
                          elevation = "2"
                        >
                        장르별 영화
                        </v-btn>
                      </router-link>
                      <router-link :to="{name: 'PhotoChoice'}" tag='div'>
                        <v-btn
                          rounded
                          color="#FF6E40"
                          x-large
                          elevation = "2"
                        >
                        테스트 다시하기
                        </v-btn>
                      </router-link>
                      <div>
                        <v-btn
                          rounded
                          color="success"
                          x-large
                          style="margin-left : 10px"
                          elevation = "2"
                          @click="recommendMovie"
                        >
                        추천 다시받기
                        </v-btn>
                      </div>
                    </div>
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-parallax>
      </v-row>
    </section>
    <!-- banner -->

    <!-- 추천영화 -->
    <section>
      <v-img
        :src="photo_url"
        height="930px"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
        <div
          class="d-flex justify-space-around mb-6"
        >
          <div
            class="d-flex justify-space-around mb-6"
            v-for="movie in randomMovies"
            :key="movie"
          >
            <!-- 포스터 -->
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="400"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="550"
                :src="movie.poster_path"
              ></v-img>

              <v-card-title>{{ movie.title }}</v-card-title>

              <v-card-text
                class="d-flex flex-row pa-0"
              >
                <v-rating
                  :value="movie.voteavg/2"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="25"
                  class="pa-2"
                ></v-rating>
                <div class="grey--text pa-2">
                  <div style="padding-top: 8px;">
                    {{ movie.voteavg/2 }}점
                  </div>
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-list-item-subtitle
                style="padding-left: 13px; padding-top: 15px; padding-right: 13px"
              >{{ movie.overview }}</v-list-item-subtitle>
              <br>
              <v-card-actions
                class="d-flex justify-space-around mb-6"
              >
                <div>
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
                    tag="div"
                  >
                    <v-btn
                      text
                      rounded
                      outlined
                      elevation = "2"
                      color="red"
                    >
                      상세정보
                    </v-btn>
                  </router-link>
                </div>
                <div>
                  <v-btn 
                    outlined
                    rounded
                    text
                    elevation = "2"
                    color="green"
                    @click="goCommunity(movie)"
                  >
                    리뷰 보기
                  </v-btn>
                </div>
              </v-card-actions>
              <v-expand-transition>
                <v-card
                  v-if="reveal"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%;"
                  shaped
                >
                  <v-card-text class="pb-0" style="padding-top:80px">
                    <p class="display-1 text--primary">
                      OverView
                    </p>
                    <p>{{ movie.overview }}</p>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn
                      text
                      color="red"
                      @click="reveal = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
            <!-- 포스터 -->
          </div>
        </div>
      </v-img>
    </section>
    <!-- 추천영화 -->
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'PhotoMovies',
  props: {
    photo_url: {
      type: String,
      default : '',
    },
    photo_theme: {
      type: String,
      default : '',
    },
    photo_genreid: {
      type: String,
      default: '',
    },
  },
  methods: {
    goCommunity(movie) {
      console.log(movie)
      localStorage.setItem('select_review_movie', movie.title)
      localStorage.setItem('select_review_movie_poster', movie.poster_path)
      localStorage.setItem('now_movie_id', movie.id)
      this.$router.push('/community')
    },

    // 추천 다시받기
    async recommendMovie() {
      // randomMovies 초기화하고 재진행
      this.randomMovies = []
      const randomNumbers = _.range(1, this.movies.length) // 1부터 영화개수 중 랜덤 숫자 추출
      this.randomNums = _.sampleSize(randomNumbers, this.photo_genreid.length) // 장르 개수만큼 랜덤숫자 뽑기
      // 뽑은 랜덤숫자 순서에 해당하는 영화 뽑아서 저장하기
      for (let i=0; i < this.randomNums.length; i++){
        const id = String(i)
        const randomnumber = this.randomNums[id]
        this.randomMovies.push(this.movies[randomnumber])
      }
      }
  },  
  data () {
    return {
      movies: [],
      randomNums: [],
      randomMovies: [],
      overlay: false,
      zIndex: 100,
      reveal: false,
    }
  },
  async created() {
    for (let i=0; i < this.photo_genreid.length; i++) {
      const id = String(i)
      const genreId = this.photo_genreid[id]
      const url = `http://127.0.0.1:8000/api/v1/movie/genre/${genreId}/` // 장고의 서버주소
      const response = await this.axios.get(url)
      for (let i=0; i < response.data.length; i++){
        this.movies.push(response.data[i])
    }
  }
    const randomNumbers = _.range(1, this.movies.length) // 1부터 영화개수 중 랜덤 숫자 추출
    this.randomNums = _.sampleSize(randomNumbers, this.photo_genreid.length) // 장르 개수만큼 랜덤숫자 뽑기
    // 뽑은 랜덤숫자 순서에 해당하는 영화 뽑아서 저장하기
    for (let i=0; i < this.randomNums.length; i++){
      const id = String(i)
      const randomnumber = this.randomNums[id]
      this.randomMovies.push(this.movies[randomnumber])
    }
    console.log(this.randomNums)
  }
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>