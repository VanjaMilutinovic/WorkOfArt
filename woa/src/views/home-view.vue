<template>
  <div class="home-view-container">
    <app-header></app-header>
    <h1 class="home-view-text">{{this.content.title[this.lang]}}</h1>
    <span class="home-view-desc">{{this.content.description[this.lang]}}</span>
    
    
    <span class="home-view-top-offers" v-for='o in this.offersHome' :key=o.id>
      <HomePageOfferComponent class="home-view-container1"
        :author='o.data[this.lang].author' :title='o.data[this.lang].title' 
        :user='o.data[this.lang].user' :image_src='o.image_src' 
        :description='o.data[this.lang].description' >
      </HomePageOfferComponent>
    </span>
  
    <div class="home-view-testimonial">
      <h1>{{this.content.testimonial[this.lang]}}</h1>
      
      <div class="home-view-container4"> 
        <div class="home-view-container5">
          <div class="home-view-container6">
            
            <TestimonialHorizontalComponent 
              :quote='this.content.test1[this.lang]' 
              :profile_src='this.content.test1[2]'
            ></TestimonialHorizontalComponent>
            
          </div>
          <TestimonialHorizontalComponent 
              :quote='this.content.test2[this.lang]' 
              :profile_src='this.content.test2[2]'
            ></TestimonialHorizontalComponent>
        </div>
        <div class="home-view-container7">
          <TestimonialVerticalComponent 
              :quote='this.content.test3[this.lang]' 
              :profile_src='this.content.test3[2]'
            ></TestimonialVerticalComponent>
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
import InitialOffers from '../data/offers.js'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    HomePageOfferComponent,
    TestimonialHorizontalComponent,
    TestimonialVerticalComponent,
    AppFooter,
  },
  data() {
    return {
      offersHome: [],
      offers: [],
      lang: 0,
      content: {
        title: ['Mi smo Work of ART', 'We are Work of ART'],
        description: ['Dobrodošli na našu veb galeriju, gde umetnost oživljava. Otkrijte raznoliku kolekciju fascinantnih umetničkih dela koja prikazuju talenat i kreativnost priznatih umetnika iz celog sveta. Prepustite se vizuelnom putovanju koje slavi lepotu i snagu umetničkog izraza.', 
        'Welcome to our gallery website, where art comes to life. Discover a diverse collection of captivating artworks, showcasing the talent and creativity of renowned artists from around the world. Immerse yourself in a visual journey that celebrates the beauty and power of artistic expression.'],
        testimonial: ['Rekli su o nama:', 'They said about us:'],
        test1: ['Posetio sam vašu galeriju i bio sam oduševljen raznolikošću umetničkih dela koje sam tamo pronašao. Svaka slika je bila kao da priča svoju jedinstvenu priču, ostavljajući me bez daha. Hvala vam na inspiraciji!',
        'I visited your gallery and was amazed by the diversity of artworks I found there. Each painting felt like it was telling its own unique story, leaving me breathless. Thank you for the inspiration!',
        "https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200" ],

        test2: ['Ne mogu dovoljno da istaknem koliko sam zadovoljan posetom vašoj galeriji. Umetnička kolekcija koju ste izložili je izvanredna, s bogatim koloritom i dubokim emocionalnim porukama. Svaki korak u galeriji je bio prava poslastica za oči i dušu.',
        'I can not emphasize enough how pleased I am with my visit to your gallery. The art collection you exhibited was extraordinary, with rich colors and profound emotional messages. Every step in the gallery was a visual and soulful treat.',
        "https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"],
        
        test3: ['Hteo bih da podelim svoje iskustvo iz vaše galerije - jednostavno magično! Vaša paleta umetničkih dela je raznovrsna i jedinstvena. Oduševljen sam načinom na koji ste uspeli da uhvatite emocije i prenesete ih kroz sliku. Bez sumnje, vaša galerija je pravo umetničko blago.',
        'I wanted to share my experience from your gallery - simply magical! Your range of artworks is diverse and one-of-a-kind. I am delighted by the way you captured emotions and conveyed them through the paintings. Undoubtedly, your gallery is a true artistic treasure.',
        "https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"]
      }
    }
  },
  created(){
    if(localStorage.getItem('lang')==null){
      localStorage.setItem('lang', 0);
    }
    this.lang = JSON.parse(localStorage.getItem('lang'))

    if (localStorage.getItem('offers')==null){
      localStorage.setItem('offers', JSON.stringify(InitialOffers))
      this.offers = InitialOffers
    }
    else
      this.offers = JSON.parse(localStorage.getItem('offers'))
    this.offersHome = this.offers
    .filter(offer => offer.type === 0) 
    .sort((a, b) => b.id - a.id) 
    .slice(0, 3);
  },
  methods:{
    
  }
}
</script>

<style scoped>
.home-view-desc{
  width: 75%;
  max-width: 90%;
}
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
  max-width: 100%;
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
