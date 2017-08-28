<template>
<div class="p_zhright">
  <div class="p_zhinvelist mt0">
    <h4 class="p_zhtitle mb20">
          <span class="fl">我的推广</span>
      </h4>
      <div class="mb40">
        <div class="fz18">一、我的推广链接</div>
        <div class="ml40">
          <p class="mt15 mb15">我的邀请码为：{{code}}或注册手机号码，邀请好友在注册时输入或直接复制链接</p>
          <div class="tg_link">
          <input class="tg_link_input" readonly v-model="spreadLink" id="spread_link">
          <a id="copy_link_a" class="copy_link f16">复制链接</a>
        </div>
        </div>
      </div>
      <div class="mb40 relative">
        <div class="fz18">二、我的专属二维码</div>
        <div class="ml40">
          <p class="mt15 mb15">通过微信“扫一扫”立即分享至微信朋友圈微信，邀请好友加入益田理财</p>
          <p class="lh24 c_gray">邀请规则：</p>
        <p class="lh24 c_gray">1、通过微信扫描二维码；</p>
        <p class="lh24 c_gray">2、点击右上角菜单分享至朋友圈或者发送给朋友</p>
        </div>
        <div class="tg_link_ma">
        <img src="${user?.qrcode}" alt="" width="116" height="116" class="block">
        <p class="f16 mt10 ta_c">打开手机，扫一扫</p>
      </div>
      </div>
    <div class="pt15 b_top">
      <p class="bold">说明：</p>
      <p class="mt10">1、什么是邀请码？</p>
      <p class="24">用户注册后将获得属于个人的唯一标识码，好友填入邀请码注册成功后，推广人将会根据好友充值或投资具体情况获得一定奖励。</p>
      <p class="mt10">2、如何使用邀请码？</p>
      <p class="24">邀请对象收到邀请码或含有邀请码的链接地址后，将邀请码复制，注册时粘贴到邀请码栏，完成注册。</p>
      <p class="mt10">3、奖励规则</p>
      <p class="24">{{ruleText}}</p>
      <p class="mt10">4、特别申明</p>
      <p class="24">若发现任何作弊或非法手段获得奖励的，将取消全部返利金额。邀请码最终解释权归益田理财所有。</p>
    </div>
  </div>
</div>
</template>
<script>
import ZeroClipboard from "@/assets/js/zeroClipboard/ZeroClipboard";
export default {
  components: {

  },
  data () {
    return {
      ruleText: 1,
      spreadLink: "https://www.yitianlicai.com/registerMobile?un=10000143",
      code: 10000143, 
    }
  },
  mounted () {
    this.copyLink();
  },
  methods: {
    copyLink () {
      
      ZeroClipboard.setMoviePath("../../../assets/js/zeroClipboard/ZeroClipboard.swf");
      var clip = new ZeroClipboard.Client();
      clip.setHandCursor(true);
      clip.addEventListener("mouseUp", function(client) {
        alert("复制链接成功！");
      });
      clip.setText(this.spreadLink);
      clip.glue('copy_link_a');
    }
  }
}
</script>
