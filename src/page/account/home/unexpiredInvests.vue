<template>
  <div class="p_zhxxkword">
    <table class="p_zhxktable" v-if="unexpiredInvests.page != null && unexpiredInvests.size > 0">
      <thead>
        <tr height="33">
          <th>投资日期</th>
          <th>项目名称</th>
          <th>投资金额(元)</th>
          <th>年化率</th>
          <th>起息日</th>
          <th>预期收益(元)</th>
          <th>项目期限</th>
          <th>状态</th>
          <!-- <th>操作</th> -->
        </tr>
      </thead>
      <tbody>
        <tr height="39" v-for="unexpired in unexpiredInvests.page">
          <td>{{unexpired.time}}</td>
          <td>{{unexpired.title}}</td>
          <td>{{unexpired.amount}}</td>
          <td>{{unexpired.apr}}%</td>
          <td>{{unexpired.real_invest_expire_time}}</td>
          <td>{{unexpired.receive_interest_ing}}</td>
          <td>{{unexpired.period}}
            <span v-if="unexpired.period_unit ==-1">年</span>
            <span v-else-if="unexpired.period_unit ==0">个月</span>
            <span v-else-if="unexpired.period_unit ==1">天</span>
          </td>
          <td>
            <span v-if="unexpired.status == 2">募资中</span>
            <span v-else-if="unexpired.status == 3">还款中</span>
            <span v-else-if="unexpired.status == 4">已结清</span>
            <span v-else-if="unexpired.status == 5">流标</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="p_nonejilu" v-else>
      <!-- <img src="@{'public/images/p-smile.png'}" alt="" /> -->
      <p>暂无记录</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      unexpiredInvests: {
        page: [
          {
            time: '2016-03-08',
            title: '益理财YLC2016030801',
            amount: '200.00',
            apr: '9.00',
            real_invest_expire_time: '2016-03-08',
            receive_interest_ing: '4.50',
            period: 3,
            period_unit: 0,
            status: 2
          },
          {
            time: '2016-03-08',
            title: '益理财YLC2016030802',
            amount: '1000.00',
            apr: '9.00',
            real_invest_expire_time: '2016-03-08',
            receive_interest_ing: '4.50',
            period: 6,
            period_unit: 0,
            status: 3
          }
        ],
        size: 2
      }
    }
  }
}
</script>
