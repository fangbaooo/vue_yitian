<template>
  <div class="p_jiluword s_tab_con">
    <div v-if="list.page.length > 0">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="p_jilutable p_wordmore">
        <tbody>
          <tr height="40">
            <th>序号</th>
            <th>金额(元)</th>
            <th>发放日期</th>
            <th>过期日期</th>
            <th>状态</th>
            <th>备注</th>
          </tr>
          <tr v-for="(item, index) in list.page">
            <td height="50">{{index+1}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.provideDate}}</td>
            <td>{{item.expireDate}}</td>
            <td>{{item.status}}</td>
            <td>{{item.remark}}</td>
          </tr>
        </tbody>
      </table>
      <div class="xf_wylc_page xf_cfzx_page s_biaopage">
        <pagination :page-no="pageNo" :current-index.sync="currentPage" @pagechange="requestData()"></pagination>
      </div>
    </div>
    <div class="p_nonejilu" v-else>
      <p>暂无数据</p>
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
      list: {
        page: [],
        total: 0,
        expire: 0
      }
    }
  },
  mounted (){
    this.requestData();
    this.$emit('showPaper', this.list.expire);
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
