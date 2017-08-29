<template>
  <div class="s_center clr pb40">
    <div class="s_bread">
      <a href="/" class="s_breadindex"><i class="icon"></i>首页</a>
      <i class="s_breadarrow">&gt;</i> 
      <a href="/account"><span>我的账户</span></a>
      <i class="s_breadarrow">&gt;</i> 
      <span>{{breadcrumbs}}</span>
    </div>
    <div class="clr">
      <ul class="p_zhleft">
        <li id="list_account">
          <router-link to="/account/home" @click.native="setBreadcrumbs('账户总览')" active-class="selected"><h4> <i class="icon ico1"></i>我的账户</h4></router-link>
          <ul class="p_zhminav">
            <router-link to="/account/home" tag="li" @click.native="setBreadcrumbs('账户总览')" active-class="clicked" exact><a>账户总览</a></router-link>
            <li><a href="javascript:doCheck(1);">充值</a></li>
            <li><a href="javascript:doCheck(2);">提现</a></li>
            <router-link to="/account/home/dealRecord" @click.native="setBreadcrumbs('交易记录')" tag="li" active-class="clicked" exact><a>交易记录</a></router-link>
          </ul>
        </li>
        <li>
          <router-link to="/account/myInvest" @click.native="setBreadcrumbs('我的投资')" active-class="selected"><h4> <i class="icon ico2"></i>我的投资</h4></router-link>
          <ul class="p_zhminav">
            <router-link to="/account/myInvest/investRecord" @click.native="setBreadcrumbs('我的投资')" tag="li" active-class="clicked" exact><a>投资记录</a></router-link>
            <router-link to="/account/myInvest/investBill" @click.native="setBreadcrumbs('我的投资')" tag="li" active-class="clicked" exact><a>理财账单</a></router-link>
          </ul>
        </li>
        <li>
          <router-link to="/account/bankCard" @click.native="setBreadcrumbs('银行卡')" active-class="selected"><h4><i class="icon ico3"></i>银行卡</h4></router-link>
        </li>
        
        <li>
          <router-link to="/account/reward" @click.native="setBreadcrumbs('我的奖励')" active-class="selected"><h4><i class="icon ico8"></i>我的奖励</h4></router-link>
          <ul class="p_zhminav">
            <router-link to="/account/reward/couponsList" tag="li" @click.native="setBreadcrumbs('我的奖励')" active-class="clicked" exact><a>优惠券</a></router-link>
            <router-link to="/account/reward/cashRecord" tag="li" @click.native="setBreadcrumbs('我的奖励')" active-class="clicked" exact><a>现金奖</a></router-link>
            <router-link to="/account/reward/rewardRecord" tag="li" @click.native="setBreadcrumbs('我的奖励')" active-class="clicked" exact><a>活动奖品</a></router-link>
          </ul>
        </li>
        
        <li>
          <router-link to="/account/safeCenter" @click.native="setBreadcrumbs('安全中心')" active-class="selected"><h4><i class="icon ico4"></i>安全中心</h4></router-link>
        </li>
        <li>
          <router-link to="/account/spread" @click.native="setBreadcrumbs('推广管理')" active-class="selected"><h4><i class="icon ico6"></i>推广管理</h4></router-link>
          <ul class="p_zhminav">
            <router-link to="/account/spread/spreadLink" tag="li" @click.native="setBreadcrumbs('推广管理')" active-class="clicked" exact><a>我的推广</a></router-link>
            <router-link to="/account/spread/spreadUser" tag="li" @click.native="setBreadcrumbs('推广管理')" active-class="clicked" exact><a>邀请记录</a></router-link>
          </ul>
        </li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbs: '账户总览',
      listData: [],
      listTitle: "",
      sidebar: [
        {
          name: '登录注册',
          id: '41'
        },
        {
          name: '账户安全',
          id: '42'
        },
        {
          name: '实名认证',
          id: '43'
        },
        {
          name: '银行卡管理',
          id: '44'
        },
        {
          name: '充值',
          id: '45'
        },
        {
          name: '提现',
          id: '46'
        },
        {
          name: '常见问题',
          id: '47'
        },
        {
          name: '代金券',
          id: '49'
        },
      ]
    }
  },
  methods: {
    setBreadcrumbs (name) {
      this.breadcrumbs = name
    }
  }

}
</script>
