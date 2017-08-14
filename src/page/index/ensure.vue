<template>
  <div class="p_sysafe">
    <ul class="s_center clr p_sysafeul">
      <li v-for="item in json">
        <img :src="item.src" alt="" width="60" height="60" />
        <h6>{{item.title}}</h6>
        <div>{{item.des}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      json: [
        {
          title: '稳健投资',
          des: '精选优质项目',
          src: require('./sico01.png')
        },
        {
          title: '合理收益',
          des: '7%-13%预期年化收益',
          src: require('./sico02.png')
        },
        {
          title: '安全可靠',
          des: '严密的风控系统',
          src: require('./sico03.png')
        },
        {
          title: '优势股东',
          des: '益田集团全资控股',
          src: require('./sico04.png')
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
