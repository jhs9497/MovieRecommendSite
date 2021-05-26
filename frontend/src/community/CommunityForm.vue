<template>
  <div>
    <v-content style="padding: 0px 0px 0px;">
      <v-row no-gutters>
        <v-img
          gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
          height="900px"
          src='@/assets/J&J.png'
        >
        
          <v-row>
            <!-- 영화 페이지 시작 -->
            <v-col>
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto my-12"
                    color="grey lighten-4"
                    max-width="500"
                    
                    
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      :src='select_review_movie_poster'
                      height="585px"
                      
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
                          style="height: 100%;"
                        >
                          보고싶어 ? 오른쪽 아래 클릭!
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-text
                      class="pt-6"
                      style="position: relative;"
                    >
                      <v-btn
                        absolute
                        color="red"
                        class="white--text"
                        fab
                        large
                        right
                        top
                      >
                        <v-icon>mdi-movie-play</v-icon>

                      </v-btn>

                      <!-- 무비리스트 버튼 시작 -->
                        <v-row justify="center">
                          <v-dialog
                            v-model="dialog"
                            scrollable
                            max-width="300px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                absolute
                                color="orange"
                                class="white--text"
                                fab
                                left
                                right
                                top
                                v-bind="attrs"
                                v-on="on"
                              >
                                <v-icon>mdi-playlist-check</v-icon>
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title>Select Movie</v-card-title>
                              <v-divider></v-divider>
                              <v-card-text style="height: 300px;">
                                <v-list>
                                  <v-list-item
                                    v-for="(movie) in movies"
                                    :key="movie.id"
                                  >
                                    <v-list-item-title 
                                      @click="selectMovie($event), dialog = false" class = "movie-list-item">
                                      {{ movie.title }}
                                    </v-list-item-title>
                                  </v-list-item>
                                </v-list>
                              </v-card-text>
                              <v-divider></v-divider>
                            </v-card>
                          </v-dialog>
                        </v-row>

                      <h3 class="display-1 font-weight-light orange--text mb-2 my-6">
                        {{ select_review_movie }}
                      </h3>
                      <div class="font-weight-light title mb-2">
                        이 영화에 대해 한줄평 써주세요! 👉👉👉👉👉👉👉👉
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
            </v-col>


            <v-col>
              {{ myComment.comment_username }}
            <!-- data table 시작 -->
              <v-text-field 
                v-model="search" 
                append-icon='mdi-magnify' 
                label='Search'
                single-line
                
                >
              </v-text-field>
            <v-data-table
              :headers="headers"
              :items="comments"
              class="elevation-1 mx-auto my-12 mr-16"
              height="450px"
              sort-by="created_at"
              sort-desc='true'
              :search="search"
            >
            <template v-slot:item.comment_user="{ item }">
              <div v-if="item.comment_username == myComment.comment_username">
                <v-icon small @click="deleteComment(item.id)" >mdi-delete</v-icon>
              </div>
            </template> 

            </v-data-table>
            <v-card width='675px' class="mx-auto mr-16" >
              <div style="padding-top: 10px" class="mr-16">
                <v-text-field
                  :rules='rules'
                  counter='50'
                  v-model="myComment.content"
                  class="mx-auto ms-10"
                  label="악성댓글은 범죄입니다. 이쁜말만 써주세요!" 
                  prepend-icon='mdi-comment-multiple-outline'>
                </v-text-field>
              </div>
                <v-slider
                  class="mx-auto mr-16 ms-10"
                  v-model="myComment.rank"
                  color="orange"
                  label="당신의 점수는?"
                  hint="1점만 더 쓰시죠 ㅎㅎ"
                  min="1"
                  max="10"
                  resolution=0.1
                  thumb-label
              ></v-slider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click.prevent="createComment" type="submit" color="error" >Register</v-btn>
              </v-card-actions>
            </v-card>
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
  name: 'CommunityForm',
  data() {
    return {
      // comment 작성 시작
      myComment: {
        comment_username: this.$store.state.username,
        comment_user: this.$store.state.id,
        rank: '',
        content: '',
      },
      rules: [v => v.length <= 50 || 'Max 50 characters'],
      // data table 시작
      search: "",
      headers: [
        {
          text: 'Username',
          align: 'start',
          sortable: false,
          value: 'comment_username',
        },
        { text: 'Content', value: 'content' },
        { text: 'Movie Rating', value: 'rank' },
        { text: 'Created_at', value: 'created_at' },
        { text: 'Delete', value: 'comment_user'},
      ],
      // data table 끝
      // dialogm 시작
      dialogm1: '',
      dialog: false,
      // 끝
      user_info: [],
      
      comments: JSON.parse(localStorage.getItem('comments')),
      movies: [],
      select_review_movie: localStorage.getItem('select_review_movie'),
      select_review_movie_poster: localStorage.getItem('select_review_movie_poster'),
      // 지금 선택한 무비 id
      now_movie_id : localStorage.getItem('now_movie_id'),
    }
  },
  async created() {
    const url = 'http://127.0.0.1:8000/api/v1/movie/' // 장고의 서버주소
    const response = await this.axios.get(url)
    this.movies = response.data
  },
  methods: {
      // 댓글 삭제 함수
      deleteComment() {
      console.log(event)
    },

    // comment 생성 함수
    async createComment() {
      console.log('여기 앋늘어오냐?>')
      const CREATE_COMMENT_URL = `http://127.0.0.1:8000/api/v1/movie/${this.now_movie_id}/comment/`
      const data = this.myComment
      await axios.post(CREATE_COMMENT_URL, data)



      // 코멘트 불러오는거 걍 한번더 ㄱㄱ why? crated_at이랑 username도 또 처리해줘야함
      const comment_url = `http://127.0.0.1:8000/api/v1/movie/${this.now_movie_id}/comment/`
      const res = await this.axios.get(comment_url)
      this.comments = res.data

      // this.comments에 상응하는 유저정보도 넣어주기
      const user_url = 'http://localhost:8000/accounts/alluserinfo/'
      const result = await this.axios.get(user_url)
      this.user_info = result.data

      for (let x=0; x<this.comments.length; x++) {
        this.comments[x].created_at = this.comments[x].created_at.slice(0,10)
        for (let y=0; y<this.user_info.length; y++) {
          if (this.comments[x].comment_user === this.user_info[y].id) {
            this.comments[x]['comment_username'] = this.user_info[y].username
          }
        }
      }
      localStorage.setItem('comments', JSON.stringify(this.comments))

      //

      this.myComment.content = '' // 저장했으니 내가 쓴 댓글 초기화
      this.myComment.rank = ''
      
    },


    // 영화 선택 함수
    async selectMovie() {
      const myMovie = event.target.innerText
      let movie_id = ''
      
      this.select_review_movie = myMovie
      localStorage.setItem('select_review_movie', myMovie)
        this.movies.forEach((movie) => {
          if (myMovie === movie.title) {
            this.select_review_movie_poster = movie.poster_path
            localStorage.setItem('select_review_movie_poster', movie.poster_path)
            movie_id = String(movie.id)
            this.now_movie_id = movie_id
            localStorage.setItem('now_movie_id', String(movie.id))
            return false
          }
      })
      const comment_url = `http://127.0.0.1:8000/api/v1/movie/${movie_id}/comment/`
      const res = await this.axios.get(comment_url)
      this.comments = res.data

      // this.comments에 상응하는 유저정보도 넣어주기
      const user_url = 'http://localhost:8000/accounts/alluserinfo/'
      const result = await this.axios.get(user_url)
      this.user_info = result.data

      for (let x=0; x<this.comments.length; x++) {
        this.comments[x].created_at = this.comments[x].created_at.slice(0,10)
        for (let y=0; y<this.user_info.length; y++) {
          if (this.comments[x].comment_user === this.user_info[y].id) {
            this.comments[x]['comment_username'] = this.user_info[y].username
          }
        }
      }
      localStorage.setItem('comments', JSON.stringify(this.comments))
    },
  },
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>