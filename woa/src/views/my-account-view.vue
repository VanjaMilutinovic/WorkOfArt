<template>
  <div class="my-account-view-container">
    <app-header rootClassName="header-root-class-name6"></app-header>
    <button type="button" class="my-account-view-button button"
          @click="logout()">
      {{content.button[lang]}}
    </button>
    <h1>{{ content.text[lang] }} {{this.user.name}}!</h1>
    <span class="my-account-view-text1">{{ content.text1[lang] }}</span>
  
    <all-my-offers-component
    :lang=lang
    :user=user
      rootClassName="all-my-offers-component-root-class-name"
    ></all-my-offers-component>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AllMyOffersComponent from '../components/all-my-offers-component'
import AppFooter from '../components/footer'

export default {
  name: 'MyAccountView',
  components: {
    AppHeader,
    AllMyOffersComponent,
    AppFooter,
  },
  data(){
    return{
      lang: 0,
      user: {},
      content: {
        text: ['Zdravo, ', 'Hello, '],
        text1: ['Dobrodošli na našu veb galeriju, gde umetnost oživljava. Otkrijte raznoliku kolekciju fascinantnih umetničkih dela koja prikazuju talenat i kreativnost priznatih umetnika iz celog sveta. Prepustite se vizuelnom putovanju koje slavi lepotu i snagu umetničkog izraza.', 
        'Welcome to our gallery website, where art comes to life. Discover a diverse collection of captivating artworks, showcasing the talent and creativity of renowned artists from around the world. Immerse yourself in a visual journey that celebrates the beauty and power of artistic expression.'],
        button: ['Izloguj se', 'Log out']
      }
    }
  },
  created(){
    this.lang = localStorage.getItem('lang') || 0;
    if(localStorage.getItem('user')==null){
      this.$router.push('/login-view')
      return;
    }
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  methods:{
    logout(){
      localStorage.removeItem('user')
      this.$router.push('/login-view')
    }
  }
  
}
</script>

<style scoped>
.my-account-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.my-account-view-button {
  transition: 0.3s;
  margin: 16px;
  padding: 12px;
  color: #ffffff;
  margin-left: 48px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 600;
  background-color: #303030;
  border-radius: 8px;
}
.my-account-view-text1 {
  margin-top: 16px;
  margin-left: 96px;
  margin-right: 96px;
  margin-bottom: 16px;
}
</style>
