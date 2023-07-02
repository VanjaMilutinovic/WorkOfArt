<template>
  <footer class="footer-footer" v-bind:class="rootClassName">
    <img :alt="image_alt" :src="image_src" class="footer-image" />
    <div class="footer-text">{{ text }}</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    image_alt: {
      type: String,
      default: 'logo',
    },
    image_src: {
      type: String,
      default: '/new%20project-1500h.png',
    },
    text: {
      type: String,
      default: `Copyright 2023, Милица Бањац и Наталија Богдановић, 
                Одсек за софтверско инжењерство Електротехничког факултета
                Универзитета у Београду`,
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
  justify-content: space-between;
  background-color: #edc0f1;
}
.footer-image {
  height: 2rem;
  object-fit: cover;
}
.footer-text {
  color: #303030;
  width: 75%;
  justify-self: end;
}
.footer-root-class-name {
  left: 0px;
  bottom: 0px;
  position: static;
}
.footer-root-class-name1 {
  left: 0px;
  bottom: 0px;
  position: static;
}
.footer-root-class-name2 {
  left: 0px;
  bottom: 0px;
  position: static;
}

.footer-root-class-name6 {
  left: 0px;
  bottom: 0px;
  position: static;
}
.footer-root-class-name7 {
  left: 0px;
  bottom: 0px;
  position: static;
}
@media(max-width: 767px) {
  .footer-footer {
    padding-left: 32px;
    padding-right: 32px;
  }
  .footer-text {
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
  }
}
@media(max-width: 479px) {
  .footer-footer {
    padding: 16px;
    flex-direction: column;
  }
  .footer-image {
    margin-bottom: 16px;
  }
  .footer-text {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 16px;
  }
}
</style>
