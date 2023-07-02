<template>
  <div class="art-type-component-testimonial-card" v-bind:class="rootClassName">
    <div class="art-type-component-testimonial">
      <span class="art-type-component-text">{{ type }}</span>
      <img
        :alt="picture_alt"
        :src="picture_src"
        class="art-type-component-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtTypeComponent',
  props: {
    type: {
      type: String,
      default: 'SLIKE',
    },
    rootClassName: String,
    picture_alt: {
      type: String,
      default: 'profile',
    },
    picture_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=300',
    },
    quote: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
    },
    name: {
      type: String,
      default: 'Jane Doe',
    },
  },
}
</script>

<style scoped>
.art-type-component-testimonial-card {
  display: flex;
  padding: 16px;
  max-width: 100%;
  background: #fff;
  box-shadow: 15px 15px 20px 0px rgba(18, 18, 18, 0.1);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.art-type-component-testimonial {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.art-type-component-text {
  color: #595959;
  font-weight: 600;
  margin-bottom: 16px;
  text-transform: uppercase;
}
.art-type-component-image {
  width: 288px;
  height: 288px;
  object-fit: cover;
  border-radius: 50%;
}



@media(max-width: 991px) {
  .art-type-component-text {
    align-self: center;
  }
}
@media(max-width: 767px) {
  .art-type-component-testimonial-card {
    padding-left: 32px;
    padding-right: 32px;
  }
}
@media(max-width: 479px) {
  .art-type-component-testimonial-card {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .art-type-component-text {
    margin-bottom: 16px;
  }
}
</style>
