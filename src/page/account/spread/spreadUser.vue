<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle mb20">
        <span class="fl">已邀请的好友列表</span>
        <em class="fr c_red fz12" style="color:#ff3329">已获得代金券{{coupons}}元，已获得现金奖{{cash}}元</em>
      </h4>
      <div class="p_jiluword">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="p_jilutable p_wordmore">
          <tbody>
            <tr height="40">
              <th>序号</th>
              <th>用户账号</th>
              <th>注册时间</th>
              <th>实名认证</th>
              <th>首次投资时间</th>
              <th>实名奖励</th>
              <th>投资奖励</th>
            </tr>
            <tr v-for="(item, index) in list.page">
              <td height="50">{{index+1}}</td>
              <td>{{item.account}}</td>
              <td>{{item.regTime}}</td>
              <td>{{item.realname}}</td>
              <td>{{item.firstInvest}}</td>
              <td>{{item.realnameReward}}</td>
              <td>{{item.investReward}}</td>
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
      account: '159****3333',
      regTime: '2017-04-17 16:00',
      realname: '哈哈',
      firstInvest: '100',
      realnameReward: '100元代金券',
      investReward: '20'
    },
    {
      account: '188****5132',
      regTime: '2017-04-17 16:00',
      realname: 'kevin',
      firstInvest: '',
      realnameReward: '100元代金券',
      investReward: '10'
    },
    {
      account: '159****3333',
      regTime: '2017-04-17 16:00',
      realname: '哈哈',
      firstInvest: '100',
      realnameReward: '100元代金券',
      investReward: ''
    },
    {
      account: '159****3333',
      regTime: '2017-04-17 16:00',
      realname: '哈哈',
      firstInvest: '100',
      realnameReward: '100元代金券',
      investReward: ''
    },
    {
      account: '159****3333',
      regTime: '2017-04-17 16:00',
      realname: '哈哈',
      firstInvest: '100',
      realnameReward: '100元代金券',
      investReward: ''
    }
  ]
}
export default {
  components: {
    pagination
  },
  data () {
    return {
      coupons: 900,
      cash: 0,
      currentPage: 1,
      pageNo: 2,
      list: {}
    }
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
