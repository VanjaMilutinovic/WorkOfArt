<template>
  <nav class="navigation-links-component-nav" v-bind:class="rootClassName">
    <router-link to="/" class="navigation-links-component-navlink">
      {{ this.text[lang] }}
    </router-link>
    <router-link to="/atrist-view" class="navigation-links-component-navlink">
      {{ this.text1[lang] }}
    </router-link>
    <router-link to="/arts-view" class="navigation-links-component-navlink">
      {{ this.text2[lang] }}
    </router-link>
    <router-link
      to="/my-account-view"
      class="navigation-links-component-navlink"
    >
      {{ this.text3[lang] }}
    </router-link>
    <router-link to="/about-us-view" class="navigation-links-component-navlink">
      {{ this.text4[lang] }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinksComponent',
  data() {
    return{
      text: ['Početna', 'Home'],
      text1: ['Umetnici', 'Artists'],
      text2: ['Umetnine', 'Arts'],
      text3: ['Moj nalog', 'My account'],
      text4: ['O nama', 'About us'],
      lang: 0,
    }
    
  },
  created(){
    
    this.lang = localStorage.getItem("lang") || 0;
  }
  
}
</script>

<style scoped>
.navigation-links-component-nav {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
}
.navigation-links-component-navlink {
  color: #303030;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  margin-left: 4px;
  margin-right: 4px;
}

.navigation-links-component-root-class-name19 {
  margin-top: 4px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 4px;
}
@media(max-width: 767px) {
  .navigation-links-component-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-component-navlink {
    margin-bottom: 16px;
  }
  .navigation-links-component-navlink1 {
    margin-left: 0;
    margin-bottom: 16px;
  }
  .navigation-links-component-navlink2 {
    margin-left: 0;
    margin-bottom: 16px;
  }
  .navigation-links-component-navlink3 {
    margin-left: 0;
    margin-bottom: 16px;
  }
  .navigation-links-component-navlink4 {
    margin-left: 0;
    margin-bottom: 16px;
  }
}
</style>
