<template>
  <div class="p_zhrtop">
    <div class="p_zhuserinfo clr">
      <div class="fl" style="width:500px">
        <h6 class="p_zhello">欢迎您，<span v-if="user.realname_status==3">{{user.realityName}}</span> <span v-if="user._sex == 1">先生</span><span v-else>女士</span> </h6>
        <div class="p_zhsafety">
          <a href="@{front.account.basicInformation.modifyMobile()}" title="绑定手机" class="clicked">
            <i class="icon ico1"></i>
          </a> 
          <a href="@{front.account.basicInformation.safeCenter()}" title="实名认证" :class="{clicked: user.realname_status==3}">
            <i class="icon ico2"></i>
          </a> 
          <a href="@{front.account.FundsManage.userBankRecord()}" title="绑定银行卡" :class="bank == null? 'p_zhsafyhk' : 'clicked'">
            <i class="icon ico3"></i>
          </a> 
          <div>
          <span class="fl ml15">安全等级：</span>
          <span class="p_zhsfdengji clicked"></span>
          <span class="p_zhsfdengji" :class="{clicked: user.realname_status==3}"></span>
          <span class="p_zhsfdengji" :class="{clicked: bank!=null}"></span>
          <span class="fl cozhuse ml10">
            <span v-if="user.realname_status==3 && bank!=null">高</span>
            <span v-else-if="user.realname_status==3">中</span>
            <span v-else>低</span>
          </span>

          <a href="javascript:upLevel()" class="p_zhpromote" v-if="user.realname_status!=3 || bank==null">[提升]</a>
          
          </div>
        </div>
      </div>
      <div class="fr">
        <dl class="clr p_zhmissage">
          <dt>消息：</dt>
          <dd>
            <a href="@{front.account.Message.systemMsgs()}">(<span class="cozhuse" id="unreadSystemMsgCount"><span v-if="unreadSystemMsgCount > -1">{{unreadSystemMsgCount}}</span></span>)<span
              class="p_zhxiaox"><i class="icon"></i>
            </span>
            </a>
          </dd>
        </dl>
        <dl class="clr p_zhmissage">
          <dt>上次登录时间：</dt>
          <dd>{{user.lastLoginTime}}</dd>
        </dl>
      </div>
    </div>
    <div class="p_zhbalance">
      <div class="fl">
        <span>可用余额</span> <span class="fz12">（元）：</span> <span
          class="fz18 co333">{{user.balance}}<span class="fz14"></span>
        </span>
      </div>
      <div class="fr">
        <a href="javascript:doCheck(1);" class="p_zhrecharge">充值</a> 
        <a href="javascript:doCheck(2);" class="ml30">提现</a>
      </div>
    </div>
    <ul class="p_zhassets clr">
      <li>
        <div class="co333">
          <span class="fz18">{{sumAmount}}</span>
        </div>
        <h6>账户总金额（元）</h6></li>
      <li>
        <div class="co333">
          <span class="fz18">{{user.freeze}}</span>
        </div>
        <h6>冻结金额（元）</h6></li>
      <li>
        <div class="co333">
          <span class="fz18">{{investSumAmount}}</span>
        </div>
        <h6>待收本金（元）</h6></li>
      <li>
        <div class="co333">
          <span class="fz18">{{investSumEarnings}}</span>
        </div>
        <h6>待收收益（元）</h6></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      spreadLink: "https://www.yitianlicai.com/registerMobile?un=10000143",
      code: 10000143,
      bank: null,               //是否绑卡
      unreadSystemMsgCount: 5,  //消息条数
      sumAmount: 51000,         //账户总金额（元）
      investSumAmount: 50000,   //待收本金（元）
      investSumEarnings: 1000,  //待收收益（元）
      user: {
        freeze: 10,
        telephone:'15999511555',
        realname_status:3,
        realityName:'哇哈哈',
        _sex:1,
        balance: 130000,
        lastLoginTime: '2017-08-08',
      }
    }
  }
}
</script>
