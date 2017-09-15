// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import directive from './directive';

Vue.config.productionTip = false;
Vue.use(Vuex); //状态管理

//Vuex配置
const store = new Vuex.Store({
  state: {
    domain:'http://test.example.com', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    userInfo: { //保存用户信息
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    },
    isLogin: false,
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    },
    checkLogin(state, isLogin) {
      state.isLogin = isLogin;
    }
  }
})

//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
//获取cookie、
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return (arr[2]);
	else
		return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie = (name) => {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  //监听路由检查登录
  watch:{
    "$route" : 'getUserInfo'
  },
  //进入页面时
  created() {
    this.getUserInfo();
  },

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

