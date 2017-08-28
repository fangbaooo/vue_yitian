<template>
  <div class="p_zhright">
    <!-- 右侧内容 -->
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle">
        <span class="fl">安全中心</span>
      </h4>
      <div class="safe_list mt20">
        <ul>
        #{if type==1 || type==2}
        <li>
        #{if deposUser.audit_status==null}
         <i class="icon_safe icon_safe_rz"></i>
        <span class="safe_name fz16 fl">实名认证</span>
        <span class="safe_statu fl">未实名</span>
        
        <span class="safe_operate fl">
        #{if stockUserOrNot}
        <a href="@{adepository.register.RegisterController.activateStockedUser()}"  target="view_window">立即激活</a>
        #{/if}
        #{else}
        <a href="@{adepository.register.RegisterController.openAccount()}"  target="view_window">立即实名</a>
        #{/else}
        </span>
        #{/if}
        #{elseif deposUser?.audit_status=='AUDIT'}
        <i class="icon_safe icon_safe_rz"></i>
        <span class="safe_name fz16 fl">实名认证</span>
        <span class="safe_statu fl">${user?.realityName}(${user?.idNumber})</span>
            <span class="fl">审核中</span>
        #{/elseif}
        #{elseif deposUser?.audit_status=='PASSED'}
        <i class="icon_safe icon_safe_rz icon_seted"></i>
        <span class="safe_name fz16 fl">实名认证</span>
        <span class="safe_statu fl">${user?.idNumber?.replace('xw','')}</span>
            <span class="fl">${user?.realityName}</span>
        #{/elseif}
        #{elseif deposUser?.audit_status=='BACK'}
         <i class="icon_safe icon_safe_rz"></i>
        <span class="safe_name fz16 fl">实名认证</span>
        <span class="safe_statu fl">未实名</span>
        <span class="safe_operate fl"><a href="@{adepository.register.RegisterController.openAccount()}"  target="view_window">立即实名</a></span>
        #{/elseif}
        #{elseif deposUser?.audit_status=='REFUSED'}
        <i class="icon_safe icon_safe_rz icon_seted"></i>
        <span class="safe_name fz16 fl">实名认证</span>
        <span class="safe_statu fl">资料不合格，请联系客服</span>
        #{/elseif}
        </li>
        #{/if}
        #{else}
        <li>
        #{if user?.realname_status == 1 && user.realname_errors >= 2}
        <i class="icon_safe icon_safe_rz"></i>
        <span class="safe_name fz16 fl">实名认证</span>
        <span class="safe_statu fl">${user?.realityName}（${user?.idNumber})</span>
            <span class="fl">审核中</span>
        #{/if}
        #{elseif user?.realname_status == 3 }
        <i class="icon_safe icon_safe_rz icon_seted"></i>
        <span class="safe_name fz16 fl">实名认证</span>
        <span class="safe_statu fl">${user?.idNumber}</span>
            <span class="fl">${user?.realityName}</span>
          #{/elseif}
          #{else}
          <i class="icon_safe icon_safe_rz"></i>
        <span class="safe_name fz16 fl">实名认证</span>
        <span class="safe_statu fl">未实名</span>
        <span class="safe_operate fl" onclick="realnameSet()">立即实名</span>
        #{/else}
        </li>
          #{/else}
          <li>
            <i class="icon_safe icon_safe_password"></i>
            <span class="safe_name fz16 fl">登录密码</span>
            <span class="safe_statu fl">已设置</span>
            <span class="safe_operate fl" id="modifyLoginPWBtn">修改</span>
          </li>
          
          
          #{if type==1 || type==2}
          <li>
            #{if deposUser?.audit_status=='PASSED'}
            <i class="icon_safe icon_safe_jiaoyi icon_seted"></i>
            <span class="safe_name fz16 fl">交易密码</span>
            <span class="safe_statu fl">已设置</span>
            <span class="safe_operate fl"><a href="@{adepository.account.AccountController.resetPassWord()}"  target="view_window" style="color:#ff3329;">修改/找回</a></span>
            #{/if}
            #{else}
            <i class="icon_safe icon_safe_jiaoyi"></i>
            <span class="safe_name fz16 fl">交易密码</span>
            <span class="safe_statu fl">请先注册认证</span>
            #{/else}
          </li>

          #{/if}
          #{else}
          <li>
            #{if user.payPassword == null}
            <i class="icon_safe icon_safe_jiaoyi"></i>
            <span class="safe_name fz16 fl">交易密码</span>
            <span class="safe_statu fl">未设置</span>
            <span class="safe_operate fl" id="jiaoYmm">立即设置</span>
            #{/if}
            #{else}
            <i class="icon_safe icon_safe_jiaoyi icon_seted"></i>
            <span class="safe_name fz16 fl">交易密码</span>
            <span class="safe_statu fl">已设置</span>
            <span class="safe_operate fl" id="modifyPayPWBtn">修改</span><span class="fl c_gray">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span class="safe_operate fl" onclick="dealPass()">找回</span>
            #{/else}
          </li>
          #{/else}
          
          <li>
            <i class="icon_safe icon_safe_mobile"></i>
            <span class="safe_name fz16 fl">绑定手机</span>
            <span class="safe_statu fl">${user?.mobile.substring(0,3)}****${user?.mobile.substring(7)}</span>
            <span class="safe_operate fl" id="modifyMobileBtn">修改</span>
            <input type="hidden" id="error" value="${error?.msg}">
          </li>
        </ul>
      </div>
    </div>
  </div></template>
<script>
import laydate from "laydate"
import pagination from "@/components/base/pagination"
var dataList = {
  page: [
    {
      time: '2017-02-27 10:34:33',
      prize: '0.5%加息券',
      remark: '加息券奖励'
    },
    {
      time: '2017-02-27 10:30:20',
      prize: '1%加息券',
      remark: '加息券奖励'
    },
    {
      time: '2017-01-17 16:56:13',
      prize: 'U盘',
      remark: '一月活动'
    },
    {
      time: '2017-01-20 09:30:53',
      prize: '蓝牙音箱',
      remark: '一月活动'
    },
    {
      time: '2016-10-27 10:50:22',
      prize: '小米体重秤',
      remark: '十月活动'
    }
  ]
}
export default {
  components: {
    pagination
  },
  data () {
    return {
      currentPage: 1,
      pageNo: 1,
      cashRecord: {}
    }
  },
  watch: {
    currentPage: 'requestData'
  },
  mounted () {
    this.requestData()
  },
  methods: {
    requestData () {
      // 在这里使用ajax或者fetch将对应页传过去获取数据即可
      this.cashRecord = dataList
    }
  }
}
</script>
