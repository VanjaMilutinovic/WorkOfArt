<template>
  <header data-role="Header" class="header-header" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="header-image" />
    <div class="header-separator"></div>

    <div class="header-container1">
      <nav class="header-nav1">
        <navigation-links-component v-if="renderComponent"
          rootClassName="rootClassName19"
        ></navigation-links-component>
      </nav>
      <button type="button" class="header-button button"
              @click="changeLang()">{{ this.button }}</button>
    </div>
     
  </header>

</template>

<script>
import NavigationLinksComponent from './navigation-links-component'

export default {
  name: 'Header',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'ENG',
    },
    image_alt: {
      type: String,
      default: 'logo',
    },
    image_src: {
      type: String,
      default: '/new%20project-1500h.png',
    },
  },
  components: {
    NavigationLinksComponent,
  },
  data(){
    return{
      button: (localStorage.getItem("lang")==0)?"ENG":"SRB",
      renderComponent: true,
    }
  },
  methods: {
    changeLang(){
      if (this.button == 'ENG'){
        this.button = 'SRB'
        localStorage.setItem("lang", 1);
      }
      else{
        this.button = 'ENG'     
        localStorage.setItem("lang", 0);
      }
      this.forceRerender();
      window.location.reload();
    },
    async forceRerender() {
      // Remove MyComponent from the DOM
      this.renderComponent = false;

			// Wait for the change to get flushed to the DOM
      await this.$nextTick();

      // Add the component back in
      this.renderComponent = true;
    }
  }
}
</script>

<style scoped>
.header-header {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  flex-direction: column;
  padding-bottom: 32px;
  background-color: #edc0f1;
}
.header-image {
  max-width: 90%;
}
.header-separator {
  width: 100%;
  height: 1px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: #303030;
}

.header-container1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.header-nav1 {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.header-button {
  color: #ffffff;
  width: 80px;
  height: 36px;
  align-self: flex-end;
  font-style: normal;
  margin-top: 0px;
  font-weight: 600;
  margin-left: 24px;
  padding-top: 4px;
  margin-right: 24px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 4px;
  background-color: #303030;
  border-radius: 8px;
}

@media(max-width: 767px) {
  .header-header {
    padding-left: 32px;
    padding-right: 32px;
  }
  .header-separator {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .header-nav1 {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .header-header {
    padding: 16px;
  }
  .header-separator {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  
}
</style>
