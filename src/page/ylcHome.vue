<template>
  <div class="s_center clr mb30">
    <div class="s_bread">
      <router-link to="/" class="s_breadindex"><i class="icon"></i>首页</router-link>
      <i class="s_breadarrow">&gt;</i> <span>我要理财</span>
    </div>
    <ylc-list :list="listData"></ylc-list>
    <div class="xf_wylc_page xf_cfzx_page s_biaopage">
      <pagination :page-no="pageNo" :current-index.sync="currentPage" @pagechange="requestData()"></pagination>
    </div>
  </div>
</template>
<script>
import pagination from "@/components/base/pagination"
import ylcList from "./ylcList"
export default {
  components: {
    pagination,
    ylcList
  },
  data () {
    return {
      currentPage: 1,
      pageNo: 1,
      listData: [
        {
          name: '益理财YS2017070010',
          id: 11,
          link: '/ylcDetail/11',
          apr: '8.0',
          period: '3',
          totalAmount: '800,000.00',
          ableAmount: '200,000.00',
          date: '2017-09-09',
          percent: '75'
        },
        {
          name: '益理财YS2017070010',
          id: 12,
          link: '/ylcDetail/12',
          apr: '8.0',
          period: '3',
          totalAmount: '800,000.00',
          ableAmount: '200,000.00',
          date: '2017-09-09',
          percent: '75'
        },
        {
          name: '益理财YS2017070010',
          id: 13,
          link: '/ylcDetail/13',
          apr: '8.0',
          period: '3',
          totalAmount: '800,000.00',
          ableAmount: '200,000.00',
          date: '2017-09-09',
          percent: '75'
        },
      ]
    }
  },
  methods: {
    requestData () {
      // 在这里使用ajax或者fetch将对应页传过去获取数据即可
      //this.list = list
      //this.pageNo = dataList.pageNo
    }
  }
}
</script>
<style>
.ylc-more{ display: none;}
</style>