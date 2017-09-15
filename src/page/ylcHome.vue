<template>
  <div class="s_center clr mb30">
    <div class="s_bread">
      <router-link to="/" class="s_breadindex"><i class="icon"></i>首页</router-link>
      <i class="s_breadarrow">&gt;</i> <span>我要理财</span>
    </div>
    <ylc-list></ylc-list>
  </div>
</template>
<script>
import ylcList from "./ylcList"
export default {
  components: {
    ylcList
  }
  
}
</script>
<style>
.ylc-more{ display: none;}
</style>