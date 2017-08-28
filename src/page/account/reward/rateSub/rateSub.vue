<template>
<div class="p_jiluword relative">
    <div class="coupons_total" v-if="currentTab===0">可用加息券：<span class="major">{{paperNum}}</span>张</div>
    <div class="coupons_total" v-if="currentTab===1">已使用加息券：<span class="major">{{paperNum}}</span>张</div>
    <div class="coupons_total" v-if="currentTab===2">已过期加息券：<span class="major">{{paperNum}}</span>张</div>

    <ul class="s_tab js_voucher">
      <li v-for="(item, index) in tabs" @click="toggle(index, item.view)" :class="{'selected': index == currentTab}">{{item.type}}</li>
    </ul>
    <component :is="currentView" @showPaper="computePaper"></component>

    <div class="lh24 mb20 pt20" style="border-top: 1px dashed #ddd">
      <p class="bold">加息券使用说明：</p>
      <p class="mt10">1、什么是加息券？</p>
      <p>加息券是益田理财对广大会员的一种优惠和回馈。</p>
      <p class="mt10">2、加息券使用范围？</p>
      <p>针对不同产品的投资，只需符合相应的使用条件即可使用，使用后将获得相应的加息奖励金额。</p>
      <p class="mt10">3、如何使用加息券？</p>
      <p>加息券需在投资项目范围内使用；应在截止日期前使用，过期作废，每张加息券仅能一次性使用，不可拆分，不可转让。</p>
      <p class="mt10">4、加息券计算公式？</p>
      <p>加息奖励 = (投资金额 * 加息利率 / 12) * 期数（计算金额小于1分则不记录到现金奖）。</p>
      <p class="mt10">最终解释权归益田理财所有</p>
    </div>
  </div>
</template>
<script>
import rateSubList from "./rateSubList"
import rateSubUsed from "./rateSubUsed"
import rateSubExpire from "./rateSubExpire"
export default {
  components: {
    rateSubList,
    rateSubUsed,
    rateSubExpire
  },
  data () {
    return {
      paperNum: 0,
      currentTab: 0,
      currentView: rateSubList,
      tabs: [
        {
          type: "我的加息券",
          view: rateSubList
        },
        {
          type: "已使用",
          view: rateSubUsed
        },
        {
          type: "已过期",
          view: rateSubExpire
        }
      ]
    }
  },
  methods: {
    toggle (index, view) {
      this.currentTab = index;
      this.currentView = view;
    },
    computePaper (num) {
      this.paperNum = num;
    }
  }
}
</script>
