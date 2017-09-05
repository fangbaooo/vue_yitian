<template>
  <div class="p_zhright">
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
              <span class="safe_operate fl" id="modifyPayPWBtn">修改</span><span class="fl c_gray">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span class="safe_operate fl" onclick="dealPass()">找回</span>
            </div>
          </li>

          <li>
            <i class="icon_safe icon_safe_mobile"></i>
            <span class="safe_name fz16 fl">绑定手机</span>
            <span class="safe_statu fl">{{user.mobile.substring(0,3)}}****{{user.mobile.substring(7)}}</span>
            <span class="safe_operate fl" id="modifyMobileBtn">修改</span>
          </li>
        </ul>
      </div>
    </div>
    <login-pw id="LoginPWPop" @submit="modifyPW" ref="modifyPassword"></login-pw>
  </div>
</template>
<script>
import Dailog from "Dailog";
import loginPw from "./dialog/loginPw";
export default {
  components: {
    loginPw
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
      modPWPOP: null,
    }
  },
  mounted () {
    
  },
  methods: {
    modifyLoginPW () {
      this.$refs.modifyPassword.setEmpty(); // 调用子组件方法，清空输入框内容
      var id = document.getElementById("LoginPWPop");
      this.modPWPOP = dialog({
        title: "修改登录密码",
        content: id,
        width: 600,
      });
      this.modPWPOP.showModal();
    },
    modifyPW () {
      this.modPWPOP.close().remove();
    }
  }
}
</script>
