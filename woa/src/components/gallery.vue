<template>
  <div class="gallery-gallery" v-bind:class="rootClassName">
    <div class="gallery-container">
      <div class="gallery-container1">
        <div class="gallery-container2">
          <art-gallery-component
            rootClassName="rootClassName2"
          ></art-gallery-component>
        </div>
        <div class="gallery-container3">
          <art-gallery-component
            image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName3"
          ></art-gallery-component>
        </div>
      </div>
      <div class="gallery-container4">
        <art-gallery-component
          image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          rootClassName="rootClassName"
        ></art-gallery-component>
      </div>
    </div>
    <div class="gallery-container5">
      <art-gallery-component
        image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        rootClassName="rootClassName4"
      ></art-gallery-component>
    </div>
  </div>
</template>

<script>
import ArtGalleryComponent from './art-gallery-component'

export default {
  name: 'Gallery',
  props: {
    rootClassName: String,
  },
  components: {
    ArtGalleryComponent,
  },
}
</script>

<style scoped>
.gallery-gallery {
  width: 100%;
  height: 1000px;
  display: flex;
  position: relative;
  max-width: 1440px;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
}
.gallery-container {
  flex: 3;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.gallery-container1 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.gallery-container2 {
  flex: 1;
  height: 100%;
  display: flex;
  padding: 4px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery-container3 {
  flex: 1;
  height: 100%;
  display: flex;
  padding: 4px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.gallery-container4 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: 4px;
  align-items: flex-start;
  flex-direction: column;
}
.gallery-container5 {
  flex: 2;
  height: 100%;
  display: flex;
  padding: 4px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

@media(max-width: 991px) {
  .gallery-container5 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .gallery-gallery {
    padding-left: 32px;
    padding-right: 32px;
  }
  .gallery-container1 {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .gallery-gallery {
    padding: 16px;
    flex-direction: column;
  }
  .gallery-container {
    width: auto;
  }
}
</style>
