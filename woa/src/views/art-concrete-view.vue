<template>
  <div class="art-concrete-view-container">
    <app-header rootClassName="header-root-class-name1"></app-header>
    <single-art-component></single-art-component>
    <art-all-offers-component></art-all-offers-component>
    <app-gallery></app-gallery>
    <app-footer rootClassName="footer-root-class-name1"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import SingleArtComponent from '../components/single-art-component'
import ArtAllOffersComponent from '../components/art-all-offers-component'
import AppGallery from '../components/gallery'
import AppFooter from '../components/footer'

export default {
  name: 'ArtConcreteView',
  components: {
    AppHeader,
    SingleArtComponent,
    ArtAllOffersComponent,
    AppGallery,
    AppFooter,
  },
  metaInfo: {
    title: 'ArtConcreteView - Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'ArtConcreteView - Work Of Art',
      },
    ],
  },
}
</script>

<style scoped>
.art-concrete-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
