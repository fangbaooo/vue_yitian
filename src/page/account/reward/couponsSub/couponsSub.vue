<template>
<div class="p_jiluword relative">
    <div class="coupons_total" v-if="currentTab===0">可用代金券：<span class="major">{{paperNum}}</span>元</div>
    <div class="coupons_total" v-if="currentTab===1">已使用代金券：<span class="major">{{paperNum}}</span>元</div>
    <div class="coupons_total" v-if="currentTab===2">已过期代金券：<span class="major">{{paperNum}}</span>元</div>

    <ul class="s_tab js_voucher">
      <li v-for="(item, index) in tabs" @click="toggle(index, item.view)" :class="{'selected': index == currentTab}">{{item.type}}</li>
    </ul>
    <component :is="currentView" @showPaper="computePaper"></component>

    <div class="lh24 mb20 pt20" style="border-top: 1px dashed #ddd">
      <p class="bold">代金券使用说明：</p>
      <p class="mt10">1、什么是代金券？</p>
      <p>代金券是益田理财赠与用户的电子优惠券，在其有效期内，可用于抵扣投资金额，不支持提现。</p>
      <p class="mt10">2、代金券使用范围？</p>
      <p>每款产品的优惠不同，针对不同产品的投资，可抵扣相应的投资金额。</p>
      <p class="mt10">3、如何使用代金券？</p>
      <p>代金券可以合并或拆分使用，最小可用金额10元。由于每个产品代金券使用规则不同，为了方便您操作，您只需输入购买产品的份数，系统将自动为您计算出本次投资代金券可抵扣的金额，点击“立即投资”并确认，代金券即使用成功。</p>
    </div>
  </div>
</template>
<script>
import couponsSubList from "./couponsSubList"
import couponsSubUsed from "./couponsSubUsed"
import couponsSubExpire from "./couponsSubExpire"
export default {
  components: {
    couponsSubList,
    couponsSubUsed,
    couponsSubExpire
  },
  data () {
    return {
      paperNum: 0,
      currentTab: 0,
      currentView: couponsSubList,
      tabs: [
        {
          type: "我的代金券",
          view: couponsSubList
        },
        {
          type: "已使用",
          view: couponsSubUsed
        },
        {
          type: "已过期",
          view: couponsSubExpire
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
