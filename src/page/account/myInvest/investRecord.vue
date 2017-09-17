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
import Dailog from "Dailog";
import ylcList from "./sub/ylcList"
import hlcList from "./sub/hlcList"
export default {
  components: {
    ylcList,
    hlcList
  },
  data () {
    return {
      currentTab: 0,
      currentView: ylcList,
      tabs: [
        {
          type: "益理财",
          view: ylcList
        },
        {
          type: "惠理财",
          view: hlcList
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
