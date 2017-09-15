<template>
  <div class="p_zhright" v-title data-title="安全中心">
    <!-- 右侧内容 -->
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle">
        <span class="fl">安全中心</span>
      </h4>
      <div class="safe_list mt20">
        <ul>
          <li>
            <div v-if="user.realname_status == 1 && user.realname_errors >= 2">
              <i class="icon_safe icon_safe_rz"></i>
              <span class="safe_name fz16 fl">实名认证</span>
              <span class="safe_statu fl">{{user.realityName}}（{{user.idNumber}})</span>
              <span class="fl">审核中</span>
            </div>
            <div v-else-if="user.realname_status == 3">
              <i class="icon_safe icon_safe_rz icon_seted"></i>
              <span class="safe_name fz16 fl">实名认证</span>
              <span class="safe_statu fl">{{user.idNumber}}</span>
              <span class="fl">{{user.realityName}}</span>
            </div>
            <div v-else>
              <i class="icon_safe icon_safe_rz"></i>
              <span class="safe_name fz16 fl">实名认证</span>
              <span class="safe_statu fl">未实名</span>
              <span class="safe_operate fl" onclick="realnameSet()">立即实名</span>
            </div>
          </li>

          <li>
            <i class="icon_safe icon_safe_password"></i>
            <span class="safe_name fz16 fl">登录密码</span>
            <span class="safe_statu fl">已设置</span>
            <span class="safe_operate fl" @click="modifyLoginPW">修改</span>
          </li>

          <li>
            <div v-if="user.payPassword == null">
              <i class="icon_safe icon_safe_jiaoyi"></i>
              <span class="safe_name fz16 fl">交易密码</span>
              <span class="safe_statu fl">未设置</span>
              <span class="safe_operate fl" id="jiaoYmm">立即设置</span>
            </div>
            <div v-else>
              <i class="icon_safe icon_safe_jiaoyi icon_seted"></i>
              <span class="safe_name fz16 fl">交易密码</span>
              <span class="safe_statu fl">已设置</span>
              <span class="safe_operate fl" @click="modifyPayPW">修改</span><span class="fl c_gray">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span class="safe_operate fl" @click="findPayPW">找回</span>
            </div>
          </li>

          <li>
            <i class="icon_safe icon_safe_mobile"></i>
            <span class="safe_name fz16 fl">绑定手机</span>
            <span class="safe_statu fl">{{user.mobile.substring(0,3)}}****{{user.mobile.substring(7)}}</span>
            <span class="safe_operate fl" @click="modifyMobileNumber">修改</span>
          </li>
        </ul>
      </div>
    </div>
    <login-pw id="loginPWPop" @submit="modifyPW" ref="modifyPassword"></login-pw>
    <pay-pw id="payPWPop" @submit="closePayPW" ref="modifyPayPassword"></pay-pw>
    <find-pay-pw id="findPayPWPop" @submit="closeFindPayPW" ref="findPayPassword"></find-pay-pw>
    <modify-mobile id="modifyMobileNum" @submit="closeMobile" ref="modifyMobileModal"></modify-mobile>
  </div>
</template>
<script>
import Dailog from "Dailog";
import loginPw from "./dialog/loginPw";
import payPw from "./dialog/payPw";
import findPayPw from "./dialog/findPayPw";
import modifyMobile from "./dialog/modifyMobile";

export default {
  components: {
    loginPw,
    payPw,
    findPayPw,
    modifyMobile
  },
  data () {
    return {
      user: {
        realname_status: 3,
        realname_errors: 0,
        idNumber: '441323**********12',
        realityName: '陈伟',
        payPassword: 1,
        mobile: '15999511509'
      },
      modPWPop: null,
      modPayPop: null,
      findPayPop: null,
      modifyMobilePop: null
    }
  },
  methods: {
    modifyLoginPW () {
      this.$refs.modifyPassword.setEmpty(); // 调用子组件方法，清空输入框内容
      let id = document.getElementById("loginPWPop");
      this.modPWPop = dialog({
        title: "修改登录密码",
        content: id,
        width: 600,
      });
      this.modPWPop.showModal();
    },
    modifyPW () {
      this.modPWPop.close().remove();
    },

    // 修改交易密码
    modifyPayPW () {
      this.$refs.modifyPayPassword.setEmpty(); // 调用子组件方法，清空输入框内容
      let id = document.getElementById("payPWPop");
      this.modPayPop = dialog({
        title: "修改交易密码",
        content: id,
        width: 600,
      });
      this.modPayPop.showModal();
    },
    closePayPW () {
      this.modPayPop.close().remove();
    },

    // 找回交易密码
    findPayPW () {
      this.$refs.findPayPassword.setEmpty(); // 调用子组件方法，清空输入框内容
      let _this = this;
      let id = document.getElementById("findPayPWPop");
      this.findPayPop = dialog({
        title: "短信验证",
        content: id,
        width: 600,
        ok: function () {
          return _this.$refs.findPayPassword.next();
        },
        okValue: '下一步',
        cancelValue: '取消',
        cancel: function () {}
      });
      this.findPayPop.showModal();
    },
    closeFindPayPW () {
      this.findPayPop.close().remove();
    },

    // 修改手机号
    modifyMobileNumber () {
      this.$refs.modifyMobileModal.setEmpty(); // 调用子组件方法，清空输入框内容
      let _this = this;
      let id = document.getElementById("modifyMobileNum");
      this.modifyMobilePop = dialog({
        title: "修改手机号",
        content: id,
        width: 600,
        ok: function () {
          return _this.$refs.modifyMobileModal.next();
        },
        okValue: '下一步',
        cancelValue: '取消',
        cancel: function () {}
      });
      this.modifyMobilePop.showModal();
    },
    closeMobile () {
      this.modifyMobilePop.close().remove();
    },
  }
}
</script>
