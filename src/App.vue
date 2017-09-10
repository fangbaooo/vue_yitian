<template>
  <div id="app">
    <div class="s_header">
      <div class="s_top">
        <div class="s_center clr">
          <div class="left s_tel mr20">
            <i class="icon left"></i>
            <span class="left fz12">&nbsp;&nbsp;客服热线&nbsp;&nbsp;</span>
            <span class="left fz16">400-0060-206</span>
          </div>
          <div class="left">
            <span class="left">关注我们</span>
            <!-- a href="http://weibo.com/u/2219448503" class="icon s_sinaicon left" target="" title="关注官方微博"></a -->
            <div class="left s_wechart">
              <i class="icon"></i>
              <div class="s_ewmpop">
                <div class="top_arrow"></div>
                <img src="./assets/images/erweima/weixin.png" width="110" height="110" alt="" />
                <p class="fz14">扫我更精彩</p>
              </div>
            </div>
          </div>
          <div class="right s_topright">
            <div class="s_appdown left">
              <a href="@{front.home.HomeAction.appdl()}"><i class="icon"></i>手机客户端</a>
              <div class="s_ewmpop">
                <div class="top_arrow"></div>
                <div class="fl">
                  <img src="./assets/images/erweima/app.jpg" width="110" height="110" alt="" />
                  <p class="fz14">扫一扫 下载APP</p>
                </div>
              </div>
            </div>
            <div class="left" v-if="!$store.state.isLogin">
              <a href="/login">登录</a>
              <i>|</i>
              <a href="/register">注册</a>
            </div>
            <div class="left" v-else>
              <span v-text="$store.state.userInfo.nick"></span>
              <i>|</i>
              <a href="javascript:;" @click="logout"> 安全退出</a>
            </div>
              <!-- <i>|</i>
              <a href="@{front.account.loginAndRegisterAction.logout()}" title="" target="">安全退出</a> -->
            
            <i>|</i>
            <router-link :to="{path: '/help', query: { typeId: 41 }}">帮助中心</router-link>
          </div>
        </div>
      </div>
      <div class="s_center s_nav clr">
        <router-link to="/" class="s_logo">益田理财</router-link>
        <ul class="s_navlist right">
          <li><router-link to="/" active-class="selected" exact>首页</router-link></li>
          <li><h2><router-link to="/ylcHome" active-class="selected" exact>我要理财</router-link></h2></li>
          <li><router-link to="/loan" active-class="selected" exact>我要借款</router-link></li>
          <li><router-link to="/noviceGuide" active-class="selected" exact>新手指南</router-link></li>
          <router-link to="/account" active-class="selected" id="usr" tag="li" class="s_accountnav"><i class="s_accounticon"></i><a>我的账户</a></router-link>
        </ul>
      </div>
    </div>
    
    <div id="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <!--footer-->
    <div class="s_footer" id="footer">
      <div class="s_center s_footerup clr">
        <div class="left s_footerleft" style="padding-top:18px">
          <p class="s_footerlink">
            <router-link to="/aboutUs">关于我们</router-link>
            <i>|</i>
            <router-link to="/safeguard">安全保障</router-link>
            <i>|</i>
            <router-link :to="{path: '/help', query: { typeId: 41 }}">帮助中心</router-link>
            <i>|</i>
            <router-link to="/aboutUs/recruit">加入我们</router-link>
            <i>|</i>
            <router-link to="/noviceGuide">新手指南</router-link>
            <i>|</i>
            <router-link to="/aboutUs/contact">联系我们</router-link>
            <i>|</i>
            <a href="http://www.yitiangroup.com" target="_blank">益田集团</a>
          </p>
          <p class="s_footermsg">
            ©2017 深圳前海益日昇互联网金融服务有限公司 版权所有<i>|</i> 粤ICP备15113016号-1
          </p>
        </div>
        <div class="right s_footerright">
          <div class="left" style="padding-top:18px">
            <p class="s_footerkf"><strong>客服热线</strong>（ 9:00~18:00  |  工作日）</p>
            <p class="s_footerkfnum">400-0060-206</p>
          </div>
          <div class="right s_footer_ma">
            <img src="./assets/images/erweima/app.jpg" alt=""width="98" class="block">
            <p class="fz12 ta_c lh18">扫一扫 下载APP</p>
          </div>
        </div>
      </div>
    </div>
    <!--footer end-->
  <Loading v-if="isLogouting"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/base/Loading.vue'
export default {
  data(){
    return {
      isLogouting: false,
      isLogin: false,
      userInfo: { //保存用户信息
        nick: null,
        ulevel: null,
        uid: null,
        portrait: null
      }
    }
  },
  components:{
    Loading
  },
  mounted(){
    //组件开始挂载时获取用户信息
    //this.getUserInfo();

  },
  methods: {
    //请求用户的一些信息
    // getUserInfo() {
    //   if (this.getCookie('session')) {
    //     this.isLogin = true;

    //     //发送http请求获取，这里写死作演示
    //     this.userInfo = {
    //         nick: 'chenwei',
    //         ulevel: 20,
    //         uid: '10000'
    //           //portrait: 'images/profile.png'
    //       }
    //       //实例开发中这里会向服务端请求数据
    //       //如下(用了vue-resource):
    //       /*ts.$http.get(url, {
    //         //参数
    //         "params":{}
    //       }).then((response) => {
    //         //Success
    //       }, (response) => {
    //         //Error
    //       });*/
    //       //提交mutation到Store
    //     this.$store.commit('updateUserInfo', this.userInfo);
    //   } else {
    //     this.isLogin = false;
    //   }
    // },
    //注销
    logout(){
      //删除cookie并跳到登录页
      this.isLogouting = true;
      this.delCookie('session');
      //演示
      setTimeout(()=>{
        this.$store.commit('checkLogin', false);
        location.href = '/login';
        //this.$router.push('/login');
        this.isLogouting = false;
      }, 3000)
    }
  }
}
</script>

