import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdView from '@/views/Ads/AdView.vue'
import AdListView from '@/views/Ads/AdListView.vue'
import NewAdView from '@/views/Ads/NewAdView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import RegView from '@/views/Auth/RegView.vue'
import OrdersView from '@/views/User/OrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ad/:id',
    name: 'AdView',
    props: true,
    component: AdView
  },
  {
    path: '/list',
    name: 'AdListView',
    component: AdListView
  },
  {
    path: '/new',
    name: 'NewAdView',
    component: NewAdView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'RegistrationView',
    component: RegView
  },
  {
    path: '/orders',
    name: 'OrderView',
    component: OrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;