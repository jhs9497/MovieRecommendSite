<template>
  <div class="video-detail">
    <button
      type="button"
      class="btn btn-primary"
      @click="getYoutube()"  
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
      </svg>
      Play Thumbnail? Click Me!
    </button>
    <div 
      class="video-container"
    >
      <iframe 
        
        :src="movieTrailerUrl" frameborder="10">
      </iframe>
    </div>
  </div>
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
  methods: {
    async getYoutube() {
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
}
</script>

<style>
.video-detail {
  width: 70%;
  padding: 1rem;
}

.video-container {
  position: relative;
  padding-top: 56.25%;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>