<template>
<div class="s_center mt48 mb60">
  <div class="p_zcmain clr">
    <h4 class="p_zctitle mb55"><i class="ico"></i>会员登录</h4>
    <div class="p_zcleft" id="loginBox">
      <dl class="p_zclist h40 clr">
        <dt><span class="p_zcred">*</span> 手机号码</dt>
        <dd>
          <input type="text" name="name" placeholder="请输入手机号码" class="p_zcinput" @keyup="phone=phone.replace(/[^\d]/g,'');phoneFlag = true" maxlength="11" value="" autocomplete="off" v-model="phone"></dd>
      </dl>
      <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd><span class="p_zcerror" v-if="phone == '' && phoneFlag"><i class="icon"></i>请输入手机号码</span></dd>
        <dd><span class="p_zcerror" v-if="!isPhone && phone != '' && phoneFlag"><i class="icon"></i>手机号格式有误，请重新输入！</span></dd>
      </dl>
      <dl class="p_zclist h40 clr">
        <dt><span class="p_zcred">*</span> 密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</dt>
        <dd><input style="display:none" type="text"><input style="display:none" type="password"><!--添加隐藏的input 解决chrome自动填充数据的问题 -->
          <input type="password" name="password" id="password" class="p_zcinput" autocomplete="off"><div class="capital" style="display:none;">大写锁定已打开</div></dd>
      </dl>
      <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd><span class="p_zcerror" id="s_password">&nbsp;</span></dd>
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
          <label class="p_zclabel fl"><input type="checkbox" checked="checked" id="ck_rmbUser"> 记住用户名</label>
          <span class="fr">
            <a href="/front/account/resetPasswordByMobile" class="cozhuse p-un">忘记密码？</a>
          </span>
        </dd>
      </dl>
      <dl class="p_zclist clr">
        <dt>&nbsp;</dt>
        <dd>
          <!-- 添加登入页面标示，用于登入状态无效时返回页面的判断 -->
          <input type="hidden" value="SDBGIOH24HFQ94HT2HSDAF89Q2P">
          <a href="javascript:void(0)" class="p_zcbtn btn" onclick="sublogin()">登&nbsp;&nbsp;录</a>
        </dd>
      </dl>
      <br>
      <dl class="p_zclist clr">
        <dt>&nbsp;</dt>
        <dd class="clr">
          <span class="fr">
            没有账号？| <a href="/registerMobile" class="cozhuse p-un">立即注册</a>
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
    }
  },
  computed: {
    isPhone () {
      return (new RegExp(/^((13[0-9])|(14[0-7])|(15[^4,\D])|(17[0-8])|(18[0-9]))(\d{8})$/).test(this.phone));
    }
  },
  methods: {
    scrollNews (scrollArea, scrollUl, speed) {
        var timeId,
        height = scrollUl.children("li").height();
        scrollArea.hover(function() {
          clearInterval(timeId);
        }, function() {
          if (scrollUl.children("li").length > 1) {
            timeId = setInterval(function() {
              scrollUl.animate({
                "margin-top": -height + "px"
              }, 600, function() {
                scrollUl.css("margin-top", "0").find("li:first").appendTo(scrollUl);
              });
            }, speed);
          }
        }).trigger("mouseleave");
    },
    runScroll () {
      this.scrollNews($("#scrollNews"), $("#scrollNews").find("ul"), 3000)
    }
  },
  mounted () {
    //this.runScroll();
    //this.scrollNews($("#scrollNews"), $("#scrollNews").find("ul"), 3000)
  }
}
</script>
<style scoped>

</style>
