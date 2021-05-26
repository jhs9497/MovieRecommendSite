<template>
  <section>
    <div>
      <v-img
        gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
        height="700px"
        :src="this.poster"
      >
        <v-container background-opacity="0.65">
            <v-row no-gutters>
              <!-- 영화 포스터 -->
              <v-col cols="5">
                <v-card
                  elevation="2"
                  shaped
                >
                  <v-img
                    :src="this.poster"
                    height="700px"
                  />
                </v-card>
              </v-col>

              <v-col cols="1">
                <!-- 여백 -->
              </v-col>

              <!-- 영화 정보 -->
              <v-col cols="6">
                <v-card
                  class="mx-auto"
                  outlined
                  elevation="5"
                  shaped
                  height="350px"
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4 red accent-3 white--text" style="padding-left: 13px">
                        Movie Info
                      </div>
                      <v-list-item-title class="headline mb-1">
                        <h2>{{ title }}</h2>
                      </v-list-item-title>
                      <div class="overline mx-0" style="padding-left: 13px">{{ release_date }}</div>
                      <v-card-text
                        class="d-flex flex-row pa-0"
                      >
                        <v-rating
                          :value="this.voteavg/2"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="25"
                          class="pa-2"
                        ></v-rating>
                        <div class="grey--text pa-2">
                          <div style="padding-top: 8px;">
                            {{ voteavg/2 }}점
                          </div>
                        </div>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-list-item-subtitle
                        style="padding-left: 13px; padding-top: 15px; padding-right: 13px"
                      >{{ overview }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-card-actions
                   style="padding-left: 20px"
                  >
                    <v-btn
                      text
                      rounded
                      outlined
                      @click="reveal = true"
                      elevation = "2"
                      color="red"
                    >
                      더보기
                    </v-btn>
                    <v-btn :to="{ name : 'Community' }"
                      outlined
                      rounded
                      text
                      elevation = "2"
                      color="green"
                    >
                      리뷰 보기
                    </v-btn>
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
                        <p>{{ overview }}</p>
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
                <br>
                <v-card
                  elevation="5"
                  :class="radius"
                  height="300px"
                >
                  <h1>영화 예고편</h1>
                </v-card>
              </v-col>
              <v-col>
                <div>
                </div>
              </v-col>
            </v-row>
        </v-container>
      </v-img>
    </div>


  </section>
</template>

<script>

export default {
  name: 'MovieSelect',
  data() {
    return {
      reveal: false,
    }
  },
  methods: {
  },  
  props: {
    title:{
      type: String,
      default: ''
    },
    poster:{
      type: String,
      default: ''
    },
    release_date:{
      type: String,
      default: ''
    },
    voteavg:{
      type: String,
      default: ''
    },
    overview:{
      type: String,
      default: ''
    }
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