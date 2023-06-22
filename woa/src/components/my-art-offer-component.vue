<template>
  <div class="my-art-offer-component-blog-post-card" v-bind:class="rootClassName">
    <img
      :alt="image_alt"
      :src="image_src"
      image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
      class="my-art-offer-component-image"
    />
    <div class="my-art-offer-component-container">
      <div class="my-art-offer-component-container1">
        <h1 class="my-art-offer-component-text">{{ description }}</h1>
        <span class="my-art-offer-component-text1">{{ by }}</span>
      </div>
      <button type="button" class="my-art-offer-component-button button">
        {{ deleted }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyArtOfferComponent',
  props: {
    deleted: {
      type: String,
      default: 'Obrisi',
    },
    by: {
      type: String,
      default: 'Milica',
    },
    description: {
      type: String,
      default: '500$',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1500',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.my-art-offer-component-blog-post-card {
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 100%;
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  max-height: 100%;
  min-height: 100%;
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.my-art-offer-component-blog-post-card:hover {
  transform: scale(1.02);
}
.my-art-offer-component-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.my-art-offer-component-container {
  height: 100%;
  display: flex;
  padding: 32px;
  align-self: stretch;
  max-height: 100%;
  min-height: 100%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.my-art-offer-component-container1 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.my-art-offer-component-text {
  align-self: flex-start;
  margin-bottom: 32px;
}
.my-art-offer-component-text1 {
  color: #595959;
  font-size: 1.25rem;
  margin-bottom: 0px;
}
.my-art-offer-component-button {
  transition: 0.3s;
  margin-top: 48px;
  padding: 12px;
  color: #ffffff;
  
  align-self: flex-start;
  font-style: normal;
  font-weight: 600;
  background-color: #303030;
  border-radius: 8px;
}


@media(max-width: 991px) {
  .my-art-offer-component-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
  .my-art-offer-component-container {
    flex-direction: row;
  }
}
@media(max-width: 767px) {
  .my-art-offer-component-blog-post-card {
    flex-direction: column;
  }
  .my-art-offer-component-image {
    width: 100%;
  }
}
</style>
