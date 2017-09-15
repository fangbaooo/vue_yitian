<template>
  <div class="s_center mt48 mb60" v-title data-title="注册">
    <div class="p_zcmain clr">
      <h4 class="p_zctitle mb55"><i class="ico"></i>用户注册</h4>
      <div class="p_zcleft">
        <dl class="p_zclist h40 clr">
          <dt><span class="p_zcred">*</span> 手机号码</dt>
          <dd>
            <input type="text" class="p_zcinput" maxlength="11" value="" autocomplete="off" v-model="phone" @keypress="phoneFlag = true" v-focus></dd>
        </dl>
        <dl class="p_zclist h30 clr">
          <dt>&nbsp;</dt>
          <dd><span class="p_zcerror" v-if="phone == '' && phoneFlag"><i class="icon"></i>请输入手机号码</span></dd>
          <dd><span class="p_zcerror" v-if="!isPhone && phone != '' && phoneFlag"><i class="icon"></i>手机号格式有误，请重新输入！</span></dd>
          <dd><span class="p_zcerror" v-if="isRegister"><i class="icon"></i>该手机号已注册，请登录</span></dd>
        </dl>
        <dl class="p_zclist h40 clr" style="height: auto">
          <dt><span class="p_zcred">*</span> 密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</dt>
          <dd><input style="display:none" type="password"><!--添加隐藏的input 解决chrome自动填充数据的问题 -->
            <input type="password" class="p_zcinput" maxlength="20" placeholder="6~20位字母、数字、符号组成" value="" autocomplete="off" @keyup="passwordFlag = true;" v-model="password" @keypress="detectCapsLock($event)"><div class="capital" style="display:none;">大写锁定已打开</div></dd>
          </dl>
          <dl class="p_zclist h30 clr">
            <dt>&nbsp;</dt>
            <dd>
              <!-- 20160122以下两个div判断后取其中一个显示，给需要隐藏的div添加class="none" 即可 -->
              <div class="none" id="levelDd" style="display: none;"><span id="levelInfo">低</span><span class="p_zcsafe"><span id="levelWidth" style="width: 33%;"></span></span></div>
              <div class="p_zcerror" v-if="password == '' && passwordFlag"><i class="icon"></i>请输入密码</div>
            </dd>
          </dl>
          <dl class="p_zclist h40 clr">
            <dt><span class="p_zcred">*</span> 确认密码</dt>
            <dd><input type="password" class="p_zcinput" maxlength="20" value="" autocomplete="off" @keyup="passwordSureFlag = true;" v-model="passwordSure" @keypress="detectCapsLock($event)"><div class="capital" style="display:none;">大写锁定已打开</div></dd>
          </dl>
          <dl class="p_zclist h30 clr">
            <dt>&nbsp;</dt>
            <dd><span class="p_zcerror" v-if="passwordSure == '' && passwordSureFlag"><i class="icon"></i>请再次输入密码</span></dd>
            <dd><span class="p_zcerror" v-if="password !== passwordSure && passwordSure !==''"><i class="icon"></i>两次输入的密码不一致</span></dd>
          </dl>
          <dl class="p_zclist h40 clr">
            <dt><span class="p_zcred">*</span> 验&nbsp;&nbsp;证&nbsp;&nbsp;码</dt>
            <dd>
              <input type="text" class="p_zcinput" v-model="code" @keyup="codeFlag = true;">
              <a href="javascript:void(0);" class="p_zcsetyzm"><img src="https://www.yitianlicai.com/front/account/getImg?id=5a192a8a-6f0a-4c8f-bcc8-8fd8509a2973" class="" id="img" width="98px" height="38px"></a>
              <a href="javascript:void(0);" class="p-dlyzm">换一张？</a>
            </dd>
          </dl>
          <dl class="p_zclist h30 clr">
            <dt>&nbsp;</dt>
            <dd><span class="p_zcerror" v-if="code == '' && codeFlag"><i class="icon"></i>请输入验证码</span></dd>
          </dl>
          <dl class="p_zclist h40 clr">
            <dt><span class="p_zcred">*</span> 短信验证码</dt>
            <dd>
              <input type="text" class="p_zcinput" maxlength="6" autocomplete="off" v-model="smsCode" @keyup="smsCodeFlag = true">
              <span href="javascript:void(0);" @click="sendCode" class="p_zcsetyzm cursor" v-if="remain == 59">免费获取</span>
              <span class="p_zcsetyzm" v-if="timer != null">{{remain}}秒后重发</span>
            </dd>
          </dl>
          <dl class="p_zclist h30 clr">
            <dt>&nbsp;</dt>
            <dd><span class="p_zcerror_pay" v-if="smsCode === '' && smsCodeFlag === true"><i class="icon"></i>请输入短信验证码</span></dd>
          </dl>
          <dl class="p_zclist h40 clr">
            <dt><span class="p_zcred"> &nbsp;</span> 邀&nbsp;&nbsp;请&nbsp;&nbsp;码</dt>
            <dd>
              <input class="p_zcinput" type="text" v-model="recommendCode" placeholder="邀请码/推荐人手机号">
            </dd>
          </dl>
          <dl class="p_zclist h30 clr">
            <dt>&nbsp;</dt>
            <dd><span class="p_zcerror" v-if="realRecommendCode != recommendCode && recommendCode != '' && recommendCodeFlag == true && xieyi"><i class="icon"></i>该邀请码不存在</span></dd>
            <dd><span class="p_zcerror" v-if="!xieyi"><i class="icon"></i>请勾选我已阅读并同意《益田理财注册协议》</span></dd>
            
          </dl> 
          <dl class="p_zclist clr">
            <dt>&nbsp;</dt>
            <dd>
              <label class="p_zclabel"><input type="checkbox" checked="checked" v-model="xieyi"> 我已阅读并同意</label>
              <a href="/front/invest/registerProtocolDetails?id=-1010" class="cozhuse p-un" target="_blank">《益田理财注册协议》</a>
            </dd>
          </dl>
          <dl class="p_zclist clr">
            <dt>&nbsp;</dt>
            <dd>
              <input type="button" @click="register" class="p_zcbtn btn" value="提 交">
            </dd>
          </dl>
          <dl class="p_zclist clr pt15">
            <dt>&nbsp;</dt>
            <dd>已注册？现在就 <a href="/login" class="cozhuse p-un">登录</a></dd>
          </dl>
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
      passwordSure: '',
      passwordSureFlag: false,
      code: '',
      codeFlag: false,
      smsCode: '',
      smsCodeFlag: false,
      recommendCode: '',
      recommendCodeFlag: false,
      realRecommendCode: 'abc',
      registerNum: '13188888888',
      xieyi: true,
      smsCode:'',
      smsCodeFlag: false,
      remain: 59,
      timer: null
    }
  },
  computed: {
    isPhone () {
      return this.isMobileNum(this.phone);
    },
    isRegister () {
      return this.phone === this.registerNum
    }
  },
  methods: {
    isMobileNum (phone) {
      return (new RegExp(/^((13[0-9])|(14[0-7])|(15[^4,\D])|(17[0-8])|(18[0-9]))(\d{8})$/).test(phone));
    },
    register () {
      if(this.phone === '' || !this.isPhone || this.isRegister){
        this.phoneFlag = true;
        return false;
      } else if (this.password === ''){
        this.passwordFlag = true;
        return false;
      } else if (!this.passwordSure) {
        this.passwordSureFlag = true;
        return false;
      } else if (this.code === ''){
        this.codeFlag = true;
        return false;
      } else if (this.smsCode === ''){
        this.smsCodeFlag = true;
        return false;
      } else if (this.recommendCode !== ''){
        if (this.recommendCode !== this.realRecommendCode) {
          this.recommendCodeFlag = true;
          return false;
        }
      } else {
        location.href = '/account';
        // this.$http.post('api/login')
        //   .then((res) => {

        //   }, (error) => {

        //   })
      }
    },
    // 短信验证码
    sendCode () {
      this.timer = setInterval(() => {
        if (this.remain === 1) {
          this.remain = 59;
          clearInterval(this.timer);
          this.timer = null
        } else {
          this.remain--;
        }
      }, 1000);
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
  }
}
</script>
