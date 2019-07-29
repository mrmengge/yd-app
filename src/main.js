import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import Vuex from './store.js'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,

  Vant,
  Vuex,
  render: h => h(App)
}).$mount('#app')
