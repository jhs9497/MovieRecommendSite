<template>

      <iframe 
        width="580px"
        outlined
        elevation="5"
        height="285px"
        id="video"
        :src="movieTrailerUrl" frameborder="0">
      </iframe>

</template>

<script>
import axios from 'axios'

const YOUTUBE_API_KEY = 'AIzaSyD1p7hrOEDEZLIzA4qNx814qE86LuG8i7k'  // youtube API KEY 변수화
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'Yotube',
  data() {
    return {
      movieTrailerUrl : ''
    }
  },
  async created () {
    const config = {
        params: {
          part: 'snippet',
          type: 'video',
          q: localStorage.select_review_movie + '예고편',
          key: YOUTUBE_API_KEY,
        }
      }
    const response = await axios.get(YOUTUBE_API_URL, config)
    const movieTrailer = response.data.items[0]
    const movieTrailerId = movieTrailer.id.videoId
    this.movieTrailerUrl = `https://www.youtube.com/embed/${movieTrailerId}`
    console.log(this.movieTrailerUrl)
  }
}
</script>

<style>

</style>