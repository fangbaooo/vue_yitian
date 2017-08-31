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
                    <router-link to="/aboutUs/aboutCompany" tag="li" active-class="cur" exact @click.native="navEvent('公司简介')"><a>公司简介</a></router-link>
                    <router-link to="/aboutUs/partner" tag="li" active-class="cur" exact @click.native="navEvent('合作伙伴')"><a>合作伙伴</a></router-link>
                    <router-link to="/aboutUs/team" tag="li" active-class="cur" exact @click.native="navEvent('团队风采')"><a>团队风采</a></router-link>
                    <router-link to="/aboutUs/notice" tag="li" active-class="cur" exact @click.native="navEvent('官方公告')"><a>官方公告</a></router-link>
                    <router-link to="/aboutUs/dynamic" tag="li" active-class="cur" exact @click.native="navEvent('平台动态')"><a>平台动态</a></router-link>
                    <router-link to="/aboutUs/news" tag="li" active-class="cur" exact @click.native="navEvent('行业资讯')"><a>行业资讯</a></router-link>
                    <router-link to="/aboutUs/recruit" tag="li" active-class="cur" exact @click.native="navEvent('招贤纳士')"><a>招贤纳士</a></router-link>
                    <router-link to="/aboutUs/contact" tag="li" active-class="cur" exact @click.native="navEvent('联系我们')"><a>联系我们</a></router-link>
                </ul>
            </div>
             <keep-alive>
              <router-view></router-view>
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
    }
  },
  methods: {
    // 设置面包导航文字
    setBreadcrumbs (name) {
      this.breadcrumbs = name;
    },
    // 绑定导航点击事件
    navEvent (name) {
      this.setBreadcrumbs(name);
    },
  }

}
</script>
