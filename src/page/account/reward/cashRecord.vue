<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle mb20">
        <span class="fl">现金奖励列表</span>
        <em class="fr c_red fz12" style="color:#ff3329">累计获得现金奖励{{cashRecord.total}}元</em>
      </h4>
      <div class="p_jiluword">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="p_jilutable p_wordmore">
          <tbody>
            <tr height="40">
              <th>序号</th>
              <th>金额</th>
              <th>日期</th>
              <th>备注</th>
            </tr>
            <tr v-for="(item, index) in cashRecord.page">
              <td height="50">{{index+1}}</td>
              <td>{{item.amount}}</td>
              <td>{{item.time}}</td>
              <td>{{item.remark}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="xf_wylc_page xf_cfzx_page s_biaopage">
        <pagination :page-no="pageNo" :current-index.sync="currentPage" @pagechange="requestData()"></pagination>
      </div>
    </div>
  </div>
</template>
<script>
import laydate from "laydate"
import pagination from "@/components/base/pagination"
var dataList = {
  total: 300.05,
  page: [
    {
      time: '2017-04-17 16:00',
      amount: '2000.00',
      remark: '加息券奖励'
    },
    {
      time: '2017-04-17 11:20',
      amount: '2000.00',
      remark: '活动奖励'
    },
    {
      time: '2017-04-17 11:20',
      amount: '2000.00',
      remark: '活动奖励'
    },
    {
      time: '2017-04-17 11:20',
      amount: '2000.00',
      remark: '活动奖励'
    },
    {
      time: '2017-04-17 16:00',
      amount: '2000.00',
      remark: '加息券奖励'
    },
    {
      time: '2017-04-17 11:20',
      amount: '2000.00',
      remark: '活动奖励'
    },
    {
      time: '2017-04-17 11:20',
      amount: '2000.00',
      remark: '活动奖励'
    },
    {
      time: '2017-04-17 11:20',
      amount: '2000.00',
      remark: '活动奖励'
    }
  ]
}
export default {
  components: {
    pagination
  },
  data () {
    return {
      currentPage: 1,
      pageNo: 2,
      cashRecord: {}
    }
  },
  watch: {
    currentPage: 'requestData'
  },
  mounted () {
    this.requestData()
  },
  methods: {
    requestData () {
      // 在这里使用ajax或者fetch将对应页传过去获取数据即可
      this.cashRecord = dataList
    }
  }
}
</script>
