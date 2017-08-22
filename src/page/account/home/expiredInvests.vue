<template>
  <div class="p_zhxxkword">
    <table class="p_zhxktable" v-if="expiredInvests.page != null && expiredInvests.size > 0">
      <thead>
        <tr height="33">
          <th>投资日期</th>
          <th>项目名称</th>
          <th>投资金额(元)</th>
          <th>年化率</th>
          <th>起息日</th>
          <th>收益(元)</th>
          <th>项目期限</th>
          <th>状态</th>
          <!-- <th>操作</th> -->
        </tr>
      </thead>
      <tbody>
        <tr height="39" v-for="expired in expiredInvests.page">
          <td>{{expired.time}}</td>
          <td>{{expired.title}}</td>
          <td>{{expired.amount}}</td>
          <td>{{expired.apr}}%</td>
          <td>{{expired.real_invest_expire_time}}</td>
          <td>{{expired.receive_interest_ed}}</td>
          <td>{{expired.period}}
            <span v-if="expired.period_unit ==-1">年</span>
            <span v-else-if="expired.period_unit ==0">个月</span>
            <span v-else-if="expired.period_unit ==1">天</span>
          </td>
          <td>
            <span v-if="expired.status == 2">募资中</span>
            <span v-else-if="expired.status == 3">还款中</span>
            <span v-else-if="expired.status == 4">已结清</span>
            <span v-else-if="expired.status == 5">流标</span>
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
      expiredInvests: {
        page: [
          {
            time: '2016-03-06',
            title: '益理财YLC2016030729',
            amount: '2000.00',
            apr: '9.00',
            real_invest_expire_time: '2016-03-06',
            receive_interest_ed: '4.50',
            period: 3,
            period_unit: 0,
            status: 4
          },
          {
            time: '2016-03-06',
            title: '益理财YLC2016030729',
            amount: '10000.00',
            apr: '10.00',
            real_invest_expire_time: '2016-03-06',
            receive_interest_ed: '100.50',
            period: 6,
            period_unit: 0,
            status: 4
          },
          {
            time: '2016-03-06',
            title: '益理财YLC2016030729',
            amount: '25000.00',
            apr: '10.00',
            real_invest_expire_time: '2016-03-06',
            receive_interest_ed: '240.00',
            period: 6,
            period_unit: 0,
            status: 4
          }
        ],
        size: 3
      }
    }
  }
}
</script>
