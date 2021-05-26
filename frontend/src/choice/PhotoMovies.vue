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
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col
            v-for="movie in moives"
            :key="movie"
            cols="12"
            md="3"
          >
            <v-img
              v-bind:src="movie.poster_path"
              aspect-ratio="1"
              height="500px"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
      <!-- </v-tabs> -->
    </v-card>
    <!-- 추천영화 -->

  </div>
</template>

<script>
export default {
  name: 'PhotoMovies',
  props: {
    photo_url:{
    type: String,
    default: ''
    },
    photo_theme:{
      type: String,
      default: ''
    },
  },
  data () {
    return {
      movies: [],
    }
  },
  async created() {
    const url = 'http://127.0.0.1:8000/api/v1/movie/' // 장고의 서버주소
    const response = await this.axios.get(url)
    this.movies = response.data
  },
  method: {
  }
}
</script>

<style>

</style>