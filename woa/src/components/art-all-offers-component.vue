<template>
  <div class="art-all-offers-component-art-offers" v-bind:class="rootClassName">
    <h1 class="art-all-offers-component-text">{{ this.heading[this.lang] }}</h1>
    <div class="art-all-offers-component-container" 
          v-for="offer in this.allOffers" :key="offer.id">
      <div v-if="offer.data[lang].title == this.title">
        <ArtOfferComponent
          :image_src='offer.image_src'
          :by="offer.data[lang].user"
          :description="offer.data[lang].description"
        ></ArtOfferComponent>
      </div>

      
    </div>
    
  </div>
</template>

<script>
import ArtOfferComponent from './art-offer-component'
import AllOffers from '../data/offers.js'

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
      heading: ['Sve ponude i poruke', 'All offers and messages'],
      allOffers: []
    }
  },
  created(){
    this.lang = localStorage.getItem('lang')
    if(localStorage.getItem('offers')==null){
      localStorage.setItem('offers', JSON.stringify(AllOffers
      ));
      this.allOffers = AllOffers
    }
    else
      this.allOffers = JSON.parse(localStorage.getItem('offers'))
   
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
