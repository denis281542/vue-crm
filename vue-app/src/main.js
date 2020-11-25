import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyDP73rHdwqK4kSywguQaC8WC2eQ0Y2_52A',
  authDomain: 'vue-crm-14bdf.firebaseapp.com',
  databaseURL: 'https://vue-crm-14bdf.firebaseio.com',
  projectId: 'vue-crm-14bdf',
  storageBucket: 'vue-crm-14bdf.appspot.com',
  messagingSenderId: '1071618296900',
  appId: '1:1071618296900:web:d6b98221fae5e82b218011',
  measurementId: 'G-57YGJWDPLP'
})

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
