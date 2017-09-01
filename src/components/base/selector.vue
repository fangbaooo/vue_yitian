<template>
  <div class="fl select select-big fz12" style="width:195px">
    <span class="select-border js-select" @click="showSelector">
      <span class="select-text" data-value="">{{options[nowIndex].label}}</span>
      <span class="select-icon"><i class="select-icon-arrow"></i></span>
    </span>
    <div class="select-sub js-select-sub" v-show="isShow">
      <a href="javascript:;" v-for="(item, index) in options" @click="choose(index)">{{ item.label }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: [
        {label: '', value: 0}
      ]
    }
  },
  data () {
    return {
      isShow: false,
      nowIndex: 0
    }
  },
  methods: {
    showSelector () {
      this.isShow = !this.isShow;
    },
    choose(index) {
      this.nowIndex = index;
      this.isShow = false;
      this.$emit('on-change', this.options[this.nowIndex]);
    }
  }
}
</script>
<style>
.select-big .select-border{ height: 30px;}
.select-big .select-text{ padding: 5px;}
.select-big .select-icon{ padding: 6px 5px}
.select-big .select-sub{ top: 29px;}

/* select 下拉控件 */
.select{ position:relative; width: 100%; background-color: #fff;}
.select-border{ display:block; position:relative; width:100%; height:26px; border:1px solid #ced3d9; cursor:pointer ;background-color:#fff; box-sizing:border-box;}
.select-text{ box-sizing:border-box; display: block; position:absolute; right:0px; top:0px; z-index: 2; line-height: 18px; width: 100%; padding: 3px 5px; border:0; background: transparent; }
.select-icon{ position:absolute; right:0px; top:0px; display:block; width:16px; height:16px; padding:4px 5px; cursor:pointer; }
.select-icon-arrow{ display: block; width: 0; margin:6px 0 0 4px; border:4px solid #fff; border-width:5px 4px; border-top-color: #656565;}
.select-sub{ position:absolute; left:0; top:25px; z-index:100; width:100%; border:1px solid #ced3d9;  max-height: 280px; overflow-y:auto; background-color:#fff; box-sizing:border-box;}
.select-sub a{ display:block; height:26px; padding-left:6px; line-height:26px; color:#404040; text-decoration:none}
.select-sub a:hover, .select-sub a.selected-item{ color:#fff; background-color:#48a4fa}
</style>
