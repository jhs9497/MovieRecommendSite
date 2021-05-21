<template>
  <div>
    <v-app>
    <v-app-bar
      app
      color="white"
      height="100"
    >
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="70%"
          src="https://image.flaticon.com/icons/png/512/1038/1038100.png"
        ></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline">
        J&J CINEMA
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        text
        color="#FF5252"
      >
        Movie
      </v-btn>
      <v-btn
        text
        color="primary"
      >
        Recommand
      </v-btn>
      <v-btn
        text
        color="green"
      >
        Review
      </v-btn>
      <router-link to="/login">
        <v-btn text>
          Login
        </v-btn>
      </router-link>
       <router-link to="/signup">
        <v-btn text>
          Sign up
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-content>
      <section id="hero">
        <v-row no-gutters>
          <v-img
            gradient="to top right, rgba(255,255,255,0), rgba(25,32,72,.7)"
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="http://www.artinsight.co.kr/data/news/1605/1890085884_c7NKnIHh_ab9216fb52b46505eadbf3abeff09d20.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
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
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      지금 보고 싶은 영화
                    </span>

                    <br>
                    <br>

                    <span>
                      <v-btn
                        rounded
                        color="#FF1744"
                        x-large
                      >
                      테스트 하러가기
                      </v-btn>
                    </span>

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
          </v-img>
        </v-row>
      </section>
      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1000 : 700"
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
          :height="$vuetify.breakpoint.smAndDown ? 1000 : 700"
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
              </v-col>
          </v-row>           
          </v-container>
        </v-parallax>
      </section>

      <section>
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">ABOUT J&J CENEMA</h2>

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
            Project 소개글
          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="128"
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

    </v-content>
    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        <subtitle>
          &copy; {{ (new Date()).getFullYear() }} - SSAFY 5th. Finala Project - Made with JHS & JSG 🔥
        </subtitle>
        <br>
        <p class="font-weight-thin">
        </p>
      </div>
    </v-footer>
    </v-app>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>

</style>