<template>
  <div class="p-fitem" style="display: none">
    <dl class="p_zcglist h40 clr mt10">
      <dt><span class="p_zcred"></span> 您的手机号</dt>
      <dd><span class="co333">159****1509</span></dd>
    </dl>
    <dl class="p_zcglist clr mt20">
      <dt class="h40"><span class="p_zcred">*</span> 短信验证</dt>
      <dd>
        <div class="w300 pr">
          <input type="text" class="p_zcinput" name="smsCode" maxlength="6" v-model="smsCode" @keyup="smsCodeFlag = true">
          <a href="javascript:void(0);" @click="sendCode" class="p_zcsetyzm" v-if="remain == 59">免费获取</a>
          <span class="p_zcsetyzm" v-if="timer != null">{{remain}}秒后重发</span>
        </div>
      </dd>
    </dl>
    <dl class="p_zcglist clr">
      <dt>&nbsp;</dt>
      <dd><span class="p_zcerror_pay" v-if="smsCode === '' && smsCodeFlag === true"><i class="icon"></i>请输入短信验证码</span></dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      smsCode:'',
      smsCodeFlag: false,
      remain: 59,
      timer: null
    }
  },
  methods: {
    // 清空数据
    setEmpty() {
        this.smsCode = '';
        this.smsCodeFlag = false;
        this.remain = 59;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
    },
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
    next () {
      if(this.smsCode === ''){
        this.smsCodeFlag = true;
        return false;
      } else {
        this.$emit('submit');
        return true;
        // this.$http.post('api/login')
        //   .then((res) => {

        //   }, (error) => {

        //   })
      }
    }
  }
}
</script>
