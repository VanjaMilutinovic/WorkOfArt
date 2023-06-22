<template>
  <div
    class="testimonial-vertical-component-testimonial-card"
    v-bind:class="rootClassName"
  >
    <svg viewBox="0 0 1024 1024" class="testimonial-vertical-component-icon">
      <path
        d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
      ></path>
    </svg>
    <span class="testimonial-vertical-component-text">{{ quote }}</span>
    <div class="testimonial-vertical-component-profile">
      <img
        :alt="picture_alt"
        :src="picture_src"
        class="testimonial-vertical-component-image"
      />
      <div class="testimonial-vertical-component-container">
        <span class="testimonial-vertical-component-text1">{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialVerticalComponent',
  props: {
    quote: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.',
    },
    rootClassName: String,
    picture_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
    },
    picture_alt: {
      type: String,
      default: 'John Doe',
    },
    name: {
      type: String,
      default: 'John Doe',
    },
  },
}
</script>

<style scoped>
.testimonial-vertical-component-testimonial-card {
  width: 100%;
  display: flex;
  padding: 32px;
  max-width: 1440px;
  align-self: stretch;
  background: #fff;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  align-items: stretch;
  flex-direction: column;
  justify-content: flex-start;
}
.testimonial-vertical-component-icon {
  width: 96px;
  flex-shrink: 0;
  margin-bottom: 4px;
}
.testimonial-vertical-component-text {
  color: #595959;
  font-size: 1.15rem;
  padding-top: 48px;
  padding-bottom: 48px;
}
.testimonial-vertical-component-profile {
  width: 100%;
  display: flex;
  margin-top: auto;
  align-items: center;
  padding-top: 16px;
  flex-direction: row;
  justify-content: flex-start;
}
.testimonial-vertical-component-image {
  width: 96px;
  filter: grayscale();
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
}
.testimonial-vertical-component-container {
  display: flex;
  align-items: flex-start;
  margin-left: 16px;
  flex-direction: column;
  justify-content: space-between;
}
.testimonial-vertical-component-text1 {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

@media(max-width: 991px) {
  .testimonial-vertical-component-icon {
    height: 96px;
  }
  .testimonial-vertical-component-profile {
    padding-left: 4px;
    padding-right: 4px;
  }
  .testimonial-vertical-component-image {
    margin-left: 0px;
  }
}
@media(max-width: 479px) {
  .testimonial-vertical-component-testimonial-card {
    padding-left: 16px;
    padding-right: 16px;
  }
  .testimonial-vertical-component-profile {
    justify-content: center;
  }
}
</style>
