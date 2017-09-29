import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import '@/assets/css/public.css'
import '../static/js/plugins/artDialog/dialog-plus-min.js'
import store from './store'
import direcive from './directive'
import './utils/permission' // 权限

Vue.config.productionTip = false;
Vue.use(Vuex); //状态管理

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

