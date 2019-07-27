import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import '../node_modules/vant/lib/index.css'
Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  Vant,
  render: h => h(App)
}).$mount('#app')
