<template>
  <div class="p_jiluword">
    <div v-if="list.page.length > 0">
      <ul class="xf_jkzlshrz_search clr" style="padding-top: 0">
        <li>
          <select name="status" id="statusylc" class="xf_membill_selectAge xf_memjkzlshrz_selectAge">   
            <option value="" selected="selected">全部</option>   
            <option value="4">已还款</option>   
            <option value="3">还款中</option>
            <option value="2">募资中</option>   
          </select>
          <input name="currPage"  type="hidden" id="currPage">
          <input name="beginTime" value="" type="text" id="startDate"  class="laydate-icon" onclick="laydate()" style="cursor:pointer;width:100px;" />
          <span class="xf_jkzlshrz_searspantwo">——</span>
          <input name="endTime" value="" type="text"  id="endDate"  class="laydate-icon" onclick="laydate()" style="cursor:pointer;width:100px;"/>
          <input type="submit" value="查 看" class="xf_membill_button_yhm xf_membill_button_more">
        </li>
      </ul>
      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="p_jilutable p_wordmore">
        <tbody>
          <tr height="40">
           <th>序号</th>
           <th>投资日期</th>
           <th>产品名称</th>
           <th>投资本金</th>
           <th>收益率</th>
           <th>投资期限</th>
           <th>利息总额</th>
           <th>下一回款日</th>
           <th>状态</th>
           <th>协议</th>
         </tr>
          <tr v-for="(item, index) in list.page">
            <td height="50">{{index+1}}</td>
            <td>{{item.investDate}}</td>
            <td>{{item.name}}</td>
            <td>{{item.investCapital}}</td>
            <td>{{item.yieldRate}}%</td>
            <td>{{item.deadline}}</td>
            <td>{{item.interest}}</td>
            <td>{{item.nextPayments}}</td>
            <td @click="edit(item, index)">{{item.status}}</td>
            <td>{{item.protocol}}</td>
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
    <edit-item id="editItemPop" @submit="editOK" :record="record"></edit-item>
  </div>
</template>
<script>
import pagination from "@/components/base/pagination"
import editItem from "./editItem"
export default {
  components: {
    pagination,
    editItem
  },
  data () {
    return {
      currentPage: 1,
      pageNo: 1,
      list: {
        page: [
          {
            investDate: '2017-04-20',
            name: '益理财YLC2016040025',
            investCapital: '30,200',
            yieldRate: '8.00',
            deadline: '1个月',
            interest: '201.33',
            nextPayments: '2017-05-20',
            status: '已还款',
            protocol: '241',
          },{
            investDate: '2017-04-20',
            name: '益理财YLC2016040025',
            investCapital: '30,200',
            yieldRate: '8.00',
            deadline: '1个月',
            interest: '201.33',
            nextPayments: '2017-05-20',
            status: '已还款',
            protocol: '241',
          },{
            investDate: '2017-04-20',
            name: '益理财YLC2016040025',
            investCapital: '30,200',
            yieldRate: '8.00',
            deadline: '1个月',
            interest: '201.33',
            nextPayments: '2017-05-20',
            status: '已还款',
            protocol: '241',
          },{
            investDate: '2017-04-20',
            name: '益理财YLC2016040025',
            investCapital: '30,200',
            yieldRate: '8.00',
            deadline: '1个月',
            interest: '201.33',
            nextPayments: '2017-05-20',
            status: '已还款',
            protocol: '241',
          }
        ],
        total: 4
      },
      record: {
            investDate: '2017-04-20',
            name: '益理财YLC2016040025',
            investCapital: '30,200',
            yieldRate: '8.00',
            deadline: '1个月',
            interest: '201.33',
            nextPayments: '2017-05-20',
            status: '已还款',
            protocol: '241',
          },
      recordIndex: 0,
      modifyItemPop: null
    }
  },
  mounted (){
    this.requestData();
  },
  methods: {
    requestData () {
      // 在这里使用ajax或者fetch将对应页传过去获取数据即可
      //this.list = list
      //this.pageNo = dataList.pageNo
    },
    edit(item, index) {
      this.record = this.copy({},item);
      this.recordIndex = index;
      let id = document.getElementById("editItemPop");
      this.modifyItemPop = dialog({
        title: "修改记录",
        content: id,
        width: 600
      });
      this.modifyItemPop.showModal();
    },
    editOK () {
      this.list.page.splice(this.recordIndex, 1, this.record)
      this.modifyItemPop.close().remove();
    },
    copy (newObject, oldObject) {
      for (var prop in oldObject) {
        if (oldObject.hasOwnProperty(prop)) {
          newObject[prop] = oldObject[prop];
        }
      };
      return newObject
    }
  }
}
</script>
