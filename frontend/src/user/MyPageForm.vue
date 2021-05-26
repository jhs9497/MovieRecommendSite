<template>
  <div>
    <!-- {{ userInfo }}
    {{ userInfo }}
    -->
    <!-- {{ comments }} -->
    <!--
    <div
      :key="comment.id"
      v-for="comment in comments"
    >
      {{ comment.comment_movie }}
      {{ comment.content }}
      {{ comment.rank }}
      {{ comment.created_at }}
    </div> 

    {{ movies }}
    <div
      :key="movie.id"
      v-for ="movie in movies"
    >
      {{ movie }}
    </div> -->
    <v-content style="padding: 0px 0px 0px;">
      <v-row no-gutters>
        
        <v-img
          gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
          height="900px"
          :src='select_movie_poster'
        >
        <v-row>
          <v-col>
            <v-card
              :loading="loading"
              class="mx-16 my-12"
              max-width="474"
              >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="400"
                :src='select_movie_poster'
              ></v-img>

              <v-card-title>"{{ userInfo[0] }}"님의 페이지</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-2">
                  INTRODUCE😎
                </div>

                <div>{{ userInfo[2] }}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title class="ma-2 ms-16">🤔Today's My Profile Page Is!!🤔</v-card-title>
                <div class="text-center">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        Select Poster
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(movie) in movies"
                        :key="movie.id"
                      >
                        <v-list-item-title 
                          @click="selectMovie($event)" class = "movie-list-item">
                          {{ movie.title }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                    
                  </v-menu>
                </div>
              <div class="text-center my-8 mb-4">
                💥{{ select_movie }}💥
              </div>
              <br>
            </v-card>
          </v-col>

          <v-col>
          <!-- RANK 표현 -->

          <v-card
              max-width="400"
              class="mx-auto my-12 mr-16"
            >

              <v-container width='1000px'>
                <v-row dense>
                  <v-col cols="12">
                    <v-card
                      color="#385F73"
                      dark
                    >
                      
                    </v-card>
                  </v-col>

                  <v-col
                    v-for="(item, i) in items"
                    :key="i"
                    cols="12"
                  >
                  <v-img :src="item.src"></v-img>
                    <v-card
                      :color="item.color"
                      dark
                      
                    >
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title
                            class="text-h5"
                            v-text="item.title"
                          ></v-card-title>

                          <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                          <v-card-subtitle v-if="comments.length<6" >조금 활발히 활동해주세요!</v-card-subtitle>
                          <v-card-subtitle v-else-if="comments.length<11" >쬐끔만 더 힘내봅시다!!</v-card-subtitle>
                          <v-card-subtitle v-else >열심히 활동해주셔서 감사합니다!</v-card-subtitle>
                        </div>
                        <v-avatar
                          class="ma-3"
                          size="125"
                          tile
                        >
                        <v-img v-if="comments.length<6" src='@/assets/파이리.png'></v-img>
                        <v-img v-else-if="comments.length<11" src='@/assets/리자드.png'></v-img>
                        <v-img v-else src='@/assets/리자몽.png'></v-img>
                        
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <!-- data table 시작 -->
            
            <v-data-table
              :headers="headers"
              :items="comments"
              class="elevation-1 mx-auto my-12 mr-16"
              height="450px"
              
            >
            </v-data-table>
          </v-col>
          </v-row>
        </v-img>
      </v-row>


    </v-content>

  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'MyPageForm',
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo
    },
  },
  data() {
    return {
      // 리뷰 등급
      items: [
        {
          color: '#1F7087',
          title: 'My Rank',
        },
      ],
      // data table 시작
      headers: [
        {
          text: 'Movie Review That I Wrote',
          align: 'start',
          sortable: false,
          value: 'comment_title',
        },
        { text: 'Content', value: 'content' },
        { text: 'Rank', value: 'rank' },
        { text: 'Created_at', value: 'created_at' },
      ],
      // data table 끝
      comments: [],
      movies: [],
      select_movie: localStorage.getItem('select_movie'),
      select_movie_poster: localStorage.getItem('select_movie_poster'),
    }
  },
  created() {
    axios.get(`http://localhost:8000/api/v1/movie/${this.userInfo[1]}/comment/user`)
      .then((res) => {
        this.comments = res.data
        let movie_list = []
        for (var i=0; i<this.comments.length; i++) {
          movie_list.push(this.comments[i].comment_movie)
        }
        movie_list = [...new Set(movie_list)]

        const movie_info = []  // movie정보들을 담을 리스트
        movie_list.forEach(function(idx){
          movie_info.push(axios.get(`http://localhost:8000/api/v1/movie/${idx}/`))
        })
        // 2중 for문으로 comments 리스트에 맞는 영화제목도 추가하기
        // for문 안에서 get.axios 보내면 비동기적 문제가 생김 Promise.all 공부하기
        Promise.all(movie_info)
        .then((res) => {
          for (let a=0; a<res.length; a++) {
            this.movies.push(res[a].data)
            
            for (let b=0; b<this.comments.length; b++) {
              this.comments[b].created_at = this.comments[b].created_at.slice(0,10)
              if (res[a].data.id === this.comments[b].comment_movie) {
                this.comments[b]['comment_title'] = res[a].data.title
              }
            }
          }
        })
      })
      .catch(error => console.log(error))
  },
  methods: {
    selectMovie() {
      const myMovie = event.target.innerText
      this.select_movie = myMovie
      localStorage.setItem('select_movie', this.select_movie)
        this.movies.forEach( (movie) =>  {
          if (myMovie === movie.title) {
            this.select_movie_poster = movie.poster_path
            localStorage.setItem('select_movie_poster', movie.poster_path)
          }
        })
      },
    },
  }

</script>

<style>
.movie-list-item:hover { 
  /* hover 어떤 요소를 마우스로 갖다 대는 것! */
  cursor: pointer;
  background-color: #eee; 
  /* 갖다대면 커서를 바꿈! */
}
</style>