<template>
  <div class="login-view-container">
    <app-header></app-header>
    <login-component></login-component>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LoginComponent from '../components/login-component'
import AppFooter from '../components/footer'

export default {
  name: 'LoginView',
  components: {
    AppHeader,
    LoginComponent,
    AppFooter,
  },
  metaInfo: {
    title: 'LoginView - Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'LoginView - Work Of Art',
      },
    ],
  },
}
</script>

<style scoped>
.login-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
