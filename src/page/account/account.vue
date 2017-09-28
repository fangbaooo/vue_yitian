<template>
  <div class="s_center clr pb40">
    <div class="s_bread">
      <router-link to="/" class="s_breadindex"><i class="icon"></i>首页</router-link>
      <i class="s_breadarrow">&gt;</i>
      <router-link to="/account"><i class="icon"></i>我的账户</router-link>
      <i class="s_breadarrow" style="display: none">&gt;</i>
      <span style="display: none">{{breadcrumbs}}</span>
    </div>
    <div class="clr">
      <ul class="p_zhleft">
        <li id="list_account">
          <router-link to="/account/home" @click.native="navEvent('账户总览')" active-class="selected"><h4> <i class="icon ico1"></i>我的账户</h4></router-link>
          <ul class="p_zhminav">
            <router-link to="/account/home" tag="li" @click.native="navEvent('账户总览')" active-class="clicked" exact><a>账户总览</a></router-link>
            <li @click="doCheck(1, $event)" id="recharge"><a>充值</a></li>
            <li @click="doCheck(2, $event)" id="withdrawal"><a>提现</a></li>
            <router-link to="/account/home/dealRecord" id="dealRecord" @click.native="navEvent('交易记录')" tag="li" active-class="clicked" exact><a>交易记录</a></router-link>
          </ul>
        </li>
        <li>
          <router-link to="/account/myInvest" @click.native="navEvent('我的投资')" active-class="selected"><h4> <i class="icon ico2"></i>我的投资</h4></router-link>
          <ul class="p_zhminav">
            <router-link to="/account/myInvest/investRecord" @click.native="navEvent('我的投资')" tag="li" active-class="clicked" exact><a>投资记录</a></router-link>
            <router-link to="/account/myInvest/investBill" @click.native="navEvent('我的投资')" tag="li" active-class="clicked" exact><a>理财账单</a></router-link>
          </ul>
        </li>
        <li>
          <router-link to="/account/bankCard" @click.native="navEvent('银行卡')" active-class="selected"><h4><i class="icon ico3"></i>银行卡</h4></router-link>
        </li>
        
        <li>
          <router-link to="/account/reward" @click.native="navEvent('我的奖励')" active-class="selected"><h4><i class="icon ico8"></i>我的奖励</h4></router-link>
          <ul class="p_zhminav">
            <router-link to="/account/reward/couponsList" tag="li" @click.native="navEvent('我的奖励')" active-class="clicked" exact><a>优惠券</a></router-link>
            <router-link to="/account/reward/cashRecord" tag="li" @click.native="navEvent('我的奖励')" active-class="clicked" exact><a>现金奖</a></router-link>
            <router-link to="/account/reward/rewardRecord" tag="li" @click.native="navEvent('我的奖励')" active-class="clicked" exact><a>活动奖品</a></router-link>
          </ul>
        </li>
        
        <li>
          <router-link to="/account/safeCenter" @click.native="navEvent('安全中心')" active-class="selected"><h4><i class="icon ico4"></i>安全中心</h4></router-link>
        </li>
        <li>
          <router-link to="/account/spread" @click.native="navEvent('推广管理')" active-class="selected"><h4><i class="icon ico6"></i>推广管理</h4></router-link>
          <ul class="p_zhminav">
            <router-link to="/account/spread/spreadLink" tag="li" @click.native="navEvent('推广管理')" active-class="clicked" exact><a>我的推广</a></router-link>
            <router-link to="/account/spread/spreadUser" tag="li" @click.native="navEvent('推广管理')" active-class="clicked" exact><a>邀请记录</a></router-link>
          </ul>
        </li>
      </ul>
      <div id="accountRight">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbs: '账户总览',
      link: [
        { type: "recharge", text: "充值"},
        { type: "withdrawal", text: "提现"},
        { type: "dealRecord", text: "交易记录"}
      ]
    }
  },
  mounted () {
    this.setRouter();
  },
  watch: {
    "$route": "setRouter"
  },
  methods: {
    // 设置面包导航文字
    setBreadcrumbs (name) {
      this.breadcrumbs = name;
    },
    // 绑定导航点击事件
    navEvent (name) {
      this.setBreadcrumbs(name);
      this.removeRechargeNav();
    },
    // 去掉充值和提现的样式
    removeRechargeNav () {
      if (this.$route.path.indexOf("home/recharge") < 0){
        document.getElementById("recharge").className = ''
      }
      if (this.$route.path.indexOf("home/withdrawal") < 0){
        document.getElementById("withdrawal").className = ''
      }
    },
    // 判断当前是否充值和提现页面
    setRouter () {
      var link = this.link
      for (var i = 0; i < link.length; i++) {
        if (this.$route.path.indexOf(link[i].type) > -1) {
          this.setBreadcrumbs(this.link[i].text)
          document.getElementById(link[i].type).className = 'clicked'
        } else {
          document.getElementById(link[i].type).className = ''
        }
      }
    },
    // 充值和提现前的判断
    doCheck(type, e) {
      if (type === 1) {
        this.setBreadcrumbs("充值")
        e.currentTarget.className = "clicked";
        this.$router.push({ path: '/account/home/recharge'})
        this.removeRechargeNav()
      }
      if (type === 2) {
        this.setBreadcrumbs("提现")
        e.currentTarget.className = "clicked";
        this.$router.push({ path: '/account/home/withdrawal'})
        this.removeRechargeNav()
      }
    }
  }
}
</script>
