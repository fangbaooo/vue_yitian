<template>
<div class="p_zcgtcmain" style="display: none">
  <dl class="p_zclist h40 clr">
      <dt>投资日期</dt>
        <dd>
            <input type="text" class="p_zcinput" maxlength="20" autocomplete="off" v-model="record.investDate">
        </dd>
    </dl>
    <dl class="p_zclist h30 clr">
        <dt>&nbsp;</dt>
        <dd>
            <span class="p_zcerror" v-if="record.investDate ==''"><i class="icon"></i>请输入内容</span>
        </dd>
    </dl>
    <dl class="p_zclist h40 clr">
        <dt>产品名称</dt>
        <dd>
            <input type="text" placeholder="" class="p_zcinput" maxlength="20" autocomplete="off" v-model="record.name">
        </dd>
    </dl>
    <dl class="p_zclist clr">
        <dt>&nbsp;</dt>
        <dd>
            <input class="p_zcbtn btn" value="确认" type="button" @click="submit">
        </dd>
    </dl>
</div>
</template>
<script>
export default {
  props: {
    record: {
      type: Object
    }
  },
  data () {
    return {
      //currentPage: 1,
    }
  },
  methods: {
    submit () {
      this.$emit('submit')
    }
  }
}
</script>
