<template>
  <div class="about-us-view-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <h1 class="about-us-view-text">Ovo smo mi!</h1>
    <span class="about-us-view-text1">Neki tekst o nama. Lorem ipsum</span>
    <app-gallery rootClassName="gallery-root-class-name"></app-gallery>
    <div class="about-us-view-banner">
      <h2 class="about-us-view-text2">
        <span>Ovo je umesto mape</span>
        <br class="about-us-view-text4" />
        <span><span v-html="rawmxb2"></span></span>
      </h2>
    </div>
    <h1 class="about-us-view-text6">
      <span>
        Kontaktirajte nas!
        <span v-html="raws67u"></span>
      </span>
      <span class="about-us-view-text8">064 987 345</span>
    </h1>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppGallery from '../components/gallery'
import AppFooter from '../components/footer'

export default {
  name: 'AboutUsView',
  components: {
    AppHeader,
    AppGallery,
    AppFooter,
  },
  data() {
    return {
      rawmxb2: ' ',
      raws67u: ' ',
    }
  },
  metaInfo: {
    title: 'AboutUsView - Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'AboutUsView - Work Of Art',
      },
    ],
  },
}
</script>

<style scoped>
.about-us-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.about-us-view-text {
  color: #303030;
  margin: 32px;
}
.about-us-view-text1 {
  margin-left: 48px;
  margin-right: 48px;
}
.about-us-view-banner {
  width: 100%;
  display: flex;
  padding: 48px;
  align-items: center;
  margin-left: 48px;
  margin-right: 48px;
  margin-bottom: 48px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #b0b0b0;
}
.about-us-view-text2 {
  margin: 0px;
  text-align: center;
  font-weight: 600;
}
.about-us-view-text4 {
  font-weight: 600;
}
.about-us-view-text6 {
  color: rgb(48, 48, 48);
  margin: 32px;
}
.about-us-view-text8 {
  text-decoration: underline;
}
@media(max-width: 991px) {
  .about-us-view-text2 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .about-us-view-banner {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .about-us-view-banner {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
