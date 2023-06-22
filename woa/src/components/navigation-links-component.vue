<template>
  <nav class="navigation-links-component-nav" v-bind:class="rootClassName">
    <router-link to="/" class="navigation-links-component-navlink">
      {{ text }}
    </router-link>
    <router-link to="/atrist-view" class="navigation-links-component-navlink">
      {{ text1 }}
    </router-link>
    <router-link to="/arts-view" class="navigation-links-component-navlink">
      {{ text2 }}
    </router-link>
    <router-link
      to="/my-account-view"
      class="navigation-links-component-navlink"
    >
      {{ text3 }}
    </router-link>
    <router-link to="/about-us-view" class="navigation-links-component-navlink">
      {{ text4 }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinksComponent',
  props: {
    text2: {
      type: String,
      default: 'Umetnine',
    },
    text1: {
      type: String,
      default: 'Umetnici',
    },
    text4: {
      type: String,
      default: 'O nama',
    },
    text3: {
      type: String,
      default: 'Moj nalog',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'Početna',
    },
  },
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
  margin-left: 24px;
  margin-right: 24px;
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
