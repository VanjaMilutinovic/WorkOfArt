<template>
  <div class="my-account-view-container">
    <app-header rootClassName="header-root-class-name6"></app-header>
    <button type="button" class="my-account-view-button button">
      Izloguj se
    </button>
    <h1>Zdravo, Milice!</h1>
    <span class="my-account-view-text1">Ne bi bilo lose neki tekstic ovde</span>
    <all-my-offers-component
      rootClassName="all-my-offers-component-root-class-name"
    ></all-my-offers-component>
    <app-footer rootClassName="footer-root-class-name6"></app-footer>
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
  metaInfo: {
    title: 'MyAccountView - Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'MyAccountView - Work Of Art',
      },
    ],
  },
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
