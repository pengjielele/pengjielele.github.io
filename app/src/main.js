import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/font-awesome-4.7.0/scss/font-awesome.scss'

import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodemirror)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
