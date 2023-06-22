<template>
  <div class="atrist-view-container">
    <app-header rootClassName="header-root-class-name4"></app-header>
    <artist-card-component></artist-card-component>
    <artist-card-component></artist-card-component>
    <artist-card-component></artist-card-component>
    <app-footer rootClassName="footer-root-class-name4"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ArtistCardComponent from '../components/artist-card-component'
import AppFooter from '../components/footer'

export default {
  name: 'AtristView',
  components: {
    AppHeader,
    ArtistCardComponent,
    AppFooter,
  },
  metaInfo: {
    title: 'AtristView - Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'AtristView - Work Of Art',
      },
    ],
  },
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
