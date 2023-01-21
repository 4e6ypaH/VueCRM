import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import messagePlugin from '@/common/message.plugin'
import Loader from '@/components/app/Loader'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import router from './router'
import store from './store'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyA2YJvyoU0y7ZPQHS6YhHbobCtlgTDlLgA",
  authDomain: "vue-crm-7cf75.firebaseapp.com",
  databaseURL: "https://vue-crm-7cf75-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-crm-7cf75",
  storageBucket: "vue-crm-7cf75.appspot.com",
  messagingSenderId: "1053849106179",
  appId: "1:1053849106179:web:30ec55a55332a29ebf1b36",
  measurementId: "G-3PYPK8LBR9"
});

let app 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


