<template>
  <div class="p_botlist">
    <div class="p_sytitle">
      <span class="fl fz20">{{title}}</span>
      <router-link :to="link" class="fr"><i>+</i> <span class="p-vm">更多</span></router-link>
    </div>
    <ul class="p_synewsul">
      <li class="clr" v-for="item in list">
        <router-link :to="{path: item.link}" class="text_hide" :title="item.text"><i class="ico"></i>{{item.text}}</router-link>
        <span class="c_gray">{{item.date}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    list: {
      type: Array
    },
    link: {
      type: String
    }
  }
}
</script>
