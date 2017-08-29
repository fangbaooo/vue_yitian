<template>
  <div class="p_zhright">
    <div class="p_zhinvelist mt0">
      <h4 class="p_zhtitle">
        <span class="fl">提现</span>
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      pageNo: 10,
      dealRecord: {}
    }
  },
  mounted () {
  },
  methods: {
    requestData () {
      // 在这里使用ajax或者fetch将对应页传过去获取数据即可
      this.dealRecord = dataList
      this.pageNo = dataList.pageNo
    }
  }
}
</script>
