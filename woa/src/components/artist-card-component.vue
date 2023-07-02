<template>
  <div class="artist-card-component-testimonial">
    <img :alt="image_alt" :src="image_src" class="artist-card-component-image" />
    <div class="artist-card-component-testimonial1">
      <div class="artist-card-component-container">
        <svg
          viewBox="0 0 950.8571428571428 1024"
          class="artist-card-component-icon"
        >
          <path
            d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"
          ></path>
        </svg>
      </div>
      <span class="artist-card-component-text">
        {{description}} <br />
      </span>
      <div class="artist-card-component-container1">
        <svg
          viewBox="0 0 950.8571428571428 1024"
          class="artist-card-component-icon2"
        >
          <path
            d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
          ></path>
        </svg>
      </div>
    </div>
    <span class="artist-card-component-text3">{{ artist }}</span>
    <span class="artist-card-component-text4"
          @click="downloadPDF()">{{ download[lang] }}</span>
  </div>
</template>

<script>
export default {
  name: 'ArtistCardComponent',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/artists/1.jpg',
    },
    description: {
      type: String,
      default: 'description'
    },
    artist: {
      type: String,
      default: 'artist name'
    },
    file_src: {
      type: String,
      default: '/files/1.pdf'
    }
  },
  data(){
    return{
      lang: 0,
      download: ['Preuzmi spisak dela', 'Download arts list']
    }
  },
  created(){
    this.lang = localStorage.getItem('lang') || 0;
  
  },
  methods:{
    downloadPDF(){
      window.open(this.file_src)
    }
  }
}
</script>

<style scoped>
.artist-card-component-testimonial {
  box-shadow: 15px 15px 20px 0px rgba(18, 18, 18, 0.1);
  width: 100%;
  display: flex;
  padding: 48px;
  position: relative;
  max-width: 1440px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  
}
.artist-card-component-image {
  width: 288px;
  height: 288px;
  object-fit: cover;
  border-radius: 50%;
}
.artist-card-component-testimonial1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.artist-card-component-container {
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.artist-card-component-icon {
  width: 48px;
  margin-bottom: -6rem;
}
.artist-card-component-text {
  font-size: 1.15rem;
  max-width: 600px;
  margin-top: 48px;
  text-align: center;
  padding-left: 32px;
  margin-bottom: 48px;
  padding-right: 32px;
}
.artist-card-component-container1 {
  display: flex;
  align-self: flex-end;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.artist-card-component-icon2 {
  width: 48px;
  margin-top: -6rem;
}
.artist-card-component-text3 {
  font-size: 1.5rem;
  max-width: 600px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 4px;
}
.artist-card-component-text4 {
  color: #595959;
  max-width: 600px;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  text-decoration: underline;
}
@media(max-width: 991px) {
  .artist-card-component-image {
    margin-bottom: 0px;
  }
  .artist-card-component-text {
    margin-top: 48px;
    margin-bottom: 48px;
  }
}
@media(max-width: 767px) {
  .artist-card-component-testimonial {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .artist-card-component-testimonial {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .artist-card-component-image {
    width: 200px;
  }
  .artist-card-component-icon {
    margin-bottom: 0px;
  }
  .artist-card-component-text {
    width: auto;
  }
  .artist-card-component-icon2 {
    margin-bottom: 16px;
  }
}
</style>
