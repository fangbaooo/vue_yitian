<template>
  <div class="p_sylistbox">
    <h2 class="p_sytitle">
        <span class="fl"><em>益理财</em></span>
        <a href="/ylcHome" class="fr ylc-more"><i>+</i> <span class="p-vm">更多</span></a>
    </h2>
    <ul class="p_syinlist">
      <li v-for="item in list">
        <table class="p_zhintable">
          <tbody>
            <tr height="48">
              <td colspan="6">
                <a class="p_zhintit" :href="item.link">{{item.name}}</a>
                <span class="p_zhsubtit">发布时间：{{item.date}}</span>
              </td>
            </tr>
            <tr height="48">
              <td width="15%">
                <span class="p_zhlilv"><em>{{item.apr}}</em>%</span>
              </td>
              <td width="15%">
                <span class="fz24 co333">{{item.period}}</span>个月
              </td>
              <td width="20%">
                <span class="fz24 co333">{{item.totalAmount}}</span> 元
              </td>
              <td width="20%">
                <span class="fz24 co333">{{item.ableAmount}}</span> 元
              </td>
              <td width="20%">
                <span class="s_progress left">
                  <span class="s_progress-bar" :style="{width:item.percent+'%'}"></span>
                </span>
                <span class="s_progress-value left">{{item.percent}}%</span>
              </td>
              <td rowspan="2" style="vertical-align: top">
                <input type="button" value="立即投资" class="p_biaobtn btn" @click="open(item.link)"> 
              </td>
            </tr>
            <tr height="26">
              <td>预期年化收益</td>
              <td>投资期限</td>
              <td>募资总额</td>
              <td>可投金额</td>
              <td>投资进度</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  methods: {
    open (link) {
      this.$router.push(link)
    }
  }
}
</script>
<style scoped>

</style>
