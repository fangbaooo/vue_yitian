<template>
  <div class="p_zhright">
    <div class="p_jilumain relative">
      <ul class="s_biaomenu">
          <li v-for="(item, index) in tabs" @click="toggle(index, item.view)" :class="{'selected': index == currentTab}">{{item.type}}</li>
      </ul>
      <div class="p_jilucontent">
        <component :is="currentView"></component>
      </div>
    </div>
  </div>
</template>
<script>
import couponsSub from "./couponsSub/couponsSub"
import rateSub from "./rateSub/rateSub"
export default {
  components: {
    couponsSub,
    rateSub
  },
  data () {
    return {
      currentTab: 0,
      currentView: couponsSub,
      tabs: [
        {
          type: "代金券",
          view: couponsSub
        },
        {
          type: "加息券",
          view: rateSub
        }
      ]
    }
  },
  methods: {
    toggle (index, view) {
      this.currentTab = index;
      this.currentView = view;
    }
  }
}
</script>
