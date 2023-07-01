<template>
  <div
    class="registration-component-login-component"
    v-bind:class="rootClassName"
  >
    <h1 class="registration-component-text1">{{ heading }}</h1>
    <span class="registration-component-text">{{ username }}</span>
    <input
      type="text"
      :placeholder="textinput_placeholder"
      class="registration-component-textinput input"
    />
    <span class="registration-component-text">{{ password }}</span>
    <input type="text" :placeholder="textinput_placeholder1" class="input registration-component-textinput" />
    <span class="registration-component-text">{{ repeatPassword }}</span>
    <input type="text" :placeholder="textinput_placeholder12" class="input registration-component-textinput" />
    <span class="registration-component-text">{{ name }}</span>
    <input type="text" :placeholder="textinput_placeholder11" class="input registration-component-textinput" />
    <button type="button" class="registration-component-button button">
      {{ button }}
    </button>
    <router-link to="/login-view" class="registration-component-navlink">
      <span class="registration-component-text">
        Vec imas nalog?
      </span>
      <span class="registration-component-text6">Uloguj se!</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RegistrationComponent',
  props: {
    textinput_placeholder1: {
      type: String,
      default: '******',
    },
    password: {
      type: String,
      default: 'Lozinka',
    },
    button: {
      type: String,
      default: 'Uloguj se\n',
    },
    textinput_placeholder: {
      type: String,
      default: 'ex. vanjy',
    },
    rootClassName: String,
    repeatPassword: {
      type: String,
      default: 'Ponovljena lozinka',
    },
    textinput_placeholder11: {
      type: String,
      default: '******',
    },
    heading: {
      type: String,
      default: 'Registracija',
    },
    name: {
      type: String,
      default: 'Ime i prezime',
    },
    textinput_placeholder12: {
      type: String,
      default: '******',
    },
    username: {
      type: String,
      default: 'Korisnicno ime\n',
    },
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
.registration-component-login-component {
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
.registration-component-text {
  margin-top: 24px;
  color: rgb(48, 48, 48);
  align-self: flex-start;
}
.registration-component-text1 {
  color: rgb(48, 48, 48);
  align-self: center;
  margin-bottom: 16px;
}
.registration-component-textinput {
  width: 100%;
  padding: 8px;
  border: 1px solid #303030;
  border-radius: 8px;
}
.registration-component-button {
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
.registration-component-navlink {
  align-self: center;
  text-align: center;
}

.registration-component-text6 {
  text-decoration: underline;
}

</style>
