<template>
  <div class="art-all-offers-component-art-offers" v-bind:class="rootClassName">
    <h1 class="art-all-offers-component-text">{{ this.heading[this.lang] }}</h1>
    <div class="art-all-offers-component-container">
      <art-offer-component
        profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
        rootClassName="rootClassName3"
      ></art-offer-component>
    </div>
    
  </div>
</template>

<script>
import ArtOfferComponent from './art-offer-component'

export default {
  name: 'ArtAllOffersComponent',
  props: {
    title:{
      type: String,
      default: 1
    }
    
  },
  components: {
    ArtOfferComponent,
  },
  data(){
    return{
      lang: 0,
      heading: ['Sve ponude i poruke', 'All offers and messages']
    }
  },
  created(){
    this.lang = localStorage.getItem('lang')
  }
}
</script>

<style scoped>
.art-all-offers-component-art-offers {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1440px;
  align-items: center;
  padding-left: 48px;
  padding-right: 48px;
  flex-direction: column;
  justify-content: space-between;
}
.art-all-offers-component-text {
  color: rgb(48, 48, 48);
  padding: 16px;
  padding-left: 16px;
}
.art-all-offers-component-container {
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.art-all-offers-component-container1 {
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
@media(max-width: 767px) {
  .art-all-offers-component-art-offers {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .art-all-offers-component-art-offers {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
