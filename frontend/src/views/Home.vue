<template>
  <div>
    <v-main style="padding: 0px 0px 0px;">
      <section 
        id="hero"
      >
        <v-row no-gutters>
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 1000 : 600"
            src="http://www.artinsight.co.kr/data/news/1605/1890085884_c7NKnIHh_ab9216fb52b46505eadbf3abeff09d20.jpg"
            class="fill-height bottom-gradient"
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
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      미술 심리테스트로 알아보는
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-3']"
                      class="font-weight-black"
                    >
                      지금 보고 싶은 영화
                    </span>

                    <br>
                    <br>
                    
                    <router-link 
                      :to="{name: 'PhotoChoice'}" 
                      tag='div'
                      v-if="isAuthen"
                    >
                      <span>
                        <v-btn
                          rounded
                          color="#FF1744"
                          x-large
                        >
                          테스트 하러가기
                        </v-btn>
                      </span>
                    </router-link>
                    <router-link 
                      :to="{name: 'Login'}" 
                      tag='div'
                      v-if="!isAuthen"
                    >
                      <span>
                        <v-btn
                          rounded
                          color="#FF1744"
                          x-large
                        >
                          테스트 하러가기
                        </v-btn>
                      </span>
                    </router-link>


                  </v-col>
                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#stats')"
                    >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-parallax>
        </v-row>
      </section>
      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1000 : 600"
          src="https://an2-img.amz.wtchn.net/image/v2/2dabfab3bb115c61538da3df144f3c77.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSndZWFJvSWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1EZzFOVEUyTVRRM01qSTVPVFl5TURRaWZRLmgtRzhzcTFMU2p4azctR1lGQzU3X1E0X2pOTGxoUnJkZTliOHlmQTNNeXc"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      세상의 모든 영화
                    </span>
                    <br>
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      한 곳에서 찾아보기
                    </span>
                    <br>
                    <br>
                    <router-link 
                      :to="{name: 'MovieAll'}" 
                      tag='div'
                      v-if="isAuthen"
                    >
                      <span>
                        <v-btn
                          rounded
                          color="#FF1744"
                          x-large
                          class="white--text"
                        >
                        영화 검색
                        </v-btn>
                      </span>
                    </router-link>
                    <router-link 
                      :to="{name: 'Login'}" 
                      tag='div'
                      v-if="!isAuthen"
                    >
                      <span>
                        <v-btn
                          rounded
                          color="#FF1744"
                          x-large
                          class="white--text"
                        >
                        영화 검색
                        </v-btn>
                      </span>
                    </router-link>
                  </v-col>
                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#stats2')"
                    >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
              </v-row>           
            </v-container>
          </v-theme-provider>
        </v-parallax>
      </section>
      <section id="stats2">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1000 : 600"
          src="https://an2-img.amz.wtchn.net/image/v2/83ce547a4ca5667d5ccc3949e0706c08.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSndZWFJvSWpvaUwzWXhMM0kwWW5CeGIzUjVZWG81T0dOclozWm5aWEI0SW4wLnB6OTQ4VzdmelJuM0NSaGw1dnhVX2U2VExzVE5Ia0Yxa1V2MnpJdkJ4ekk"
        >
          <v-container fill-height>
            <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black"
                >
                  영화 평점 및 리뷰
                </span>

                <br>
                <span
                :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light"
                >
                  한 곳에서 찾아보기
                </span>
                <br>
                <br>
                <router-link 
                  :to="{name: 'Community'}" 
                  tag='div'
                  v-if="isAuthen">
                  <span>
                    <v-btn
                      rounded
                      color="#FF1744"
                      x-large
                      class="white--text"
                    >
                      영화 리뷰 검색
                    </v-btn>
                  </span>
                </router-link>
                <router-link 
                  :to="{name: 'Login'}" 
                  tag='div'
                  v-if="!isAuthen"
                >
                  <span>
                    <v-btn
                      rounded
                      color="#FF1744"
                      x-large
                      class="white--text"
                    >
                      영화 리뷰 검색
                    </v-btn>
                  </span>
                </router-link>
              </v-col>
          </v-row>           
          </v-container>
        </v-parallax>
      </section>
      <section>
        <div class="py-12"></div>

        <v-container class="text-center">
          <h4 class="display-2 font-weight-bold mb-3">About</h4>
          <h2 class="display-2 font-weight-bold mb-3">J&J CENEMA</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
          <div class="h2 font-weight-black">
            "세상에 하나밖에 없는 그림기반 영화추천 사이트"
          </div>
          <br>
          <h3>
            그림을 통해 오늘 기분에 맞는 영화를 추천해드립니다.
          </h3>
          <h4>
            나의 감정도 체크해보고 영화시청 후 리뷰를 작성해보세요!
          </h4>
          </v-responsive>
          <br>
          <br>
          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="https://blog.kakaocdn.net/dn/cVaSOX/btqD9jVw36X/jHpIEqn2EAk7xdKMMmpEP0/img.png"></v-img>
          </v-avatar>
          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="https://kr.vuejs.org/images/logo.png"></v-img>
          </v-avatar>
          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="https://blog.kakaocdn.net/dn/RX2pR/btqz7z9oXwG/0PYYnK5b3lMxFgw24OJks0/img.png"></v-img>
          </v-avatar>
          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"></v-img>
          </v-avatar>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <v-avatar
            class="elevation-12 mb-12"
            size="88"
          >
            <v-img src="https://img.kr.news.samsung.com/kr/wp-content/uploads/2021/01/%E2%98%85ssafy_logo.jpg"></v-img>
          </v-avatar>

          <div></div>

          <v-btn
            color="grey"
            href="https://vuetifyjs.com"
            outlined
            large
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              Go to GitHub
            </span>
          </v-btn>
        </v-container>

        <div class="py-12"></div>
      </section>
    </v-main>
    <router-view/>
  </div>   
</template>

<script>
export default {
  name: 'Home',
  computed: {
    isAuthen() {
      return this.$store.getters.isAuthenticated
    },
  },
}
</script>

<style scope>
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 72px);
  }
</style>