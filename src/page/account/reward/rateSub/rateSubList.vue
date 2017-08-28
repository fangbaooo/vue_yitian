<template>
  <div class="p_jiluword s_tab_con">
    <div v-if="list.page.length > 0">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="p_jilutable p_wordmore">
        <tbody>
          <tr height="40">
            <th>序号</th>
            <th>加息券(年化)</th>
            <th>领取日期</th>
            <th>到期日期</th>
            <th>状态</th>
            <th>使用金额条件</th>
            <th>使用期限条件</th>
            <th>获得来源</th>
          </tr>
          <tr v-for="(item, index) in list.page">
            <td height="50">{{index+1}}</td>
            <td>{{item.apr}}%</td>
            <td>{{item.getDate}}</td>
            <td>{{item.expireDate}}</td>
            <td>{{item.status}}</td>
            <td>{{item.amountCondition}}</td>
            <td>{{item.deadlineCondition}}</td>
            <td>{{item.source}}</td>
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
        page: [
          {
            apr: '1.0',
            getDate: '2017-01-31',
            expireDate: '2017-07-31',
            status: '可用',
            amountCondition: '无限制',
            deadlineCondition: '无限制',
            source: '单笔投资送'
          },
          {
            apr: '2.0',
            getDate: '2017-01-31',
            expireDate: '2017-07-31',
            status: '可用',
            amountCondition: '无限制',
            deadlineCondition: '无限制',
            source: '单笔投资送'
          },
          {
            apr: '1.0',
            getDate: '2017-01-31',
            expireDate: '2017-07-31',
            status: '可用',
            amountCondition: '无限制',
            deadlineCondition: '无限制',
            source: '单笔投资送'
          },
          {
            apr: '0.5',
            getDate: '2017-01-31',
            expireDate: '2017-07-31',
            status: '可用',
            amountCondition: '无限制',
            deadlineCondition: '无限制',
            source: '单笔投资送'
          },
          {
            apr: '1.0',
            getDate: '2017-01-31',
            expireDate: '2017-07-31',
            status: '可用',
            amountCondition: '无限制',
            deadlineCondition: '无限制',
            source: '单笔投资送'
          }
        ],
        total: 5
      }
    }
  },
  mounted (){
    this.requestData();
    this.$emit('showPaper', this.list.total);
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
