import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import 'materialize-css/dist/js/materialize.min';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      meta: {layout: 'empty'},
      component: () => import('./views/Register.vue')
    },
    {
      path: '/categories',
      name: 'Categories',
      meta: {layout: 'main'},
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/detail-record',
      name: 'DetailRecord',
      meta: {layout: 'main'},
      component: () => import('./views/DetailRecord.vue')
    },
    {
      path: '/history',
      name: 'History',
      meta: {layout: 'main'},
      component: () => import('./views/History.vue')
    },
    {
      path: '/planning',
      name: 'Planning',
      meta: {layout: 'main'},
      component: () => import('./views/Planning.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: {layout: 'main'},
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/record',
      name: 'Record',
      meta: {layout: 'main'},
      component: () => import('./views/Record.vue')
    }
  ]
})
