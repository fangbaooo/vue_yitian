<template>
  <div class="p_jiluword s_tab_con">
    <div v-if="list.page.length > 0">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="p_jilutable p_wordmore">
        <tbody>
          <tr height="40">
            <th>序号</th>
            <th>使用金额(元)</th>
            <th>使用时间</th>
            <th>标的名称</th>
            <th>状态</th>
            <th>备注</th>
          </tr>
          <tr v-for="(item, index) in list.page">
            <td height="50">{{index+1}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.date}}</td>
            <td>{{item.name}}</td>
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
      pageNo: 2,
      list: {
        page: [
          {
            amount: '10',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '50',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '20',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '10',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '10',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '50',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '20',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '10',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '10',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          },
          {
            amount: '50',
            date: '2017-02-28',
            name: '惠理财HLC2017020080',
            status: '已使用',
            remark: '活动赠送',
          }
        ],
        total: 12,
        used: 270
      }
    }
  },
  mounted (){
    this.requestData();
    this.$emit('showPaper', this.list.used);
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
