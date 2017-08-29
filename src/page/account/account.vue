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
            <router-link to="/account/home/recharge" tag="li" @click="doCheck(1, $event)" active-class="clicked" exact><a>充值</a></router-link>
            <router-link to="/account/home/withdrawal" tag="li" @click="doCheck(2, $event)" active-class="clicked" exact><a>提现</a></router-link>
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
        }
      ]
    }
  },
    watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'aaa'
  },
  methods: {
    setBreadcrumbs (name) {
      this.breadcrumbs = name
    },
    aaa () {
      console.log(this.$route.path)
    },
    doCheck(type, e) {
      if (type === 1) {
        this.setBreadcrumbs("账户总览");
        console.log(type)
        //e.currentTarget.className = "clicked";
        //window.location.href = '/account/home/recharge';
        //this.$router.push({ path: '/account/home/recharge' })
      }
      if (type === 2) {
        window.location.href = '/account/home/withdrawal';
      }
      if (type === 3) {
        window.location.href = '@{front.account.FundsManage.userBankRecord()}';
      }
      if (type === 4) {
        window.location.href = '@{front.account.basicInformation.modifyMobile()}';
      }
    }
  }

}
  // function doCheck(obj) {
  //   if (obj == 4) {
  //       window.location.href='@{front.account.basicInformation.modifyMobile()}';
  //       return;
  //     }
  //   var isSmrzPass = #{jsAction @front.account.FundsManage.isSmrzPass()/}
  //   $.post(isSmrzPass({}), function(data) {
  //     if (data == null || data.result == null || data.result == undefined) {
  //          window.location.href='@{front.account.LoginAndRegisterAction.login()}';
  //     }
  //     else{
  //       var arr = eval(data);
  //       if (arr.result == 3) {
  //         if (obj === 1) {
  //           window.location.href='@{front.account.FundsManage.recharge()}';
  //         }
  //         if (obj === 2) {
  //           var payPwdIsNull = #{jsAction @front.account.FundsManage.payPwdIsNull()/};
  //           $.post(payPwdIsNull({}),function(data){
  //             var arr=eval(data);
  //             var paypwdisnull = arr.paypwdisnull;
  //             if(paypwdisnull == 1) {
  //               //未设置交易密码则弹窗提示设置交易密
  //               UI.showConfirm("为了您的资金安全，提现前请设置交易密码", "设置", toSetPayPwd, "返回");
  //             }else {
  //               //window.location.href='@{front.account.FundsManage.withdrawal()}';
                
  //               var bankIsNull = #{jsAction @front.account.FundsManage.bankIsNull()/};
  //               $.post(bankIsNull({}),function(data){
  //                 var arr=eval(data);
  //                 var bankisnull = arr.bankisnull;
  //                 if (bankisnull == 1) {
  //                   //未绑卡则弹窗提示是否前往绑卡
  //                   UI.showConfirm("为了您的资金安全，提现前请绑定本人银行卡", "绑卡", toAddBank, "返回");
  //                 } else if (bankisnull == 2){
  //                   window.location.href='@{front.account.FundsManage.withdrawal()}';
  //                 }else if (bankisnull == 3){
  //                   window.location.href='@{front.account.FundsManage.withdrawalKq()}';
  //                 }
  //               });
  //             }
  //           });
            
  //         }
  //         if (obj === 3) {
  //           window.location.href='@{front.account.FundsManage.userBankRecord()}';
  //         }
  //         if (obj === 4) {
  //           window.location.href='@{front.account.basicInformation.modifyMobile()}';
  //         }
  //       } else {
  //         //dialogCenter("#smrzDiv");
  //         UI.showConfirm("为了您的账户安全，请先实名认证", "确定", toSmrz);
  //       }
  //     }
  //   });
  // }

</script>
