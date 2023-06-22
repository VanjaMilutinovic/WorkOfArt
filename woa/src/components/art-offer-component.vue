<template>
  <div class="art-offer-component-blog-post-card" v-bind:class="rootClassName">
    <img
      :alt="image_alt"
      :src="image_src"
      image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
      class="art-offer-component-image"
    />
    <div class="art-offer-component-container">
      <h1 class="art-offer-component-text">{{ description }}</h1>
      <span class="art-offer-component-text1">{{ by }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtOfferComponent',
  props: {
    by: {
      type: String,
      default: 'Milica',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
    },
    rootClassName: String,
    description: {
      type: String,
      default: '500$',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.art-offer-component-blog-post-card {
  width: 100%;
  display: flex;
  max-width: 100%;
  box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: row;
  justify-content: flex-start;
}
.art-offer-component-blog-post-card:hover {
  transform: scale(1.02);
}
.art-offer-component-image {
  width: 350px;
  height: 350px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0px;
}
.art-offer-component-container {
  display: flex;
  align-items: flex-start;
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  flex-direction: column;
  padding-bottom: 32px;
  justify-content: space-between;
}
.art-offer-component-text {
  align-self: flex-start;
  margin-bottom: 32px;
}
.art-offer-component-text1 {
  color: #595959;
  font-size: 1.25rem;
  margin-bottom: 32px;
}




@media(max-width: 991px) {
  .art-offer-component-blog-post-card {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media(max-width: 767px) {
  .art-offer-component-blog-post-card {
    flex-direction: column;
  }
  .art-offer-component-image {
    width: 100%;
  }
}
</style>
