<template>
  <div class="single-art-component-single-art-component">
    <img :alt="image_alt" :src="image_src" class="single-art-component-image" />
    <div class="single-art-component-container centered">
      <h1 class="single-art-component-text">{{ name }}</h1>
      <h3 class="single-art-component-text01">{{ author }}</h3>
      <span class="single-art-component-text02">
        <br />
        <span>
          {{img_desc}}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleArtComponent',
  props: {
    img_desc: {
      type: String,
      default: `The Mona Lisa, created by the renowned artist Leonardo da Vinci, 
            is an iconic masterpiece that captivates viewers with its enigmatic smile and subtle charm. 
            This timeless portrait, known for its impeccable technique and mysterious allure,
             continues to intrigue and inspire art enthusiasts around the world.`
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwcGxhbnR8ZW58MHx8fHwxNjI2MTgyODMw&ixlib=rb-1.2.1&w=1200',
    },
    name: {
      type: String,
      default: 'Zvezdana noc',
    },
    author: {
      type: String,
      default: 'Van Gogh',
    },
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.centered{
  justify-content: center;
  align-items: center;
}
.single-art-component-single-art-component {
  width: 100%;
  display: flex;
  padding: 48px;
  padding-bottom: 0px;
  position: relative;
  min-height: 80vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.single-art-component-image {
  width: 45rem;
  margin-top: 32px;
}
.single-art-component-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.single-art-component-text {
  font-size: 3rem;
}
.single-art-component-text01 {
  color: #303030;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
}
.single-art-component-text02 {
  margin-top: 32px;
  text-align: center;
  padding-left: 48px;
  margin-bottom: 32px;
  padding-right: 48px;
}



@media(max-width: 991px) {
  .single-art-component-single-art-component {
    flex-direction: column;
  }
  .single-art-component-image {
    width: 80%;
  }
  .single-art-component-container {
    align-items: center;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .single-art-component-text {
    text-align: center;
  }
  .single-art-component-text01 {
    text-align: center;
  }
  .single-art-component-text02 {
    text-align: center;
  }
  .single-art-component-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .single-art-component-text08 {
    text-align: center;
  }
  .single-art-component-container2 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: 16px;
  }
  .single-art-component-text14 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .single-art-component-single-art-component {
    padding-left: 32px;
    padding-right: 32px;
  }
  .single-art-component-text02 {
    padding-left: 16px;
    padding-right: 16px;
  }
  .single-art-component-text08 {
    padding-left: 16px;
    padding-right: 16px;
  }
  .single-art-component-text14 {
    padding-left: 16px;
    padding-right: 16px;
  }
}
@media(max-width: 479px) {
  .single-art-component-single-art-component {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
  .single-art-component-container {
    margin-bottom: 16px;
  }
  .single-art-component-button {
    margin-top: 16px;
    margin-left: 0px;
  }
  .single-art-component-container1 {
    margin-bottom: 16px;
  }
  .single-art-component-button1 {
    margin-top: 16px;
    margin-left: 0px;
  }
  .single-art-component-container2 {
    margin-bottom: 16px;
  }
  .single-art-component-button2 {
    margin-top: 16px;
    margin-left: 0px;
  }
}
</style>
