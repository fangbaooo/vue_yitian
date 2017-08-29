<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle mb20">
        <span class="fl">理财账单</span>
      </h4>
      <ul class="xf_jkzlshrz_search clr" style="padding-top: 0">
        <li>
          <select name="payType" id="payTypeStr" class="xf_membill_selectAge left">   
            <option value="0" selected="selected">全部</option>
              <option value="1">未收款</option>
              <option value="2">已收款</option>   
            </select>
            <select name="isOverType" class="xf_membill_selectAge left">   
             <option value="0" selected="selected">全部</option>   
             <option value="1">未逾期</option>   
             <option value="2">已逾期</option>   
           </select>
           <select name="keyType" class="xf_membill_selectAge left">   
             <option value="0" selected="selected">全部</option>   
             <option value="1">标题</option>   
           </select>
           <div class="left">
            <input name="key" value="" class="left" type="text" style="width:150px; padding:0 5px; border:1px solid #ccc; height:20px">
            <input type="button" value="搜索" class="left xf_membill_button_yhm" onclick="fromSubmit()">
          </div>
        </li>
      </ul>
      <div class="xf_membill_search_jg">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="xf_membill_acc_viewcpms">
          <tbody>
            <tr>
              <th align="center" width="20%">项目标题</th>
              <th align="center" width="15%">本期应收款金额</th>
              <th align="center" width="15%">是否逾期</th>
              <th align="center" width="10%">状态</th>
              <th align="center" width="20%">到期还款时间</th>
              <th align="center" width="20%">实际还款时间</th>
            </tr>
            <tr height="40" v-for="(item, index) in list.page">
              <td>{{item.title}}</td>
              <td>{{item.amount}}</td>
              <td>{{item.isOverdue}}</td>
              <td>{{item.status}}</td>
              <td>{{item.repaymentDate}}</td>
              <td>{{item.realRepaymentDate}}</td>
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
import pagination from "@/components/base/pagination"
var dataList = {
  page: [
    {
      title: '益理财YLC2016040017',
      amount: '20133.33',
      isOverdue: '否',
      status: '正常收款',
      repaymentDate: '2017-04-17',
      realRepaymentDate: '2017-04-17 16:00:05'
    },{
      title: '益理财YLC2016040017',
      amount: '20133.33',
      isOverdue: '否',
      status: '正常收款',
      repaymentDate: '2017-04-17',
      realRepaymentDate: '2017-04-17 16:00:05'
    },{
      title: '益理财YLC2016040017',
      amount: '20133.33',
      isOverdue: '否',
      status: '正常收款',
      repaymentDate: '2017-04-17',
      realRepaymentDate: '2017-04-17 16:00:05'
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
      list: {}
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
      this.list = dataList
    }
  }
}
</script>
