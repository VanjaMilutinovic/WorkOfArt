<template>
  <div class="login-component-login-component">
    <h1 class="login-component-text">{{ content.heading[lang] }}</h1>
    <span class="login-component-text1">{{ content.text[lang] }}</span>
    <input type="text" :placeholder="textinput_placeholder" class="login-component-textinput input" name="username"
      v-model="username" />
    <span class="login-component-text1">{{ content.text1[lang] }}</span>
    <input type="text" :placeholder="textinput_placeholder1" class=" login-component-textinput input" name="password"
      v-model="password" />
    <button type="button" class="login-component-button button" @click="login()">
      {{ content.button[lang] }}
    </button>
    <router-link to="/registration-view" class="login-component-navlink">
      <span>
        {{ content.noAcc[lang] }}
      </span>
      <span class="login-component-text4">{{ content.register[lang] }}</span>
    </router-link>
  </div>
</template>

<script>
import AllUsers from '../data/users.js'
export default {
  name: 'LoginComponent',
  props: {
    textinput_placeholder: {
      type: String,
      default: 'ex. mica',
    },
    textinput_placeholder1: {
      type: String,
      default: '******',
    },
  },
  data() {
    return {
      username: '',
      password: '',
      content: {
        text: ['Korisnicko ime', 'Username'],
        text1: ['Lozinka', 'Password'],
        heading: ['Logovanje', 'Login'],
        button: ['Uloguj se', 'Log in'],
        noAcc: ['Nemas nalog? ', 'Dont have an account? '],
        register: ['Registruj se!', 'Register!']
      },
      lang: 0,
      users: []
    }
  },
  created() {
    this.lang = localStorage.getItem('lang') || 0;
    if (localStorage.getItem('users') == null) {
      localStorage.setItem('users', JSON.stringify(AllUsers))
      this.users = AllUsers
    }
    else
      this.users = JSON.parse(localStorage.getItem('users'))

  },
  methods: {
    login() {
      if (this.username && this.password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.username === this.username);
        if (!user) {
          if(this.lang==0){
            alert('Korisnik ne postoji');
          }
          else{
            alert('User does not exist');
          }
          return;
        }

        if (user.password !== this.password) {
          if(this.lang==0){
            alert('Pogresna lozinka');
          }
          else{
            alert('Wrong password');
          }
          return;
        }

        localStorage.setItem('user', JSON.stringify(user));
        this.$router.push('/my-account-view');
      } 
      else{
        if(this.lang==0)
          alert('Morate popuniti sva polja');
        else
          alert('You must fill all fields');
      }
    }
  }
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
