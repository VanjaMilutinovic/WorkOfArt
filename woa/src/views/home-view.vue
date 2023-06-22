<template>
  <div class="home-view-container">
    <app-header></app-header>
    <h1 class="home-view-text">Mi smo Work od ART</h1>
    <span>Ovde ide neki tekst na srpskom</span>
    <div class="home-view-top-offers">
      <div class="home-view-container1">
        <home-page-offer-component
          rootClassName="rootClassName1"
        ></home-page-offer-component>
      </div>
      <div class="home-view-container2">
        <home-page-offer-component
          image_src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
          rootClassName="rootClassName2"
        ></home-page-offer-component>
      </div>
      <div class="home-view-container3">
        <home-page-offer-component
          image_src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHx3b3JrJTIwb2ZmaWNlfGVufDB8fHx8MTYyNjQ1MDgzMQ&amp;ixlib=rb-1.2.1&amp;h=1000"
          rootClassName="rootClassName"
        ></home-page-offer-component>
      </div>
    </div>
    <div class="home-view-testimonial">
      <h1>Rekli su o nama:</h1>
      <div class="home-view-container4">
        <div class="home-view-container5">
          <div class="home-view-container6">
            <testimonial-horizontal-component
              profile_src="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></testimonial-horizontal-component>
          </div>
          <testimonial-horizontal-component
            profile_src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
          ></testimonial-horizontal-component>
        </div>
        <div class="home-view-container7">
          <testimonial-vertical-component
            picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
            profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></testimonial-vertical-component>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import HomePageOfferComponent from '../components/home-page-offer-component'
import TestimonialHorizontalComponent from '../components/testimonial-horizontal-component'
import TestimonialVerticalComponent from '../components/testimonial-vertical-component'
import AppFooter from '../components/footer'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    HomePageOfferComponent,
    TestimonialHorizontalComponent,
    TestimonialVerticalComponent,
    AppFooter,
  },
  metaInfo: {
    title: 'Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'Work Of Art',
      },
    ],
  },
}
</script>

<style scoped>
.home-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-view-text {
  color: #303030;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 32px;
}
.home-view-top-offers {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1440px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.home-view-container1 {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.home-view-container2 {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.home-view-container3 {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.home-view-testimonial {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-view-container4 {
  display: flex;
  padding: 48px;
  max-width: 1440px;
  align-items: stretch;
  justify-content: space-between;
}
.home-view-container5 {
  flex: 2;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 32px;
  flex-direction: column;
  justify-content: flex-start;
}
.home-view-container6 {
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: flex-start;
}
.home-view-container7 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media(max-width: 991px) {
  .home-view-container4 {
    flex-direction: column;
  }
  .home-view-container5 {
    margin-right: 0px;
    margin-bottom: 32px;
  }
}
@media(max-width: 767px) {
  .home-view-top-offers {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-view-container4 {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .home-view-top-offers {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .home-view-container4 {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
