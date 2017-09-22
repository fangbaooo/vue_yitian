<template>
<div id="toast">
    <div class="mask-transparent"></div>
    <div class="toast_con">
        <span class="toast_con_p"><i class=" icon" :class="className"></i>{{text}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'Toast',
  props: ["type", "text"],
  computed: {
    className () {
      return "icon_"+ this.type
    }
  }
}
</script>

<style>
.toast_con{ position: fixed; left: 50%; top: 50%; z-index: 5001; margin: -50px 0 0 -125px; text-align:center; padding:35px 20px; min-width:250px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 5px rgba(0,0,0,.3);}
.toast_con_p{position:relative;font-size:16px;line-height:33px;clear:#333;padding-left:48px;display:inline-block;text-align:left}
.toast_con_p i{width:32px;height:32px;left:0!important;top:0}
.toast_con_p i.icon_success{background-position:-355px 0}
.toast_con_p i.icon_error{background-position:-388px 0}
.toast_con_p i.icon_warning{background-position:-314px -186px}
</style>