<template>
  <div class="login-component-login-component">
    <h1 class="login-component-text">{{ heading }}</h1>
    <span class="login-component-text1">{{ text }}</span>
    <input
      type="text"
      :placeholder="textinput_placeholder"
      class="login-component-textinput input"
    />
    <span class="login-component-text1">{{ text1 }}</span>
    <input type="text" :placeholder="textinput_placeholder1" class=" login-component-textinput input" />
    <button type="button" class="login-component-button button">
      {{ button }}
    </button>
    <router-link to="/registration-view" class="login-component-navlink">
      <span>
        Nemas nalog?
        <span v-html="rawtl8w"></span>
      </span>
      <span class="login-component-text4">Registruj se!</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  props: {
    textinput_placeholder: {
      type: String,
      default: 'ex. vanjy',
    },
    text: {
      type: String,
      default: 'Korisnicno ime\n',
    },
    text1: {
      type: String,
      default: 'Lozinka',
    },
    button: {
      type: String,
      default: 'Uloguj se\n',
    },
    heading: {
      type: String,
      default: 'Logovanje',
    },
    textinput_placeholder1: {
      type: String,
      default: '******',
    },
  },
  data() {
    return {
      rawtl8w: ' ',
    }
  },
}
</script>

<style scoped>
.login-component-login-component {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  margin: 48px;
  display: flex;
  padding: 48px;
  position: relative;
  align-items: flex-start;
  border-radius: 8px;
  flex-direction: column;
  background-color: #edc0f1;
}
.login-component-text {
  color: rgb(48, 48, 48);
  align-self: center;
  margin-bottom: 16px;
}
.login-component-textinput {
  width: 100%;
  padding: 8px;
  border: 1px solid #303030;
  border-radius: 8px;
}
.login-component-text1 {
  margin-top: 24px;
  color: rgb(48, 48, 48);
  align-self: flex-start;
}
.login-component-button {
  transition: 0.3s;
  margin: 16px;
  padding: 8px;
  color: #ffffff;
  align-self: center;
  font-style: normal;
  font-weight: 600;
  background-color: #303030;
  border-radius: 8px;
}
.login-component-navlink {
  align-self: center;
  text-align: center;
  text-decoration: none;
}
.login-component-text4 {
  text-decoration: underline;
}
</style>
