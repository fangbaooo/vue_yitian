<template>
  <ul class="s_right">
    <li class="s_rightwechart">
      <i class="icon"></i>
      <span>关注<br>微信</span>
      <div class="s_rightbox">
        <img src="../assets/images/erweima/weixin.png" width="100" height="100" alt="">
      </div>
    </li>
    <li class="s_rightkf">
      <i class="icon"></i>
      <span>客服<br>热线</span>
      <div class="s_rightbox p_kefphone">
        <div>400-0060-206</div>
      </div>
    </li>
    <li class="s_rightqq">
      <i class="icon"></i>
      <span>在线<br>QQ</span>
      <div class="s_rightbox p_kefphone">
        <div>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2133416976&amp;site=qq&amp;menu=yes"><img src="../assets/images/qq_talk.jpg" width="95" alt="" style="margin-top:14px"></a>
        </div>
      </div></li>
    <li class="s_righttop" id="goTop" style="display: list-item;">
      <i class="icon"></i>
      <span>返回<br>顶部</span>
    </li>
  </ul>
</template>
<script>
export default {
  mounted(){
    this.gotoTop()
  },
  methods: {
    gotoTop() {
      //返回顶部
      $(window).bind('load scroll',function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 100){
          $('#goTop').show();
        }else{
          $('#goTop').hide();
        }
      });
      $('#goTop').click(function(){
        $('html,body').animate({scrollTop: 0});
      });
    }
  }
}
</script>
