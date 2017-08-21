<template>
  <div class="p_zhrtop">
    <div class="p_zhuserinfo clr">
      <div class="fl" style="width:500px">
        <h6 class="p_zhello">欢迎您，哈哈</h6>
        <div class="p_zhsafety">
          <a href="@{front.account.basicInformation.modifyMobile()}" title="绑定手机" class="clicked">
            <i class="icon ico1"></i>
          </a> 
          <a href="@{front.account.basicInformation.safeCenter()}" title="实名认证" #{if user.realname_status==3}  class="clicked" #{/if}>
            <i class="icon ico2"></i>
          </a> 
          <a href="@{front.account.FundsManage.userBankRecord()}" title="绑定银行卡" #{if bank == null} class="p_zhsafyhk" #{/if}#{else} class="clicked" #{/else}>
            <i class="icon ico3"></i>
          </a> 
          <div>
          <span class="fl ml15">安全等级：</span>
          <span class="p_zhsfdengji clicked"></span>
          <span class="p_zhsfdengji #{if user.realname_status==3} clicked #{/if}"></span>
          <span class="p_zhsfdengji #{if bank!=null} clicked #{/if}"></span>
          <span class="fl cozhuse ml10">#{if user.realname_status==3 && bank!=null}高#{/if}#{elseif user.realname_status==3}中#{/elseif}#{else}低#{/else}</span>
          #{if user.realname_status!=3 || bank==null}
            <a href="javascript:upLevel()" class="p_zhpromote">[提升]</a>
          #{/if}
          </div>
        </div>
      </div>
      <div class="fr">
        <dl class="clr p_zhmissage">
          <dt>消息：</dt>
          <dd>
            <a href="@{front.account.Message.systemMsgs()}">(<span class="cozhuse" id="unreadSystemMsgCount">#{if unreadSystemMsgCount > -1}${unreadSystemMsgCount}#{/if}</span>)<span
              class="p_zhxiaox"><i class="icon"></i>
            </span>
            </a>
          </dd>
        </dl>
        <dl class="clr p_zhmissage">
          <dt>上次登录时间：</dt>
          <dd>${user?.lastLoginTime?.format('yyyy.MM.dd HH:mm:ss')}</dd>
        </dl>
      </div>
    </div>
    <div class="p_zhbalance">
      <div class="fl">
        <span>可用余额</span> <span class="fz12">（元）：</span> <span
          class="fz18 co333">${user?.balance?.format('###,##0.00')}<span class="fz14"></span>
        </span>
      </div>
      <div class="fr">
      #{if isEmployee}
        <a href="javascript:doCheck(1);" class="p_zhrecharge">充值</a> 
      #{/if}  
        <a href="javascript:doCheck(2);" class="ml30">提现</a>
      </div>
    </div>
    <ul class="p_zhassets clr">
      <li>
        <div class="co333">
          <span class="fz18">${sumAmount?.format('###,##0.00')}</span>
        </div>
        <h6>账户总金额（元）</h6></li>
      <li>
        <div class="co333">
          <span class="fz18">${user?.freeze?.format('###,##0.00')}</span>
        </div>
        <h6>冻结金额（元）</h6></li>
      <li>
        <div class="co333">
          <span class="fz18">${investSumAmount?.format('###,##0.00')}</span>
        </div>
        <h6>待收本金（元）</h6></li>
      <li>
        <div class="co333">
          <span class="fz18">${investSumEarnings?.format('###,##0.00')}</span>
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
      //listData: [],
      //listTitle: "",
    }
  }
}
</script>
