<template>
  <div class="atrist-view-container">
    <app-header></app-header>
    <div v-for="artist in this.all" :key="artist.id">
      <ArtistCardComponent
        :artist='artist.data[lang].name'
        :description='artist.data[lang].bio'
        :file_src='artist.pdf_src'
        :image_src='artist.img_src'

      ></ArtistCardComponent>
    </div>
    <app-footer rootClassName="footer-root-class-name4"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ArtistCardComponent from '../components/artist-card-component'
import AppFooter from '../components/footer'
import AllArtists from '../data/artists.js'

export default {
  name: 'AtristView',
  components: {
    AppHeader,
    ArtistCardComponent,
    AppFooter,
  },
  data(){
    return{
      all: [],
      lang: 0
    }
  },
  created(){
    this.all = AllArtists;
    this.lang = localStorage.getItem('lang') || 0;;
  }

}
</script>

<style scoped>
.atrist-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
