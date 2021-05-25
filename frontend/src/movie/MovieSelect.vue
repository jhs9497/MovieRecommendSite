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
              <v-col cols="6">
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  <v-card
                    elevation="5"
                    shaped
                  >
                    <h1>{{ title }}</h1>
                    <h3>{{ release_date }}</h3>
                    <h3>{{ voteavg }}</h3>
                    <h3>{{ overview }}</h3>
                  </v-card>
                </v-card>
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

</style>