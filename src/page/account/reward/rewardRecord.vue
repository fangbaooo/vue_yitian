<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle mb20">
        <span class="fl">活动奖品</span>
      </h4>

      <!-- 搜索结果 -->
      <div class="p_jiluword">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="p_jilutable p_wordmore">
          <tbody>
            <tr height="40">
              <th>序号</th>
              <th>奖品</th>
              <th>中奖时间</th>
              <th>备注</th>
            </tr>
            <tr v-for="(item, index) in cashRecord.page">
              <td height="50">{{index+1}}</td>
              <td>{{item.prize}}</td>
              <td>{{item.time}}</td>
              <td>{{item.remark}}</td>
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
      time: '2017-02-27 10:34:33',
      prize: '0.5%加息券',
      remark: '加息券奖励'
    },
    {
      time: '2017-02-27 10:30:20',
      prize: '1%加息券',
      remark: '加息券奖励'
    },
    {
      time: '2017-01-17 16:56:13',
      prize: 'U盘',
      remark: '一月活动'
    },
    {
      time: '2017-01-20 09:30:53',
      prize: '蓝牙音箱',
      remark: '一月活动'
    },
    {
      time: '2016-10-27 10:50:22',
      prize: '小米体重秤',
      remark: '十月活动'
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
      pageNo: 1,
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
