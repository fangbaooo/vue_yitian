<template>
<div class="s_center mt48 mb60">
  <div class="p_zcmain clr">
    <h4 class="p_zctitle mb55"><i class="ico"></i>会员登录</h4>
    <div class="p_zcleft" id="loginBox">
      <dl class="p_zclist h40 clr">
        <dt><span class="p_zcred">*</span> 手机号码</dt>
        <dd>
          <input type="text" placeholder="请输入手机号码" class="p_zcinput" maxlength="11" value="" autocomplete="off" v-model="phone" @keypress="phoneFlag = true" v-focus></dd>
      </dl>
      <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd><span class="p_zcerror" v-if="phone == '' && phoneFlag"><i class="icon"></i>请输入手机号码</span></dd>
        <dd><span class="p_zcerror" v-if="!isPhone && phone != '' && phoneFlag"><i class="icon"></i>手机号格式有误，请重新输入！</span></dd>
      </dl>
      <dl class="p_zclist h40 clr">
        <dt><span class="p_zcred">*</span> 密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</dt>
        <dd><input style="display:none" type="password"><!--添加隐藏的input 解决chrome自动填充数据的问题 -->
          <input type="password" class="p_zcinput" autocomplete="off" @keyup="passwordFlag = true;isPassword = true" v-model="password" @keypress="detectCapsLock($event)"><div class="capital" style="display:none;">大写锁定已打开</div></dd>
      </dl>
      <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd><span class="p_zcerror" v-if="password == '' && passwordFlag"><i class="icon"></i>请输入密码</span></dd>
        <dd><span class="p_zcerror" v-if="!isPassword && password != ''"><i class="icon"></i>您输入的账号或密码有误，请重新输入!</span></dd>
      </dl>
      <div id="codeDiv" style="display:none">
      <dl class="p_zclist h40 clr">
        <dt><span class="p_zcred">*</span> 验证码</dt>
        <dd>
          <input type="text" id="code" name="code" class="p_zcinput">
          <input type="hidden" name="randomID" id="randomID" value="7d3ea1b6-245d-4099-8708-aca47a355d3a">
          <a href="javascript:void(0);" class="p_zcsetyzm"><img src="/front/account/getImg?id=7d3ea1b6-245d-4099-8708-aca47a355d3a" alt="" id="img" onclick="change()" width="98px" height="38px"></a>
          <a href="javascript:change();" class="p-dlyzm">换一张？</a>
        </dd>
      </dl>
      <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd><span class="p_zcerror" id="s_code">&nbsp;</span></dd>
      </dl>
      </div>
      <dl class="p_zclist clr">
        <dt>&nbsp;</dt>
        <dd class="clr">
          <label class="p_zclabel fl"><input type="checkbox" checked="checked" v-model="rmbUser"> 记住用户名</label>
          <span class="fr">
            <a href="/front/account/resetPasswordByMobile" class="cozhuse p-un">忘记密码？</a>
          </span>
        </dd>
      </dl>
      <dl class="p_zclist clr">
        <dt>&nbsp;</dt>
        <dd>
          <a href="javascript:void(0)" class="p_zcbtn btn" @click="login">登&nbsp;&nbsp;录</a>
        </dd>
      </dl>
      <br>
      <dl class="p_zclist clr">
        <dt>&nbsp;</dt>
        <dd class="clr">
          <span class="fr">
            没有账号？| <a href="/register" class="cozhuse p-un">立即注册</a>
          </span>
        </dd>
      </dl>
      <div id="sss"></div>
    </div>
    
    <div class="p_zcright">
      <img src="../../assets/images/ad/ad02.jpg" alt="" width="328">
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      phone: '',
      phoneFlag: false,
      password: '',
      passwordFlag: false,
      isPassword: true,
      realPw: '123456',

      rmbUser: false
    }
  },
  computed: {
    isPhone () {
      return this.isMobileNum(this.phone);
    }
  },

  methods: {
    isMobileNum (phone) {
      return (new RegExp(/^((13[0-9])|(14[0-7])|(15[^4,\D])|(17[0-8])|(18[0-9]))(\d{8})$/).test(phone));
    },
    login () {
      if(this.phone === ''){
        this.phoneFlag = true;
        return false;
      } else if (!this.isPhone) {
        this.phoneFlag = true;
        return false;
      } else if (this.password === ''){
        this.passwordFlag = true;
        return false;
      } else {
        if (this.password === this.realPw) {
          console.log(this.rmbUser)
          if (this.rmbUser == true) {
            localStorage.rmbUser = this.phone;
          }
          location.href = '/account';
        } else {
          this.isPassword = false;
        }
        // this.$http.post('api/login')
        //   .then((res) => {

        //   }, (error) => {

        //   })
      }
    },
    // 记住用户名
    setUser () {
      if(localStorage.rmbUser) {
        this.rmbUser = true;
        this.phone = localStorage.rmbUser
      }
    },
    detectCapsLock (event) {
      var e = event || window.event;  
      var o = e.target || e.srcElement;
      var oTip = o.nextElementSibling || o.nextSibling;
      var keycode = e.keyCode ? e.keyCode: (e.which ? e.which : e.charCode);  
      var realkey = String.fromCharCode(keycode);  
      if (/^[A-Z]+$/.test(realkey)) {
        oTip.style.display = "block";
      } else {
        oTip.style.display = "none";
      }
    }
  },
  mounted () {
    this.setUser();
  }
}
</script>
<style scoped>

</style>
