<template>
  <div class="art-concrete-view-container">
    <app-header rootClassName="header-root-class-name1"></app-header>
    <SingleArtComponent :img_desc='this.art.data[this.lang].description' :image_src='this.art.image_src'
      :name='this.art.data[this.lang].title' :author='this.art.data[this.lang].author'>
    </SingleArtComponent>

    <div class="offers-and-messages">
      <button class="art-concrete-view-button button" @click="view()">
        {{ viewAll[lang] }}
      </button>

      <div class="art-concrete-view-container1">
        <span class="art-concrete-view-text08">
          <span>{{ enterOffer[lang] }}</span>
          <br />
        </span>
        <textarea placeholder="offer" class="art-concrete-view-textarea textarea" name="offerText"
          v-model="offerText"></textarea>
        <button class="art-concrete-view-button button" @click="offer()">
          {{ offerButton[lang] }}
        </button>
      </div>
      <div class="art-concrete-view-container1">
        <span class="art-concrete-view-text14">
          <span>{{ enterMessage[lang] }}</span>
          <br />

        </span>
        <textarea placeholder="message" class="art-concrete-view-textarea textarea" name="messageText"
          v-model="messageText"></textarea>
        <button class="art-concrete-view-button button" @click="send()">
          {{ sendButton[lang] }}
        </button>
      </div>
    </div>


    <div v-if="this.allOff == true">
      <ArtAllOffersComponent :title='this.art.data[this.lang].title'></ArtAllOffersComponent>
    </div>

    <AppGallery :id='this.id'></AppGallery>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import SingleArtComponent from '../components/single-art-component'
import ArtAllOffersComponent from '../components/art-all-offers-component'
import AppGallery from '../components/gallery'
import AppFooter from '../components/footer'
import AllArts from '../data/arts.js'

export default {
  name: 'ArtConcreteView',
  components: {
    AppHeader,
    SingleArtComponent,
    ArtAllOffersComponent,
    AppGallery,
    AppFooter,
  },
  props: {
    id: {
      type: String,
      default: 1
    },
  },
  data() {
    return {
      lang: 0,
      arts: [],
      art: {},
      allOff: false,
      viewAll: ['Pogledaj sve ponude i poruke', 'View all offers and messages'],
      offerButton: ['Ponudi', 'Offer'],
      sendButton: ['Posalji', 'Send'],
      enterOffer: ['Unesite svoju ponudu', 'Enter your offer'],
      enterMessage: ['Unesite svoju poruku', 'Enter your message'],
      messageText: '',
      offerText: '',
    }
  },
  created() {
    if (localStorage.getItem('lang') == null) {
      localStorage.setItem('lang', 0);
    }
    this.lang = JSON.parse(localStorage.getItem('lang'))

    if (localStorage.getItem('arts') == null)
      localStorage.setItem('arts', JSON.stringify(AllArts))

    this.arts = AllArts

    this.art = this.arts.find(art => art.id == this.id);

  },
  methods: {
    view() {
      this.allOff = !this.allOff;

    },
    offer() {
      const user = JSON.parse(localStorage.getItem("user"));

      // Check if the user is logged in
      if (user !== null) {

        // Create the offer object
        let oferi=JSON.parse(localStorage.getItem('offers'))
        if(oferi==null){
          oferi=1
        
        }
        else{
          oferi=oferi.length+1
        }
        const offer = {
          id:oferi ,
          image_src: this.art.image_src,
          type: 0,
          data: [
            {
              title: this.art.data[0].title,
              author: this.art.data[0].author,
              user: user.name,
              description: this.offerText
            },
            {
              title: this.art.data[1].title,
              author: this.art.data[1].author,
              user: user.name,
              description: this.offerText
            },
          ]
        };

        // Get existing offers from localStorage
        const offers = JSON.parse(localStorage.getItem("offers")) || [];

        // Add the new offer to the array
        offers.push(offer);

        // Update the offers in localStorage
        localStorage.setItem("offers", JSON.stringify(offers));
        this.offerText=''
        if(this.lang==0){
          alert('Ponuda poslata')
        }
        else{
          alert('Offer sent')
        }
        location.reload();

      }
      else {
        this.$router.push('/login-view')

      }
    },
    send() {
      const user = JSON.parse(localStorage.getItem("user"));

      // Check if the user is logged in
      if (user !== null) {

        // Create the offer object
        let oferi=JSON.parse(localStorage.getItem('offers'))
        if(oferi==null){
          oferi=1
        
        }
        else{
          oferi=oferi.length+1
        }
        const offer = {
          id:oferi,
          image_src: this.art.image_src,
          type: 1,
          data: [
            {
              title: this.art.data[0].title,
              author: this.art.data[0].author,
              user: user.name,
              description: this.messageText
            },
            {
              title: this.art.data[1].title,
              author: this.art.data[1].author,
              user: user.name,
              description: this.messageText
            },
          ]
        };

        // Get existing offers from localStorage
        const offers = JSON.parse(localStorage.getItem("offers")) || [];

        // Add the new offer to the array
        offers.push(offer);

        // Update the offers in localStorage
        localStorage.setItem("offers", JSON.stringify(offers));
        this.messageText=''
        if(this.lang==0){
          alert('Poruka poslata')
        }
        else{
          alert('Message sent')
        }
        location.reload();

      }
      else {
        this.$router.push('/login-view')

      }
    }
  }
}
</script>

<style scoped>
.art-concrete-view-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.art-concrete-view-text14 {
  text-align: center;
  padding-left: 48px;
  padding-right: 48px;
}

.art-concrete-view-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.art-concrete-view-text08 {
  text-align: center;
  padding-left: 48px;
  padding-right: 48px;
}

.art-concrete-view-button {
  transition: 0.3s;
  margin: 16px;
  margin-top: 0px;
  padding: 12px;
  color: #ffffff;

  align-self: center;
  font-style: normal;
  font-weight: 600;
  background-color: #303030;
  border-radius: 8px;
}

.art-concrete-view-button:hover {
  transform: scale(1.02);
}

.art-concrete-view-textarea {
  width: 100%;
  margin: 24px;
  max-width: 100%;
  min-width: auto;
  border: 1px solid #303030;
  border-radius: 8px;
}

.offers-and-messages {
  width: 100%;
  display: flex;
  position: relative;
  min-height: 80vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.art-concrete-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
