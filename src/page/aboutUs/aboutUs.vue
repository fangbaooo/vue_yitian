<template>
    <div class="s_center mb40 clr">
        <!-- bread -->
        <div class="s_bread">
            <a href="/" title="" class="s_breadindex"><i class="icon"></i>首页</a>
            <i class="s_breadarrow">&gt;</i>关于我们<i class="s_breadarrow">&gt;</i>
            <span>{{breadcrumbs}}</span>
        </div>
        <div class="p_abusmain clr">
            <div class="p_ableft">
                <h2><i class="icon"></i>关于我们</h2>
                <ul class="p_abnav">
                    <router-link to="/aboutUs/aboutCompany" tag="li" active-class="cur" exact><a>公司简介</a></router-link>
                    <router-link to="/aboutUs/partner" tag="li" active-class="cur" exact><a>合作伙伴</a></router-link>
                    <router-link to="/aboutUs/team" tag="li" active-class="cur" exact><a>团队风采</a></router-link>
                    <router-link to="/aboutUs/notice" tag="li" active-class="cur" exact><a>官方公告</a></router-link>
                    <router-link to="/aboutUs/dynamic" tag="li" active-class="cur" exact><a>平台动态</a></router-link>
                    <router-link to="/aboutUs/news" tag="li" active-class="cur" exact><a>行业资讯</a></router-link>
                    <router-link to="/aboutUs/recruit" tag="li" active-class="cur" exact><a>招贤纳士</a></router-link>
                    <router-link to="/aboutUs/contact" tag="li" active-class="cur" exact><a>联系我们</a></router-link>
                </ul>
            </div>
            <keep-alive>
                <router-view :key="key"></router-view>
            </keep-alive>
        </div>
    </div>         
</div>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbs: '公司简介',
      narArr: [
        { type: 'aboutCompany', name: '公司简介'},
        { type: 'partner', name: '合作伙伴'},
        { type: 'team', name: '团队风采'},
        { type: 'notice', name: '官方公告'},
        { type: 'dynamic', name: '平台动态'},
        { type: 'news', name: '行业资讯'},
        { type: 'recruit', name: '招贤纳士'},
        { type: 'contact', name: '联系我们'},
      ]
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
  },
  mounted () {
   this.setBreadcrumbs()
  },
  watch: {
    '$route': 'setBreadcrumbs'
  },
  methods: {
    // 设置面包导航文字
    setBreadcrumbs () {
      var path = this.$route.path;
      for (var i = this.narArr.length - 1; i >= 0; i--) {
        if(path.indexOf(this.narArr[i].type) > 0){
          this.breadcrumbs = this.narArr[i].name;
        }
      };
    }
  }

}
</script>
