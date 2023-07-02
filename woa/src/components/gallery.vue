<template>
  <div class="gallery-gallery" v-bind:class="rootClassName">
    <div class="gallery-container">
      <div class="gallery-container1">
        <div class="gallery-container2">
          <ArtGalleryComponent
            :image_src='this.img1'
          ></ArtGalleryComponent>
        </div>
        <div class="gallery-container3">
          <ArtGalleryComponent
            :image_src='this.img2'
          ></ArtGalleryComponent>
        </div>
      </div>
      <div class="gallery-container4">
        <ArtGalleryComponent
            :image_src='this.img3'
          ></ArtGalleryComponent>
      </div>
    </div>
    <div class="gallery-container5">
      <ArtGalleryComponent
            :image_src='this.img4'
          ></ArtGalleryComponent>
    </div>
  </div>
</template>

<script>
import ArtGalleryComponent from './art-gallery-component'

export default {
  name: 'Gallery',
  props: {
    rootClassName: String,
    id: {
      type: String,
      default: 1
    }
  },
  components: {
    ArtGalleryComponent,
  },
  data(){
    return{
      img1: '',
      img2: '',
      img3: '',
      img4: ''
    }
  },
  created(){
    this.img1 = '/' + this.id + '/0.jpg';
    this.img2 = '/' + this.id + '/1.jpg';
    this.img3 = '/' + this.id + '/2.jpg';
    this.img4 = '/' + this.id + '/3.jpg';
  }
}
</script>

<style scoped>
.gallery-gallery {
  width: 100%;
  height: 1000px;
  display: flex;
  position: relative;
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
