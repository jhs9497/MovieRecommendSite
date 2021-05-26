<template>
  <div>
    <!-- banner -->
    <section 
      id="hero"
    >
      <v-row no-gutters>
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 1000 : 800"
          src="https://images.unsplash.com/photo-1605429523419-d828acb941d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
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
                    class="font-weight-light display-1"
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

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-3']"
                  >
                    <h6
                      class="headline font-weight-bold"
                    >
                      현재 기분에 맞춰 마음이 가는 그림을 선택해보세요.
                    </h6>
                    <h6
                      class="headline font-weight-bold"
                    >
                      심리테스트를 통해 영화를 추천해드립니다!
                    </h6>
                  </span>

                  <br>

                  <span>
                    <router-link :to="{name: 'MovieAll'}" tag='div'>
                      <v-btn
                        rounded
                        color="#FF1744"
                        x-large
                      >
                      장르별 영화보기
                      </v-btn>
                    </router-link>
                  </span>

                </v-col>
                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#photo')"
                  >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-parallax>
      </v-row>
    </section>
    <!-- 심리테스트 사진 -->
    <v-row id="photo">
      <v-col
        v-for="photo in photos"
        :key="photo"
        class="d-flex child-flex justify-center"
        cols="4"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img 
                v-bind:src="photo"
                aspect-ratio="1"
                class="grey lighten-2"
                hover
              ></v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="#036358"
                >
                  <router-link
                    :to="{
                      name: 'PhotoMovies',
                    }" 
                    tag='div'
                  >
                    <v-btn>See more info</v-btn>
                  </router-link>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PhotoChoice',
  data () {
    return {
      overlay: false,
      photos : [
        'http://t1.daumcdn.net/liveboard/share/9a8bf06f321f40ea86bde4c1f7f8c5a1.JPG',
        'http://t1.daumcdn.net/liveboard/share/73e100ff6d3a48bfa81f063d7c6eb39a.jpg',
        'http://t1.daumcdn.net/liveboard/share/48c5af5baeeb48ef9584799edf4488bb.jpg',
        'http://t1.daumcdn.net/liveboard/share/32e844b992484ac5ba435570cd13d1a7.jpg',
        'http://t1.daumcdn.net/liveboard/share/be2997b5249b4a028ada733130f95d1a.jpg',
        'http://t1.daumcdn.net/liveboard/share/da77a78d4ad34f338b81126e873993b8.JPG',
        'http://t1.daumcdn.net/liveboard/share/edfcd3c40e124b8dafae51498edf9423.JPG',
        'http://t1.daumcdn.net/liveboard/share/0e37ff8057424aeab56c76958e08e7e0.JPG',
        'http://t1.daumcdn.net/liveboard/share/d2fabcac9d144ce0bf094d961128cd93.JPG',
      ],
    }
  },
}
</script>

<style>
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 72px);
  }
</style>