<template>
  <div class="arts-view-container">
    <app-header rootClassName="header-root-class-name3"></app-header>
    <div class="arts-view-testimonial">
      <div class="arts-view-container1">
        <h1 class="arts-view-text">
          <span>{{this.title[this.lang]}}</span>
          <br />
        </h1>
        <span class="arts-view-text3">{{this.text[this.lang]}}</span>
        <div class="arts-view-container2">
          <router-link to="/art-overview-view/0">
            <ArtTypeComponent
              :picture_src='this.src[0]'
              :type='this.img[this.lang]'
              :class="arts-view-component3"
            ></ArtTypeComponent>
          </router-link>
          <router-link to="/art-overview-view/1">
            <ArtTypeComponent
              :picture_src='this.src[1]'
              :type='this.scu[this.lang]'
              :class="arts-view-component3"
            ></ArtTypeComponent>
          </router-link>
          <router-link to="/art-overview-view/2">
            <ArtTypeComponent
              :picture_src='this.src[2]'
              :type='this.oth[this.lang]'
              :class="arts-view-component3"
            ></ArtTypeComponent>
          </router-link>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name3"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ArtTypeComponent from '../components/art-type-component'
import AppFooter from '../components/footer'

export default {
  name: 'ArtsView',
  components: {
    AppHeader,
    ArtTypeComponent,
    AppFooter,
  },
  data(){
    return{
      title: ['Umetnine', 'Arts'],
      text: ['Neki tekstic', 'Some text'],
      src: ["/1/0.jpg", "/4/0.jpg", "/7/0.jpg"],
      img: ['SLIKE', 'PICTURES'],
      scu: ['SKULPTURE', 'SCULPTURES'],
      oth: ['OSTALO', 'OTHER'],
      lang: 0
    }
  },
  created(){
    this.lang = localStorage.getItem('lang')
  }
}
</script>

<style scoped>
.arts-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.arts-view-testimonial {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: 232323;
}
.arts-view-container1 {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1440px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
}
.arts-view-text {
  color: #303030;
}
.arts-view-text3 {
  color: #303030;
  font-size: 0.75rem;
  max-width: 600px;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 32px;
}
.arts-view-container2 {
  width: 100%;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
}
.arts-view-component1 {
  text-decoration: none;
}
.arts-view-component2 {
  text-decoration: none;
}
.arts-view-component3 {
  text-decoration: none;
}
@media(max-width: 991px) {
  .arts-view-text {
    text-align: center;
  }
  .arts-view-text3 {
    text-align: center;
  }
  .arts-view-container2 {
    grid-template-columns: 1fr;
  }
}
@media(max-width: 767px) {
  .arts-view-container1 {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .arts-view-container1 {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
