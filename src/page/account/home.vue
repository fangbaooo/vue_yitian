<template>
  <div class="p_zhright">
    <div class="tg_box">
      <div class="tg_box_left">
        <div class="tg_link">
          <input class="tg_link_input" readonly id="spread_link" v-model="spreadLink">
          <a id="copy_link_a" class="copy_link f16">复制链接</a>
        </div>
        <div class="tg_text fz12 lh24">
          <p>你的专属邀请码：<span class="cozhuse fz14">{{code}}</span> 或 <span class="cozhuse fz14">您的登录手机号</span></p>
          <p>成功推荐好友注册即可获得<span class="cozhuse fz14">100元</span>代金券<span style="display: none">好友单笔投资1万元及以上返现<span class="cozhuse fz14">2%</span></span></p>
        </div>
      </div>
      <div class="tg_box_right">
        <img src="${user?.qrcode}" alt="" width="102" height="102" class="block">
        <p class="f16 mt10 ta_c">扫一扫分享</p>
      </div>
    </div>
    <home-info></home-info>
  </div>
</template>
<script>
import homeInfo from "./homeInfo"

export default {
  components: {
    homeInfo
  },
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
