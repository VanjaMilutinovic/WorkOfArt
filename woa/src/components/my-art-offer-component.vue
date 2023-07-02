
<template>
  <div class="my-art-offer-component-blog-post-card" v-bind:class="rootClassName">
    <div class="my-art-offer-component-image-container">
      <img
        :alt="offer.image_src"
        :src="offer.image_src"
        class="my-art-offer-component-image"
      />
    </div>
    <div class="my-art-offer-component-container">
      <div class="my-art-offer-component-container1">
        <h1 class="my-art-offer-component-text">{{ offer.data[lang].description }}</h1>
        <span class="my-art-offer-component-text1">{{ offer.data[lang].user }}</span>
      </div>
      <button type="button" class="my-art-offer-component-button button" @click="deleteOffer()">
        {{ deleted[lang] }}
      </button>
    </div>
  </div>
</template>



<script>
import AllOF from '../data/offers.js'

export default {
  name: 'MyArtOfferComponent',
  props: {
    lang:{
      type: Number,
      required: true,
    },
    offer: {
      type: Object,
      required: true,
    },
    
  },
  data(){
    return{
      lang: 0,
      deleted: ['Obrisi', 'Delete']
    }
  },
  created(){
    this.lang = localStorage.getItem('lang') || 0;
  },
  methods: {
    deleteOffer() {
      let offers = JSON.parse(localStorage.getItem('offers')) || AllOF;

      const index = offers.findIndex(of => of.id === this.offer.id);

      if (index !== -1) {
        offers.splice(index, 1);

        localStorage.setItem('offers', JSON.stringify(offers));
        
        location.reload();

      }
    },
  },
}
</script>




<style scoped>
.my-art-offer-component-blog-post-card {
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 100%;
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  max-height: 100%;
  min-height: 100%;
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.my-art-offer-component-blog-post-card:hover {
  transform: scale(1.02);
}
.my-art-offer-component-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.my-art-offer-component-container {
  height: 100%;
  display: flex;
  padding: 32px;
  align-self: stretch;
  max-height: 100%;
  min-height: 100%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.my-art-offer-component-container1 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.my-art-offer-component-text {
  align-self: flex-start;
  margin-bottom: 32px;
}
.my-art-offer-component-text1 {
  color: #595959;
  font-size: 1.25rem;
  margin-bottom: 0px;
}
.my-art-offer-component-button {
  transition: 0.3s;
  margin-top: 48px;
  padding: 12px;
  color: #ffffff;
  
  align-self: flex-start;
  font-style: normal;
  font-weight: 600;
  background-color: #303030;
  border-radius: 8px;
}


@media(max-width: 991px) {
  .my-art-offer-component-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
  .my-art-offer-component-container {
    flex-direction: row;
  }
}
@media(max-width: 767px) {
  .my-art-offer-component-blog-post-card {
    flex-direction: column;
  }
  .my-art-offer-component-image {
    width: 100%;
  }
}
</style>
