<template>
<div class="p_zcgtcmain" style="display: none">
  <dl class="p_zclist h40 clr">
      <dt>原交易密码</dt>
        <dd><input style="display:none" type="password"><!--添加隐藏的input 解决chrome自动填充数据的问题 -->
            <input type="password" class="p_zcinput" maxlength="20" autocomplete="off" v-model="oldPassword" @keyup="oldPasswordFlag = true"><div class="capital" style="display:none;">大写锁定已打开</div>
        </dd>
    </dl>
    <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd>
            <span class="p_zcerror" v-if="oldPassword == '' && oldPasswordFlag"><i class="icon"></i>请输入原密码</span>
        </dd>
    </dl>
    <dl class="p_zclist h40 clr">
        <dt>新交易密码</dt>
        <dd>
            <input type="password" placeholder="6~20位字母、数字、符号组成" @blur="checkLoginPwd" class="p_zcinput" maxlength="20" autocomplete="off" v-model="newPassword" @keyup="newPasswordFlag = true"><div class="capital" style="display:none;">大写锁定已打开</div>
        </dd>
    </dl>
    <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd>
            <span class="p_zcerror" v-if="newPassword == '' && newPasswordFlag"><i class="icon"></i>请输入新密码</span>
            <span class="p_zcerror" v-if="(newPassword.length < 6 || newPassword.length > 20) && newPassword != '' && newPasswordFlag"><i class="icon"></i>交易密码须由6~20位字母、数字、符号组成</span>
            <span class="p_zcerror" v-if="isSamePw && newPasswordFlag"><i class="icon"></i>交易密码不能与登录密码相同</span>
        </dd>
    </dl>
    <dl class="p_zclist h40 clr">
        <dt>确认新密码</dt>
        <dd>
            <input type="password" class="p_zcinput" maxlength="20" autocomplete="off" v-model="newPasswordSure" @keyup="newPasswordSureFlag = true"><div class="capital" style="display:none;">大写锁定已打开</div>
        </dd>
    </dl>
    <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd>
            <span class="p_zcerror" v-if="newPasswordSure == '' && newPasswordSureFlag"><i class="icon"></i>请再次输入新密码</span>
            <span class="p_zcerror" v-if="newPassword !== newPasswordSure && newPasswordSure !=='' && newPasswordSureFlag"><i class="icon"></i>两次输入的新密码不一致</span>
        </dd>
    </dl>
    <dl class="p_zclist clr">
        <dt>&nbsp;</dt>
        <dd>
            <input class="p_zcbtn btn" value="确认" type="button" @click="modifyPW">
        </dd>
    </dl>
</div>
</template>
<script>
export default {
  data () {
    return {
      oldPassword:'',
      newPassword: '',
      newPasswordSure: '',
      oldPasswordFlag: false,
      newPasswordFlag: false,
      newPasswordSureFlag: false,
      isSamePw: false,
      payPassword: 'ab123456' // 判断是否和登录密码一致
    }
  },
  methods: {
    // 清空数据
    setEmpty() {
        this.oldPassword = '',
        this.newPassword = '',
        this.newPasswordSure = '',
        this.oldPasswordFlag = false,
        this.newPasswordFlag = false,
        this.newPasswordSureFlag = false,
        this.isSamePw = false
    },
    checkLoginPwd () {
      if (this.newPassword === this.payPassword) {
        this.isSamePw = true
      } else {
        this.isSamePw = false
      }
    },
    modifyPW () {
      if(this.oldPassword === ''){
        this.oldPasswordFlag = true;
        return false;
      } else if (this.newPassword === '') {
        this.newPasswordFlag = true;
        return false;
      } else if (this.newPasswordSure === ''){
        this.newPasswordSureFlag = true;
        return false;
      } else {
        this.$emit('submit')
        // this.$http.post('api/login')
        //   .then((res) => {

        //   }, (error) => {

        //   })
      }
    }
  }
}
</script>
