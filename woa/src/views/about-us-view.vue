<template>
  <div class="about-us-view-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <h1 class="about-us-view-text">{{ title[lang] }}</h1>
    <span class="about-us-view-text1">{{ about[lang] }}</span>
    <app-gallery :id="0"></app-gallery>

    <div style="width: 90%">
      <iframe width="100%" height="600" frameborder="0" scrolling="no" 
        marginheight="0" marginwidth="0" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7879795869853!2d20.473560975308626!3d44.80550937714732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5ee145d3%3A0x3ed89b5bb505d83!2sUniversity%20of%20Belgrade%20School%20of%20Electrical%20Engineering!5e0!3m2!1sen!2srs!4v1688261310919!5m2!1sen!2srs" >
        <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
      </iframe>
    </div>

    <h1 class="about-us-view-text6">
      <span>
        {{contact[lang]}}
      </span>
      <span class="about-us-view-text8">064 987 345</span>
    </h1>
    <app-footer></app-footer>
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
      lang: 0,
      contact: ['Kontaktirajte nas! ', 'Contact us! '],
      about: ['Dobrodošli na našu veb galeriju, gde umetnost oživljava. Otkrijte raznoliku kolekciju fascinantnih umetničkih dela koja prikazuju talenat i kreativnost priznatih umetnika iz celog sveta. Prepustite se vizuelnom putovanju koje slavi lepotu i snagu umetničkog izraza.', 
        'Welcome to our gallery website, where art comes to life. Discover a diverse collection of captivating artworks, showcasing the talent and creativity of renowned artists from around the world. Immerse yourself in a visual journey that celebrates the beauty and power of artistic expression.'],
      title: ['Ovo smo mi!', 'This is us!']
    }
  },
  created(){
    this.lang = localStorage.getItem('lang') || 0;
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
.about-us-view-text1 
{
  max-width: 85%;
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
