<template>
  <div class="registration-view-container">
    <app-header rootClassName="header-root-class-name7"></app-header>
    <registration-component
      rootClassName="registration-component-root-class-name"
      textinput_placeholder="ex. Milica"
    ></registration-component>
    <app-footer rootClassName="footer-root-class-name7"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import RegistrationComponent from '../components/registration-component'
import AppFooter from '../components/footer'

export default {
  name: 'RegistrationView',
  components: {
    AppHeader,
    RegistrationComponent,
    AppFooter,
  },
  metaInfo: {
    title: 'RegistrationView - Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'RegistrationView - Work Of Art',
      },
    ],
  },
}
</script>

<style scoped>
.registration-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
