<template>
  <div class="arts-view-container">
    <app-header rootClassName="header-root-class-name3"></app-header>
    <div class="arts-view-testimonial">
      <div class="arts-view-container1">
        <h1 class="arts-view-text">
          <span>Umetnine</span>
          <br />
        </h1>
        <span class="arts-view-text3">Neki tekstic</span>
        <div class="arts-view-container2">
          <router-link to="/art-overview-view">
            <art-type-component
              picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
              class="arts-view-component1"
            ></art-type-component>
          </router-link>
          <router-link to="/art-overview-view">
            <art-type-component
              rootClassName="rootClassName"
              class="arts-view-component2"
            ></art-type-component>
          </router-link>
          <router-link to="/art-overview-view">
            <art-type-component
              picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
              class="arts-view-component3"
            ></art-type-component>
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
  metaInfo: {
    title: 'ArtsView - Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'ArtsView - Work Of Art',
      },
    ],
  },
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
