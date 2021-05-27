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
                    SSAFY Gallery
                  </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-3']"
                    class="font-weight-black"
                  >
                    미술관에 오신 것을 환영합니다!
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
    <v-img
      gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
      height="1150px"
      src="https://images.unsplash.com/photo-1605429523419-d828acb941d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
    >
      <v-row 
        id="photo"
        style="padding-top:30px"
      >
        <v-col
          v-for="photo in photos"
          :key="photo"
          class="d-flex child-flex"
          cols="4"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="mx-auto"
                max-width="344"
              >
                <v-img 
                  :src="photo.url"
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
                    <v-btn
                      class="white--text"
                      color="#FF1744"
                      rounded
                      @click="overlay = !overlay"
                      hover
                    >
                      See more info
                    </v-btn>
                    <v-overlay
                      :z-index="zIndex"
                      :value="overlay"
                      hover
                    >
                     <!-- card -->
                      <v-card
                        :loading="loading"
                        class="mx-auto"
                        max-width="700px"
                      >
                        <v-list-item three-line>
                          <v-list-item-content
                          >
                            <!-- <v-list-item-title class="headline mb-1">
                              {{ photo.theme}}
                            </v-list-item-title> -->
                            <v-card-title class="font-weight-black">
                              {{ photo.theme}}
                            </v-card-title>
                            <v-card-text>
                              <v-row>
                                <br>
                                <div class="grey--text ms-4">
                                  작품명 : {{ photo.title }}
                                </div>
                                <div class="grey--text ms-4">
                                  작가 : {{ photo.artist }}
                                </div>
                                <br>
                                <div
                                  class="grey--text ms-4"
                                >추천 장르</div>
                                <div 
                                  class="white--text ms-4 font-weight-medium"
                                  v-for="genre in photo.genre"
                                  :key="genre"
                                >
                                  <div>
                                    {{ genre }}
                                  </div>
                                </div>
                              </v-row>
                            </v-card-text>
                            <v-divider class="mx-4"></v-divider>
                            <v-card-text>
                              <div class="font-weight-regular">{{ photo.content }}</div>
                            </v-card-text>
                          </v-list-item-content>

                          <v-list-item-avatar
                            tile
                            size="310"
                          >
                            <img :src="photo.url">
                          </v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions
                          style="padding : 0px 20px 10px"
                        >
                          <v-btn
                            color="deep-purple lighten-2"
                            text
                            @click="overlay = false"
                          >
                            Back
                          </v-btn>
                          <v-spacer></v-spacer>
                          <router-link
                            :to="{ 
                              name: 'PhotoMovies',
                              params: {
                                photo_url : photo.url,
                                photo_theme : photo.theme,
                                photo_genreid : photo.genreid,
                              },
                            }"
                            tag="div"
                          >
                            <v-btn
                              class="white--text"
                              color="#FF1744"
                              elevation="2"
                              medium
                            >
                              영화추천받기
                            </v-btn>
                          </router-link>
                        </v-card-actions>
                      </v-card>
                    </v-overlay>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-img>

  </div>
</template>

<script>
export default {
  name: 'PhotoChoice',
  data () {
    return {
      overlay: false,
      zIndex: 0,
      photos : [
        {
          id: 1,
          url: 'http://t1.daumcdn.net/liveboard/share/9a8bf06f321f40ea86bde4c1f7f8c5a1.JPG',
          title: '정지의 시작',
          genreid: [14, 16, 28],
          genre: ['판타지, 액션, 애니메이션'],
          artist: '최승윤',
          theme: '혼자 있고 싶은 당신',
          content: '인간관계에 대한 고민이 많은 당신은 지금 다른 사람들과 잡담을 나누기보다 혼자 있기를 원하고 있습니다. 특히 내성적인 성격 때문에 타인에게 싫은 소리를 못 한 채 속으로 끙끙 앓고 있다면 훨씬 민감한 시기라고 할 수 있습니다. 평소 사려가 깊다는 이야기를 주로 듣지만, 지금만큼은 그 누구보다 예민해진 상태이니 다른 스트레스가 쌓이지 않도록 주의하는 것이 좋습니다. 기회가 된다면 지루한 일상에서 벗어나 경험하지 못한 새로운 무언가를 찾는 것도 좋은 방법입니다.'
        },
        {
          id: 2,
          url: 'http://t1.daumcdn.net/liveboard/share/73e100ff6d3a48bfa81f063d7c6eb39a.jpg',
          title: 'Choice-O',
          genreid: [10402, 878, 14],
          genre: ['음악', 'SF', '판타지'],
          artist:'솔채',
          theme: '자유롭고 싶은 당신',
          content: '중요한 선택의 순간 앞에 선 당신은 지금 스스로 마음의 결정하기 위해 무언가에 얽매이지 않고 싶어하는 상태입니다. 아무도 간섭하지 않는 마이웨이의 길을 가는 것도 좋지만, 하지만 주변의 기대와 반대되는 행동을 한다면 주변 사람들이 살짝 당황할 수 있으니 주의가 필요합니다. 어디론가 훌쩍 떠나고 싶으신가요? 지금은 어떠한 활동을 해도 예술가적인 성향으로 빛을 발할 수 있는 절호의 타이밍이니 이 기회를 놓치지 마세요.',
        },
        {
          id: 3,
          url: 'http://t1.daumcdn.net/liveboard/share/48c5af5baeeb48ef9584799edf4488bb.jpg',
          title: '순간의 단면',
          genreid: [35, 10770, 10751],
          genre: ['코미디', 'TV영화', '가족'],
          artist: '최승윤',
          theme: '새로운 즐거움이 필요한 당신',
          content: '지루한 일상에 지친 당신은 지금 새로운 즐거움이 필요한 상태입니다. 지금까지 익숙한 일에 적응하며 안정감을 느끼곤 했지만, 매너리즘은 갑자기 찾아올 수 있으니 주의해야 합니다. 가끔은 자극적인 활력소를 찾아 떠나며 약간의 위험 요소가 있더라도 서슴지 않고 도전하는 자세가 필요합니다. 지금 같이 무언가가 적극적으로 하고 싶어졌을 때 혼자가 아닌 많은 사람과 함께 하면 더 즐겁다는 사실을 잊지 마세요.',
        },
                {
          id: 4,
          url: 'http://t1.daumcdn.net/liveboard/share/32e844b992484ac5ba435570cd13d1a7.jpg',
          title: 'Shining Memories',
          genreid: [18, 99, 37],
          genre: ['드라마', '다큐멘터리', '서부'],
          artist: '김혜영',
          theme: '여유로움이 필요한 당신',
          content: '주위 사람들로부터 따뜻하고 인간미 넘치는 사람으로 인정받는 당신은 지금 복잡한 상황에서 벗어나고 싶은 상태입니다. 따라서 평소와는 달리 이상보다 현실과 일상에 더 큰 비중을 두며 여유로운 느낌을 받길 원하고 있습니다. 혹시 업무로 인해 머리가 복잡하고 스트레스가 심하다면 작품 전시회 등을 관람하며 생각을 정리해보는 것도 좋은 방법입니다.',
        },
                {
          id: 5,
          url: 'http://t1.daumcdn.net/liveboard/share/be2997b5249b4a028ada733130f95d1a.jpg',
          title: 'Gray of gray',
          genreid: [80, 53, 9648],
          genre: ['범죄', '스릴러', '미스터리'],
          artist: '김보경',
          theme: '프로페셔널한 당신',
          content: '어떤 일이 크게 성공했을 때 우연한 행운에 공을 돌리기보다 스스로 한 행위를 높게 평가하는 당신은 지금 하는 활동을 매끄럽게 마무리 짓고 싶어 합니다. 프로페셔널한 모습 때문에 다른 사람들로부터 의지할만한 사람으로 평가받지만, 이러한 기대가 부담된다면 “No!”라고 말하는 솔직함도 겸비하는 것이 좋겠네요. 하나부터 열까지 모든 것을 완벽하게 이루어내고자 하는 성격 때문에 지치는 순간이 올 수 있으니 자신의 감정을 솔직하게 받아들이는 연습이 필요합니다.',
        },
                {
          id: 6,
          url: 'http://t1.daumcdn.net/liveboard/share/da77a78d4ad34f338b81126e873993b8.JPG',
          title: '부유하는 관계',
          genreid:[ 10749, 16, 10402],
          genre: ['로맨스','애니', '음악'],
          artist: '박다정',
          theme: '숨기고픈 비밀이 많은 당신',
          content: '태평스러운 성격으로 매사에 사려가 깊은 당신은 지금 은근히 숨기고픈 비밀이 많아 프라이버시에 민감한 상태입니다. 다행히 가족이나 친구 관계에서는 별 어려움을 느끼지 않지만, 연인 관계에서는 상대방이 조금 섭섭하게 생각할 수도 있으니 한동안은 조심하는 것이 좋습니다. 누구에게나 비밀은 있는 법이니 이럴 때일수록 신중하고 평온한 마음을 잃지 않도록 노력하는 자세가 필요합니다.',
        },
                {
          id: 7,
          url: 'http://t1.daumcdn.net/liveboard/share/edfcd3c40e124b8dafae51498edf9423.JPG',
          title: '미로',
          genreid:[27, 10752, 53 ],
          genre: ['공포', '전쟁', '스릴러'],
          artist: '유한이',
          theme: 'YOLO족이 되고픈 당신',
          content: '지금 ‘인생은 단 한 번뿐!’을 외치는 당신은 진정한 YOLO(You only Live once)족처럼 인생을 최대한 즐기며 살고 싶어 합니다. 평소에도 호기심이 많은 탓에 새로운 것에 대한 거부감이 전혀 없었지만, 이젠 지루하고 따분한 것을 참지 못하는 경지까지 이르렀네요. 다양한 경험을 접하며 배우는 것도 중요하지만, 금전적인 문제나 과도한 에너지를 쓰고 있지는 않은지 점검하는 습관도 가져보세요.',
        },
                {
          id: 8,
          url: 'http://t1.daumcdn.net/liveboard/share/0e37ff8057424aeab56c76958e08e7e0.JPG',
          title: 'Peach Paradise',
          genreid: [10749, 16, 35],
          genre: ['로맨스', '애니', '코미디'],
          artist: '김현주',
          theme: '낭만이 부족한 당신',
          content: '모든 것을 이성보다 감성을 통해 이해하고 행동하는 당신은 지금 마음 속 낭만의 부족함을 느끼고 있는 상태입니다. 인생을 살아갈 때 가장 중요한 것은 ‘꿈’이라고 말하며 꿈을 잃지 않기 위해 노력하지만, 인간의 낭만을 배척하는 주변 사람들 때문에 힘들어하고 있습니다. 다른 사람의 일도 본인의 일처럼 생각하는 풍부한 감정의 소유자인 당신! 목적과 성취보다 과정과 방향을 중요시하는 그 마음이 오래오래 변치 않길 바랍니다.',
        },
                {
          id: 9,
          url: 'http://t1.daumcdn.net/liveboard/share/d2fabcac9d144ce0bf094d961128cd93.JPG',
          title: '언니 Sister',
          genreid:[10770, 36, 1040],
          genre : ['TV영화', '역사', '음악'],
          artist: '윤새움',
          theme: '무언가를 추구하는 당신',
          content: '독특한 행동방식과 가치관에 따라 행동하는 당신은 지금 끊임없는 감수성으로 무언가를 추구하고 있는 상태입니다. 유행을 좇지 않고 자신만의 고상한 행동방식으로 만족도 높은 인생을 살고 싶어하기 때문에 다른 사람들이 별 흥미를 느끼지 못하는 것에도 쉽게 빠져들 수 있습니다. 주변에서 이러한 당신을 말리더라도 할 수 있다는 자신감과 믿음으로 달려나가는 자세가 중요합니다.',
        },
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