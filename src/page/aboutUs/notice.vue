<template>
	<div class="p_abright">
		<h3>官方公告</h3>
		<div class="p_abwordbox">
			<ul class="p_mtlist clr">
				<router-link v-for="item in list.page" tag="li" key="item.id" :to="{ name: 'newsDetail', params: { id: item.id }}" class="clr">
					<a><i class="ico"></i>{{item.text}}</a><span>{{item.date}}</span>
				</router-link>
			</ul>	
			<div class="xf_wylc_page xf_cfzx_page s_biaopage">
				<pagination :page-no="pageNo" :current-index.sync="currentPage" @pagechange="requestData()"></pagination>
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
      pageNo: 2,
      list: {
        page: [
          {
            id: '11',
            text: '关于益田理财最低提现金额调整公告',
            date: '2017-05-16'
          },{
            id: '12',
            text: '关于IOS系统充值恢复的通知',
            date: '2017-05-16'
          },{
            id: '13',
            text: '关于IOS系统充值维护的通知',
            date: '2017-05-11'
          },{
            id: '14',
            text: '关于益田理财最低提现金额调整公告',
            date: '2017-05-08'
          },{
            id: '15',
            text: '关于益田理财最低提现金额调整公告',
            date: '2017-04-25'
          },{
            id: '16',
            text: '关于益田理财最低提现金额调整公告',
            date: '2017-04-01'
          },{
            id: '17',
            text: '关于益田理财最低提现金额调整公告',
            date: '2017-05-16'
          },{
            id: '18',
            text: '关于益田理财最低提现金额调整公告',
            date: '2017-05-16'
          },{
            id: '19',
            text: '关于益田理财最低提现金额调整公告',
            date: '2017-05-16'
          },{
            id: '20',
            text: '关于益田理财最低提现金额调整公告',
            date: '2017-05-16'
          }
          
        ],
        total: 11
      }
    }
  },
  mounted (){
    this.requestData();
  },
  methods: {
    toggle (index, view) {
      this.currentTab = index;
      this.currentView = view;
    }, 
    requestData () {
      // 在这里使用ajax或者fetch将对应页传过去获取数据即可
      //this.list = list
      //this.pageNo = dataList.pageNo
    }
  }
}
</script>
