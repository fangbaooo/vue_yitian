<template>
  <div>
    <div class="p_scronews">
      <div class="s_center clr" id="scrollNews">
        <div class="p_syggtitle"><i class="icon"></i>最新公告：</div>
        <ul class="p_syggscrul">
          <li class="clr" v-for="item in notice"><router-link :to="item.link" class="text_hide">{{item.text}}</router-link><span>{{item.date}}</span></li>
        </ul>
        <router-link to="/aboutUs/notice" class="p_syggmore">查看更多</router-link>
      </div>
    </div>

    <!-- 四大优势 -->
    <ensure></ensure>
    <div class="s_center mb30 mt30 clr">
      <div class="clr p_sytwotrait">
        <div class="p_syleftcon">
          <router-link :to="{path: '/noviceGuide'}" class="p_syrbtn"><img src="../assets/images/ad/xszn.jpg" width="495" height="150" alt=""></router-link>
        </div>
        <div class="p_syrightcon">
          <router-link :to="{path: '/ylcHome'}" class="p_syrbtn"><img src="../assets/images/ad/wjtz.jpg" width="495" height="150" alt=""></router-link>
        </div>
      </div>
      <div class="mt20"><ylc-list :list="listData"></ylc-list></div>
      <div class="clr mt20">
        <div class="fl"><news :title="dynamic.title" :list="dynamic.list" :link="'/aboutUs/dynamic'"></news></div>
        <div class="fr"><news :title="news.title" :list="news.list" :link="'/aboutUs/news'"></news></div>
      </div>
    </div>

    <div class="p_syboxshdow"></div>
    <!-- 合作机构 -->
    <partner></partner>
  </div>
</template>
<script>
import ensure from './index/ensure'   // 四大优势
import partner from './index/partner' // 合作机构
import news from './index/news'       // 行业资讯
import ylcList from './ylcList'       // 益理财列表
export default {
  components: {
    ensure,
    partner,
    news,
    ylcList
  },
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
      scrollUl: "",//this.scrollArea,//getElementsByTagName('ul')[0],
      timer: null,

      listData: null,

      dynamic: {
        title: '平台动态',
        list: []
      },
      news: {
        title: '行业资讯',
        list: []
      },
      notice: []
    }
  },
  methods: {
    getData () {
      this.$http({
        url: '/ylcList',
        method: 'get',
      }).then(res => {
        this.listData = this.limitList(res.data, 6)
      })
    },
    getDynamicData () {
      this.$http({
        url: '/dynamicList',
        method: 'get',
      }).then(res => {
        this.dynamic.list = this.limitList(res.data, 3)
      })
    },
    getNewsData () {
      this.$http({
        url: '/newsList',
        method: 'get',
      }).then(res => {
        this.news.list = this.limitList(res.data, 3)
      })
    },
    getNoticeData () {
      this.$http({
        url: '/noticeList',
        method: 'get',
      }).then(res => {
        this.notice = this.limitList(res.data, 5)
        this.$nextTick(() => {
          this.runScroll();
        });
      })
    },
    limitList (data, num) {
      if (data.length > num ) {
        data.splice(num)
      }
      return data;
    },
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
            }, speed)
          }
        }).trigger("mouseleave")
    },
    runScroll () {
      this.scrollNews($("#scrollNews"), $("#scrollNews").find("ul"), 3000)
    }
  },
  mounted () {
    this.getData()
    this.getDynamicData()
    this.getNewsData()
    this.getNoticeData()

    //this.scrollNews($("#scrollNews"), $("#scrollNews").find("ul"), 3000)
  }
}
</script>
