<template>
	<div class="p_abright">
		<h3>{{title}}</h3>
		<div class="p_abwordbox">
			<ul class="p_mtlist clr">
				<router-link v-for="item in list" tag="li" key="item.id" :to="item.link" class="clr">
					<a><i class="ico"></i>{{item.text}}</a><span>{{item.date}}</span>
				</router-link>
			</ul>	
			<div class="xf_wylc_page xf_cfzx_page s_biaopage">
				<pagination :page-no="pageNo" :current-index.sync="currentPage" @pagechange="getData()"></pagination>
			</div>	    
		</div>
	</div>
</template>
<script>
import pagination from "@/components/base/pagination"
export default {
  components: {
    pagination
  },
  data () {
    return {
      currentPage: 1,
      pageNo: 1,
      title: '',
      newsType: [
      	{ type: 'news', text: '行业资讯', link: '/newsList'},
      	{ type: 'dynamic', text: '平台动态', link: '/dynamicList'},
      	{ type: 'notice', text: '官方公告', link: '/noticeList'}
      ],
      list: [],
    //   list: [
    //     {
		  // id: '11',
		  // text: '关于益田理财最低提现金额调整公告',
		  // date: '2017-05-16'
    //     }
    //   ]
    }
  },
  mounted (){
    this.getInfo()
  },
  methods: {
    toggle (index, view) {
      this.currentTab = index
      this.currentView = view
    }, 
    getData (url) {
      this.$http({
        url: url,
        method: 'get',
      }).then(res => {
        this.list = this.limitList(res.data, 10)
        this.pageNo = parseInt(res.data.length/10) + 1
      })
    },
    limitList (data, num) {
      if (data.length > num ) {
        data.splice(num)
      }
      return data
    },
    getInfo () {
    	let newsType = this.newsType,
    	    path = this.$route.path
    	for (var i = 0; i < newsType.length; i++) {
    		if (path.indexOf(newsType[i].type) > -1) {
    			this.title = newsType[i].text
    			this.getData(newsType[i].link)
    		}
    	};
    }
  }
}
</script>
