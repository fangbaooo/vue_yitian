<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle">
        <span class="fl">交易记录</span>
      </h4>

      <ul class="xf_jkzlshrz_search clr">
        <li>
          <select name="type" id="payTypeStr" class="xf_membill_selectAge xf_memjkzlshrz_selectAge">   
            <option value="0" selected="selected">全部</option>   
            <option value="1">充值</option>   
            <option value="2">提现</option>
            <option value="3">服务费</option> 
            <option value="4">账单还款</option> 
            <option value="5">账单收入</option> 
            <option value="8">投资</option> 
            <option value="9">回款</option>
            <option value="10">现金奖励</option>    
          </select>
          <input name="currPage"  type="hidden" id="currPage">
          <input name="beginTime" value="" type="text" id="startDate"  class="laydate-icon" onclick="laydate()" style="cursor:pointer;width:100px;" />
          <span class="xf_jkzlshrz_searspantwo">——</span>
          <input name="endTime" value="" type="text"  id="endDate"  class="laydate-icon" onclick="laydate()" style="cursor:pointer;width:100px;"/>
          <input type="submit" value="查 看" class="xf_membill_button_yhm xf_membill_button_more">

          <!-- 下载数据 -->
          <input type="button" onClick="reportRecord();" class="xf_membill_button_yhm xf_membill_button_more" value="下载数据">
        </li>
      </ul>

      <!-- 搜索结果 -->
      <div class="xf_membill_search_jg">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="xf_membill_acc_viewcpms">
          <tbody>
            <tr>
              <th align="center" width="30">序号</th>
                <th width="110">时间</th>
                <th align="center" width="90">收入</th>
                <th width="100">支出</th>
                <th width="100">可用余额</th>
                <th width="100">冻结金额</th>
                <th width="200">明细</th>
            </tr>
            <tr v-for="(item, index) in dealRecord.page">
              <td align="center">{{index+1}}</td>
              <td align="center">{{item.time}}</td>
              
              <td align="center" v-if="item.type == 1">{{item.amount}}</td>
              <td align="center" v-if="item.type == 1">0</td>
              
              <td align="center" v-if="item.type == 2">0</td>
              <td align="center" v-if="item.type == 2">{{item.amount}}</td>

              <td align="center" v-if="item.type == 3">0</td>
              <td align="center" v-if="item.type == 3">{{item.amount}}</td>

              <td align="center" v-if="item.type == 4">{{item.amount}}</td>
              <td align="center" v-if="item.type == 4">0</td>

              <td align="center">{{item.balance}}</td>
              <td align="center" v-if="item.type == 1 || item.type == 4">0</td>
              <td align="center" v-else-if="item.type == 2 && (item.operation == 308 || item.operation == 325)">0</td>
              <td align="center" v-else-if="item.type == 3||item.type == 2">{{item.amount}}</td>
              <td align="center" v-else>{{item.freeze}}</td>
              <td align="center">{{item.summary}}</td>
            </tr>
          </tbody>
        </table>
        <!-- 分页器 -->
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
  page: [
    {
      time: '2017-04-17 16:00',
      type: 1,
      amount: '2000.00',
      user_balance: '10200',
      balance: '203220',
      freeze: '200',
      operation: 308,
      recieve_amount: 3,
      name: 0,
      summary: '提现审核通过（1-3个工作日到账）'
    },
    {
      time: '2017-04-17 11:20',
      type: 2,
      amount: '2000.00',
      user_balance: '10200',
      balance: '203220',
      freeze: '200',
      operation: 308,
      summary: '冻结提现金额(包含手续费0.0元)'
    },
    {
      time: '2017-04-17 11:20',
      type: 2,
      amount: '2000.00',
      user_balance: '10200',
      balance: '203220',
      freeze: '200',
      operation: 308,
      summary: '冻结提现金额(包含手续费0.0元)'
    },
    {
      time: '2017-04-17 11:20',
      type: 2,
      amount: '2000.00',
      user_balance: '10200',
      balance: '203220',
      freeze: '200',
      operation: 308,
      summary: '冻结提现金额(包含手续费0.0元)'
    }
  ],
  pageNo: 10
}
export default {
  components: {
    pagination
  },
  data () {
    return {
      currentPage: 1,
      pageNo: 10,
      dealRecord: {}
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
      this.dealRecord = dataList
      this.pageNo = dataList.pageNo
    }
  }
}
</script>
