import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import store from './store.js'
// 校验插件
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(Vant)
Vue.use(VeeValidate)
Validator.localize('zh_CN', zh_CN)
// 自定义规则
Validator.extend('phone', {
  // 提示消息
  getMessage: field => '请输入正确的手机号',
  // 自定义规则的具体代码
  validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
})
Vue.config.productionTip = false

new Vue({
  router,
  Vant,
  store,
  render: h => h(App)
}).$mount('#app')
