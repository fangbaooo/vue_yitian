<template>
  <div id="app">
    <!-- header -->
    <header-con></header-con>
    
    <div id="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <!--footer-->
    <footer-con></footer-con>

    <!-- 右边固定栏 -->
    <right-scroll></right-scroll>

  </div>
</template>

<script>
import headerCon from '@/layout/header.vue'
import footerCon from '@/layout/footer.vue'
import rightScroll from '@/layout/rightScroll.vue'
export default {
  components: {
    headerCon,
    footerCon,
    rightScroll,
  },
  computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
 }
}
</script>

