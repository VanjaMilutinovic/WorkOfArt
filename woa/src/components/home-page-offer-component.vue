<template>
  <div
    class="home-page-offer-component-blog-post-card"
    v-bind:class="rootClassName"
  >
    <img
      :alt="image_alt"
      :src="image_src"
      class="home-page-offer-component-image"
    />
    <div class="home-page-offer-component-container">
      <span class="home-page-offer-component-text">{{ author }}</span>
      <h1 class="home-page-offer-component-text1">{{ title }}</h1>
      <div class="home-page-offer-component-container1">
        <span class="home-page-offer-component-text2">{{ description }}</span>
      </div>
      <span class="home-page-offer-component-text3">{{ user }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageOfferComponent',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    user: {
      type: String,
      default: 'Milica',
    },
    author: {
      type: String,
      default: 'Van Gogh',
    },
    image_src: {
      type: String,
      default: '/1/0.jpg'
    },
    rootClassName: String,
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet',
    },
    description: {
      type: String,
      default: '500$',
    },
  },
}
</script>

<style scoped>
.home-page-offer-component-blog-post-card {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.home-page-offer-component-image {
  max-width: 80%;
  object-fit: cover;
  max-height: 350px;
}
.home-page-offer-component-container {
  flex: 1;
  display: flex;
  padding: 32px;
  padding-bottom: 0px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-page-offer-component-text {
  color: #595959;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
}
.home-page-offer-component-text1 {
  margin-bottom: 12px;
}
.home-page-offer-component-container1 {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-direction: column;
  justify-content: flex-start;
}
.home-page-offer-component-text2 {
  color: #595959;
  margin-bottom: 4px;
}
.home-page-offer-component-text3 {
  color: #595959;
  font-weight: 400;
}



@media(max-width: 991px) {
  .home-page-offer-component-image {
    width: 50%;
  }
}
@media(max-width: 767px) {
  .home-page-offer-component-blog-post-card {
    flex-direction: column;
    justify-content: space-between;
  }
  .home-page-offer-component-image {
    width: 100%;
  }
  .home-page-offer-component-container {
    width: 100%;
  }
  .home-page-offer-component-text {
    margin-bottom: 16px;
  }
  .home-page-offer-component-text1 {
    margin-bottom: 32px;
  }
  .home-page-offer-component-container1 {
    margin-bottom: 32px;
  }
}
</style>
