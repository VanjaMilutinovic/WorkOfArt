<template>
  <header
    data-role="Accordion"
    class="header-header"
    v-bind:class="rootClassName"
  >
    <img :alt="image_alt" :src="image_src" class="header-image" />
    <div class="header-separator"></div>
    <div class="header-container">
      <div data-role="AccordionHeader" class="header-accordion-header">
        <svg viewBox="0 0 1024 1024" class="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div data-role="AccordionContent" class="header-accordion-content">
        <div class="header-nav">
          <navigation-links-component
            rootClassName="rootClassName20"
          ></navigation-links-component>
        </div>
      </div>
      <div class="header-container1">
        <nav class="header-nav1">
          <navigation-links-component
            rootClassName="rootClassName19"
          ></navigation-links-component>
        </nav>
        <button type="button" class="header-button button">{{ button }}</button>
      </div>
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
}
</script>

<style scoped>
.header-header {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1440px;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  flex-direction: column;
  padding-bottom: 32px;
  background-color: #edc0f1;
}
.header-image {
  height: 2rem;
}
.header-separator {
  width: 100%;
  height: 1px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: #303030;
}
.header-container {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-accordion-header {
  display: none;
  align-items: center;
  flex-direction: column;
}
.header-icon {
  width: 15%;
  height: 15%;
  display: none;
}
.header-accordion-content {
  display: none;
  overflow: hidden;
  max-height: 0;
  transition: 0.3s ease-in-out;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.header-nav {
  display: flex;
  align-items: center;
  flex-direction: column;
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
.header-root-class-name {
  top: 0px;
  left: 0px;
  position: static;
}
.header-root-class-name1 {
  top: 0px;
  left: 0px;
  position: static;
}
.header-root-class-name2 {
  top: 0px;
  left: 0px;
  position: static;
}
.header-root-class-name3 {
  top: 0px;
  left: 0px;
  position: static;
}
.header-root-class-name4 {
  position: 0px;
}

.header-root-class-name6 {
  top: 0px;
  left: 0px;
  position: static;
}

@media(max-width: 991px) {
  .header-container {
    justify-content: center;
  }
  .header-nav {
    padding-top: 16px;
  }
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
  .header-accordion-header {
    display: flex;
    align-items: flex-start;
  }
  .header-icon {
    width: 15%;
    height: 15%;
    display: flex;
  }
  .header-accordion-content {
    display: flex;
  }
  .header-nav1 {
    display: none;
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
  .header-container {
    height: 100%;
    align-self: center;
    align-items: stretch;
    justify-content: space-between;
  }
  .header-accordion-header {
    height: 100%;
    margin-top: 0px;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 0px;
  }
}
</style>
