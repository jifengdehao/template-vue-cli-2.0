// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import store from './store'
import '@/assets/less/index.less'

import {Tabbar, TabbarItem, List, Cell} from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(List).use(Cell)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
