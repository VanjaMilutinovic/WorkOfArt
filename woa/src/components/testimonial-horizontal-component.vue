<template>
  <div
    class="testimonial-horizontal-component-testimonial-card"
    v-bind:class="rootClassName"
  >
    <div class="testimonial-horizontal-component-testimonial">
      <svg viewBox="0 0 1024 1024" class="testimonial-horizontal-component-icon">
        <path
          d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
        ></path>
      </svg>
      <span class="testimonial-horizontal-component-text">{{ quote }}</span>
      <span class="testimonial-horizontal-component-text1">{{ name }}</span>
    </div>
    <img
      :alt="profile_alt"
      :src="profile_src"
      class="testimonial-horizontal-component-image"
    />
  </div>
</template>

<script>
export default {
  name: 'TestimonialHorizontalComponent',
  props: {
    rootClassName: String,
    quote: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
    },
    name: {
      type: String,
      default: 'John Doe',
    },
    profile_alt: {
      type: String,
      default: 'profile',
    },
    profile_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
    },
  },
}
</script>

<style scoped>
.testimonial-horizontal-component-testimonial-card {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1440px;
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  align-items: center;
  justify-content: space-between;
}
.testimonial-horizontal-component-testimonial {
  display: flex;
  align-items: flex-start;
  margin-right: 48px;
  flex-direction: column;
  justify-content: space-between;
}
.testimonial-horizontal-component-icon {
  width: 48px;
  flex-shrink: 0;
  margin-bottom: 32px;
}
.testimonial-horizontal-component-text {
  color: #595959;
  font-size: 1.15rem;
  margin-bottom: 32px;
}
.testimonial-horizontal-component-text1 {
  font-size: 1.5rem;
  font-weight: 600;
}
.testimonial-horizontal-component-image {
  width: 192px;
  height: 192px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 50%;
}
.testimonial-horizontal-component-root-class-name1 {
  align-self: flex-start;
}
.testimonial-horizontal-component-root-class-name2 {
  align-self: flex-start;
}
@media(max-width: 767px) {
  .testimonial-horizontal-component-testimonial-card {
    padding-left: 32px;
    padding-right: 32px;
  }
  .testimonial-horizontal-component-testimonial {
    margin-right: 32px;
  }
  .testimonial-horizontal-component-icon {
    height: 48px;
  }
}
@media(max-width: 479px) {
  .testimonial-horizontal-component-testimonial-card {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: column;
    padding-bottom: 32px;
  }
  .testimonial-horizontal-component-testimonial {
    align-items: center;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .testimonial-horizontal-component-text {
    text-align: left;
  }
}
</style>
