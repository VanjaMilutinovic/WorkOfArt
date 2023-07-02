<template>
  <div class="all-my-offers-component-art-offers" v-bind:class="rootClassName">
    <h1 class="all-my-offers-component-text">{{ heading[lang] }}</h1>
    <div class="all-my-offers-component-container">
      <my-art-offer-component
        rootClassName="my-art-offer-component-root-class-name"
      ></my-art-offer-component>
    </div>
    <div class="all-my-offers-component-container1">
      <my-art-offer-component
        rootClassName="my-art-offer-component-root-class-name1"
      ></my-art-offer-component>
    </div>
  </div>
</template>

<script>
import MyArtOfferComponent from './my-art-offer-component'

export default {
  name: 'AllMyOffersComponent',
  components: {
    MyArtOfferComponent,
  },
  data(){
    return{
      lang: 0,
      heading: ['Sve moje ponude i poruke', 'My all offers and messages']
    }
  },
  created(){
    this.lang = localStorage.getItem('lang')
  }
}
</script>

<style scoped>
.all-my-offers-component-art-offers {
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
.all-my-offers-component-text {
  color: rgb(48, 48, 48);
  padding: 16px;
  padding-left: 16px;
}
.all-my-offers-component-container {
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}
.all-my-offers-component-container1 {
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}

@media(max-width: 767px) {
  .all-my-offers-component-art-offers {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .all-my-offers-component-art-offers {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
