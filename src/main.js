// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import request from './request'
import './assets/css/const.css'
import i18n from './i18n'

Vue.use(iView)
Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
