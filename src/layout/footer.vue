<template>
  <div class="s_footer">
    <div class="s_center s_footerup clr">
      <div class="left s_footerleft" style="padding-top:18px">
        <p class="s_footerlink">
          <router-link to="/aboutUs">关于我们</router-link>
          <i>|</i>
          <router-link to="/safeguard">安全保障</router-link>
          <i>|</i>
          <router-link :to="{path: '/help', query: { typeId: 41 }}">帮助中心</router-link>
          <i>|</i>
          <router-link to="/aboutUs/recruit">加入我们</router-link>
          <i>|</i>
          <router-link to="/noviceGuide">新手指南</router-link>
          <i>|</i>
          <router-link to="/aboutUs/contact">联系我们</router-link>
          <i>|</i>
          <a href="http://www.yitiangroup.com" target="_blank">益田集团</a>
        </p>
        <p class="s_footermsg">
          ©2017 深圳前海益日昇互联网金融服务有限公司 版权所有<i>|</i> 粤ICP备15113016号-1
        </p>
      </div>
      <div class="right s_footerright">
        <div class="left" style="padding-top:18px">
          <p class="s_footerkf"><strong>客服热线</strong>（ 9:00~18:00  |  工作日）</p>
          <p class="s_footerkfnum">400-0060-206</p>
        </div>
        <div class="right s_footer_ma">
          <img src="../assets/images/erweima/app.jpg" alt=""width="98" class="block">
          <p class="fz12 ta_c lh18">扫一扫 下载APP</p>
        </div>
      </div>
    </div>
  </div>
</template>
