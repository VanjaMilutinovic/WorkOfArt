<template>
  <div
    class="art-overview-card-component1-blog-post-card"
    v-bind:class="rootClassName"
  >
    <div class="art-overview-card-component1-container">
      <span class="art-overview-card-component1-text">{{ author1 }}</span>
      <h1 class="art-overview-card-component1-text1">{{ title }}</h1>
      <span class="art-overview-card-component1-text2">
        <span class="art-overview-card-component1-text3">{{ more[lang]}}</span>
        <br />
      </span>
    </div>
    <img
      :alt="image_alt"
      :src="image_src"
      class="art-overview-card-component1-image"
    />
  </div>
</template>

<script>
export default {
  name: 'ArtOverviewCardComponent1',
  props: {
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
    },
    author1: {
      type: String,
      default: 'Van Gogh',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    title: {
      type: String,
      default: 'Zvezdana noc',
    },
  },
  data(){
    return{
      lang: 0,
      more: ['Procitajte vise', 'Read more']
    }
  },
  created(){
    this.lang=localStorage.getItem('lang') || 0;
  }
}
</script>

<style scoped>
.art-overview-card-component1-blog-post-card {
  width: 100%;
  display: flex;
  max-width: auto;
  min-width: 100%;
  flex-direction: row;
  justify-content: flex-start;
}
.art-overview-card-component1-container {
  flex: auto;
  width: 100%;
  display: flex;
  padding: 32px;
  max-width: 100%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.art-overview-card-component1-text {
  color: #595959;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 24px;
  text-transform: uppercase;
}
.art-overview-card-component1-text1 {
  width: auto;
  max-width: 100%;
  align-self: flex-start;
  margin-bottom: 48px;
}
.art-overview-card-component1-text2 {
  color: var(--dl-color-gray-black);
  font-weight: 500;
}
.art-overview-card-component1-image {
  width: 500px;
  object-fit: cover;
}
.art-overview-card-component1-root-class-name1 {
  width: auto;
  max-width: 120%;
}
.art-overview-card-component1-root-class-name2 {
  max-width: 100%;
}
@media(max-width: 991px) {
  .art-overview-card-component1-image {
    width: 50%;
  }
}
@media(max-width: 767px) {
  .art-overview-card-component1-blog-post-card {
    flex-direction: column;
    justify-content: space-between;
  }
  .art-overview-card-component1-container {
    width: 100%;
  }
  .art-overview-card-component1-text {
    margin-bottom: 16px;
  }
  .art-overview-card-component1-text1 {
    margin-bottom: 32px;
  }
  .art-overview-card-component1-image {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .art-overview-card-component1-text2 {
    width: auto;
  }
  .art-overview-card-component1-text3 {
    width: auto;
  }
}
</style>
