<template>
  <div class="p_sylistbox">
    <h2 class="p_sytitle">
        <span class="fl"><em>益理财</em></span>
        <a href="/ylcHome" class="fr ylc-more"><i>+</i> <span class="p-vm">更多</span></a>
    </h2>
    <ul class="p_syinlist">
      <li>
        <table class="p_zhintable">
          <tbody>
            <tr height="48">
              <td colspan="6">
                <a class="p_zhintit" href="/front/invest/ylcDetail?ylcId=1685">益理财YS2017070012</a>
                <span class="p_zhsubtit">发布时间：2017-07-07</span>
              </td>
            </tr>
            <tr height="48">
              <td width="15%">
                <span class="p_zhlilv"><em>8.00</em>%</span>
              </td>
              <td width="15%">
                <span class="fz24 co333">3</span>个月
              </td>
              <td width="20%">
                <span class="fz24 co333">1000,000</span> 元
              </td>
              <td width="20%">
                <span class="fz24 co333">800,000</span> 元
              </td>
              <td width="20%">
                <span class="s_progress left">
                  <span class="s_progress-bar" id="ylcLoanSchedule1" style="width:80%;"></span>
                </span>
                <span class="s_progress-value left">80.0%</span>
              </td>
              <td rowspan="2" style="vertical-align: top">
                <input type="button" value="立即投资" class="p_biaobtn btn" onclick="window.location.href='/front/invest/ylcDetail?ylcId=1685'"> 
              </td>
            </tr>
            <tr height="26">
              <td>预期年化收益</td>
              <td>投资期限</td>
              <td>募资总额</td>
              <td>可投金额</td>
              <td>投资进度</td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <table class="p_zhintable">
          <tbody>
            <tr height="48">
              <td colspan="6">
                <a class="p_zhintit" href="/front/invest/ylcDetail?ylcId=1685">益理财YS2017070011</a>
                <span class="p_zhsubtit">发布时间：2017-07-07</span>
              </td>
            </tr>
            <tr height="48">
              <td width="15%">
                <span class="p_zhlilv"><em>7.00</em>%</span>
              </td>
              <td width="15%">
                <span class="fz24 co333">1</span>个月
              </td>
              <td width="20%">
                <span class="fz24 co333">500,000</span> 元
              </td>
              <td width="20%">
                <span class="fz24 co333">0</span> 元
              </td>
              <td width="20%">
                <span class="s_progress left">
                  <span class="s_progress-bar" id="ylcLoanSchedule1" style="width: 100%;"></span>
                </span>
                <span class="s_progress-value left">100.0%</span>
              </td>
              <td rowspan="2" style="vertical-align: top">
                <input type="button" value="已售罄" class="p_biaobtn btn cur" onclick="window.location.href='/front/invest/ylcDetail?ylcId=1685'"> 
              </td>
            </tr>
            <tr height="26">
              <td>预期年化收益</td>
              <td>投资期限</td>
              <td>募资总额</td>
              <td>可投金额</td>
              <td>投资进度</td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <table class="p_zhintable">
          <tbody>
            <tr height="48">
              <td colspan="6">
                <a class="p_zhintit" href="/front/invest/ylcDetail?ylcId=1685">益理财YS2017070010</a>
                <span class="p_zhsubtit">发布时间：2017-07-07</span>
              </td>
            </tr>
            <tr height="48">
              <td width="15%">
                <span class="p_zhlilv"><em>9.00</em>%</span>
              </td>
              <td width="15%">
                <span class="fz24 co333">6</span>个月
              </td>
              <td width="20%">
                <span class="fz24 co333">500,000</span> 元
              </td>
              <td width="20%">
                <span class="fz24 co333">0</span> 元
              </td>
              <td width="20%">
                <span class="s_progress left">
                  <span class="s_progress-bar" id="ylcLoanSchedule1" style="width: 100%;"></span>
                </span>
                <span class="s_progress-value left">100.0%</span>
              </td>
              <td rowspan="2" style="vertical-align: top">
                <input type="button" value="已售罄" class="p_biaobtn btn cur" onclick="window.location.href='/front/invest/ylcDetail?ylcId=1685'"> 
              </td>
            </tr>
            <tr height="26">
              <td>预期年化收益</td>
              <td>投资期限</td>
              <td>募资总额</td>
              <td>可投金额</td>
              <td>投资进度</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: [
        {
          name: '关于IOS系统充值恢复的通知',
          date: '2017-05-16',
          path: 'newDetails?id=571',
          active: false
        },
        {
          name: '关于IOS系统充值维护的通知',
          date: '2017-05-11',
          path: 'newDetails?id=566',
          active: false
        },
        {
          name: '关于“邂逅春天礼”活动获奖名单公布',
          date: '2017-05-08',
          path: 'newDetails?id=561',
          active: false
        },
        {
          name: '关于益田理财2017年劳动节放假公告',
          date: '2017-04-25',
          path: 'newDetails?id=542',
          active: false
        }
      ],
      // imgMap: {
      //   '/detail/count': require("../assets/images/1.png"),
      //   '/detail/forecast': require("../assets/images/2.png"),
      //   '/detail/analysis': require("../assets/images/3.png"),
      //   '/detail/publish': require("../assets/images/4.png")
      // }
      scrollArea: $("#scrollNews"),//document.getElementById("scrollNews"),
      scrollUl: "ddddd",//this.scrollArea,//getElementsByTagName('ul')[0],
      timer: null
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
