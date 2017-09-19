// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import App from './App';
import router from './router';
import store from './store'
import directive from './directive';
import './utils/permission' // 权限

Vue.config.productionTip = false;
Vue.use(Vuex); //状态管理

// //Vuex配置
// const store = new Vuex.Store({
//   state: {
//     domain:'http://test.example.com', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
//     userInfo: { //保存用户信息
//       nick: null,
//       ulevel: null,
//       uid: null,
//       portrait: null
//     },
//     isLogin: false,
//   },
//   mutations: {
//     //更新用户信息
//     updateUserInfo(state, newUserInfo) {
//       state.userInfo = newUserInfo;
//     },
//     checkLogin(state, isLogin) {
//       state.isLogin = isLogin;
//     }
//   }
// })

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },

  methods:{
    // checkLogin(){
    //   //检查是否存在session
    //   if(!this.getCookie('session')){
    //     this.$router.push('/login');
    //   }else{
    //     this.$router.push('/account');
    //   }
    // },
    //请求用户的一些信息
    getUserInfo() {
      if (this.getCookie('session')) {
      	console.log(999)
        //发送http请求获取，这里写死作演示
        this.userInfo = {
            nick: 'chenwei',
            ulevel: 20,
            uid: '10000'
              //portrait: 'images/profile.png'
          }
          //实例开发中这里会向服务端请求数据
          //如下(用了vue-resource):
          /*ts.$http.get(url, {
            //参数
            "params":{}
          }).then((response) => {
            //Success
          }, (response) => {
            //Error
          });*/
          //提交mutation到Store
        this.$store.commit('updateUserInfo', this.userInfo);
        this.$store.commit('checkLogin', true);

      } else {
      	if (this.$route.path.indexOf('/account') > -1) {
      		location.href = '/login'
      	}
        this.$store.commit('checkLogin', false);
      }
    },
  }
});

