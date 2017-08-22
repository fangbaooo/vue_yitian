<template>
  <div class="s_center clr">
    <div class="s_bread">
      <a href="/" class="s_breadindex"><i class="icon"></i>首页</a>
      <i class="s_breadarrow">&gt;</i> 
      <a href="/account"><span>我的账户</span></a>
      <i class="s_breadarrow">&gt;</i> 
      <span>账户总览</span>
    </div>
    <div class="clr">
      <ul class="p_zhleft">
        <li id="list_account">
          <a href="/account/home" class="selected"><h4> <i class="icon ico1"></i>我的账户</h4></a>
          <ul class="p_zhminav" style="display: block">
            <li id="child_account_1" class="clicked"><a href="/account/home">账户总览</a></li>
            <li id="child_account_2"><a href="javascript:doCheck(1);">充值</a></li>
            <li id="child_account_3"><a href="javascript:doCheck(2);">提现</a></li>
            <li id="child_account_4"><a href="@{front.account.FundsManage.dealRecord()}">交易记录</a></li>
          </ul>
        </li>
        <li id="list_invest">
          <a href="@{front.account.FundsManage.investAccountRecord()}">
            <h4><i class="icon ico2"></i>我的投资</h4>
          </a>
          <ul class="p_zhminav">
            <li id="child_invest_1"><a href="@{front.account.FundsManage.investAccountRecord()}">投资记录</a></li>
            <li id="child_invest_2"><a href="@{front.account.FundsManage.investAccountBill()}">理财账单</a></li>
          </ul>
        </li>
        <li id="list_loan" style="display:none"> 
          <a href="@{front.account.LoanManage.loanAccountRecord()}">
            <h4><i class="icon ico9"></i>我的借款</h4>
          </a>
          <ul class="p_zhminav">
            <li id="child_loan_1"><a href="@{front.account.LoanManage.loanAccountRecord()}">借款记录</a></li>
            <li id="child_loan_2"><a href="@{front.account.LoanManage.loanAccountBill()}">借款统计</a></li>
          </ul>
        </li>
        <li id="list_bankcard">
          <a href="javascript:doCheck(3);">
            <h4><i class="icon ico3"></i>银行卡</h4>
          </a>
        </li>
        
        <li id="list_reward">
          <a href="@{front.account.RateAwardController.couponsList(0)}">
            <h4><i class="icon ico8"></i>我的奖励</h4>
          </a>
            <ul class="p_zhminav">
            <!-- <li id="child81"><a href="@{front.account.Voucher.voucherRecord()}">代金券</a></li> -->
            <li id="child_reward_1"><a href="@{front.account.RateAwardController.couponsList()}">优惠券</a></li>
            <li id="child_reward_2"><a href="@{front.account.CashRecord.cashRecord()}">现金奖</a></li>
            <li id="child_reward_3"><a href="@{front.activity.RewardRecordController.rewardRecord()}">活动奖品</a></li>
          </ul>
        </li>
        
        <li id="list_safe">
          <a href="@{front.account.basicInformation.safeCenter()}"><h4><i class="icon ico4"></i>安全中心</h4></a>
        </li>
        <li id="list_spread">
          <a href="@{front.account.spread.spreadLink()}">
            <h4><i class="icon ico6"></i>推广管理</h4>
          </a>
          <ul class="p_zhminav">
            <li id="child_spread_1"><a href="@{front.account.spread.spreadLink()}">我的推广</a></li>
            <li id="child_spread_2"><a href="@{front.account.spread.spreadUser()}">邀请记录</a></li>
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
  }

}
</script>
