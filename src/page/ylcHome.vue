<template>
  <div class="s_center clr mb30">
    <div class="s_bread">
      <router-link to="/" class="s_breadindex"><i class="icon"></i>首页</router-link>
      <i class="s_breadarrow">&gt;</i> <span>我要理财</span>
    </div>
    <ylc-list :list="listData"></ylc-list>
    <div class="xf_wylc_page xf_cfzx_page s_biaopage">
      <pagination :page-no="pageNo" :current-index="currentPage" @pagechange="getData()"></pagination>
    </div>
  </div>
</template>
<script>
import pagination from "@/components/base/pagination"
import ylcList from "./ylcList"
// import fetch from "@/utils/fetch"
//var url = "http://www.easy-mock.com/mock/59bf2ba7e0dc663341ad7387/vue_yitian/ylcList"
export default {
  components: {
    pagination,
    ylcList
  },
  data () {
    return {
      currentPage: 1,
      pageNo: 1,
      maxRecord: 10,
      listData: null
      // listData: [
      //   {
      //     name: '益理财YS2017070011',
      //     id: 11,
      //     link: '/ylcHome/ylcDetail/11',
      //     apr: '8.0',
      //     period: '3',
      //     totalAmount: '500,000.00',
      //     ableAmount: '300,000.00',
      //     date: '2017-09-09',
      //     percent: '40'
      //   }
      // ]
    }
  },
  methods: {
    getData (pageIndex) {
      this.$http({
        url: '/ylcList',
        method: 'get',
        params: {
          pageIndex
        }
      }).then(res => {
        this.pageNo = parseInt(res.data.length/10) + 1
        this.listData = this.limitList(res.data);
      })
      // axios.get(url, {pageIndex: pageIndex}).then((res) => {
      //     let json = res.data;
      //     if(json.code === 0){
      //       this.listData = json.data;
      //       this.pageNo = parseInt(json.data.length/10) + 1
      //     } else {
      //       alert("数据获取有误!")
      //     }
      //   }, (res) => {
      //     alert(res.msg)
      //   });
    },
    limitList (data) {
      if (data.length > this.maxRecord ) {
        data.splice(this.maxRecord)
      }
      return data;
    },
    pagechange (pageIndex) {
      this.getData(pageIndex);
    }
  },
  mounted () {
    this.getData(this.currentPage);
  }
}
</script>
<style>
.ylc-more{ display: none;}
</style>