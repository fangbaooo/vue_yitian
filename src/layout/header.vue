<template>
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
              <img src="../assets/images/erweima/weixin.png" width="110" height="110" alt="" />
              <p class="fz14">扫我更精彩</p>
            </div>
          </div>
        </div>
        <div class="right s_topright">
          <div class="s_appdown left">
            <router-link to="/appdl"><i class="icon"></i>手机客户端</router-link>
            <div class="s_ewmpop">
              <div class="top_arrow"></div>
              <div class="fl">
                <img src="../assets/images/erweima/app.jpg" width="110" height="110" alt="" />
                <p class="fz14">扫一扫 下载APP</p>
              </div>
            </div>
          </div>
          <div class="left" v-if="!$store.state.user.name">
            <router-link to="/login">登录</router-link>
            <i>|</i>
            <router-link to="/register">注册</router-link>
            <!-- <a href="/login">登录</a>
            <i>|</i>
            <a href="/register">注册</a> -->
          </div>
          <div class="left" v-else>
            <span v-text="$store.state.user.name"></span>
            <i>|</i>
            <a href="javascript:;" @click="logout"> 安全退出</a>
          </div>
          <i>|</i>
          <router-link :to="{path: '/help', query: { typeId: 41 }}">帮助中心</router-link>
        </div>
      </div>
    </div>
    <div class="s_center s_nav clr">
      <router-link to="/" class="s_logo">益田理财</router-link>
      <ul class="s_navlist right">
        <li><router-link to="/" active-class="selected" exact>首页</router-link></li>
        <li><h2><router-link to="/ylcHome" active-class="selected">我要理财</router-link></h2></li>
        <li><router-link to="/loan" active-class="selected" exact>我要借款</router-link></li>
        <li><router-link to="/noviceGuide" active-class="selected" exact>新手指南</router-link></li>
        <router-link to="/account" active-class="selected" id="usr" tag="li" class="s_accountnav"><i class="s_accounticon"></i><a>我的账户</a></router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //注销
    logout() {
      //this.$store.dispatch('Logout')
      this.$store.dispatch('FedLogOut').then(() => {
        location.href= "/login" // 为了重新实例化vue-router对象 避免bug
      })
    },
  }
}
</script>
