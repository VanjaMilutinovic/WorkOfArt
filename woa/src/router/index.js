import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'
import AtristView from '../views/atrist-view'
import RegistrationView from '../views/registration-view'
import LoginView from '../views/login-view'
import ArtOverviewView from '../views/art-overview-view'
import AboutUsView from '../views/about-us-view'
import MyAccountView from '../views/my-account-view'
import ArtConcreteView from '../views/art-concrete-view'
import ArtsView from '../views/arts-view'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    name: 'AtristView',
    path: '/atrist-view',
    component: AtristView,
  },
  {
    name: 'RegistrationView',
    path: '/registration-view',
    component: RegistrationView,
  },
  {
    name: 'LoginView',
    path: '/login-view',
    component: LoginView,
  },
  {
    name: 'ArtOverviewView',
    path: '/art-overview-view',
    component: ArtOverviewView,
  },
  {
    name: 'AboutUsView',
    path: '/about-us-view',
    component: AboutUsView,
  },
  {
    name: 'MyAccountView',
    path: '/my-account-view',
    component: MyAccountView,
  },
  {
    name: 'ArtConcreteView',
    path: '/art-concrete-view',
    component: ArtConcreteView,
  },
  {
    name: 'ArtsView',
    path: '/arts-view',
    component: ArtsView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
