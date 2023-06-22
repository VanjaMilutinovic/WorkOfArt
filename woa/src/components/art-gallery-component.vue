<template>
  <div class="art-gallery-component-gallery-card" v-bind:class="rootClassName">
    <div class="art-gallery-component-container"></div>
    <img :alt="image_alt" :src="image_src" class="art-gallery-component-image" />
  </div>
</template>

<script>
export default {
  name: 'ArtGalleryComponent',
  props: {
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      default: 'Project Title',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000',
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  },
}
</script>

<style scoped>
.art-gallery-component-gallery-card {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.art-gallery-component-container {
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100%;
  display: flex;
  opacity: 0;
  z-index: 1;
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background-color: #00000096;
}
.art-gallery-component-container:hover {
  opacity: 1;
}
.art-gallery-component-image {
  top: 0px;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: auto;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.art-gallery-component-root-class-name {
  flex: 1;
}


.art-gallery-component-root-class-name4 {
  flex: 1;
  height: 100%;
}

@media(max-width: 767px) {
  .art-gallery-component-gallery-card {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .art-gallery-component-container {
    max-width: auto;
  }
  .art-gallery-component-image {
    top: 0px;
    left: 0px;
    right: auto;
    bottom: auto;
  }
}
</style>
