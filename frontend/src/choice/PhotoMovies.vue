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
                        새로운 영화추천
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
      <v-card
        class="d-flex justify-space-around mb-6"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'white'"
        flat
        tile
      >
        <v-card
          v-for="movie in randomMovies"
          :key="movie"
          class="pa-2"
          outlined
          tile
        >
          <!-- 포스터 -->
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              :src="movie.poster_path"
            ></v-img>

            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                $ • Italian, Cafe
              </div>

            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
              >
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
          <!-- 포스터 -->
        </v-card>
      </v-card>
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
  data () {
    return {
      movies: [],
      randomNums: [],
      randomMovies: [],
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

</style>