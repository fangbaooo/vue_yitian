<template>
  <div class="tg_link">
    <input class="tg_link_input" readonly v-model="spreadLink" id="spreadLink">
    <a id="copy_link_a" class="copy_link f16">复制链接</a>
  </div>
</template>
<script>
import ZeroClipboard from "ZeroClipboard";
export default {
  props: {
    spreadLink: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.copyLink();
  },
  methods: {
    copyLink () {
      ZeroClipboard.setMoviePath("/static/js/plugins/zeroClipboard/ZeroClipboard.swf");
      var clip = new ZeroClipboard.Client();
      clip.setHandCursor(true);
      clip.setText(this.spreadLink);
      clip.glue('copy_link_a');
      clip.addEventListener("mouseUp", (client, text) => {
        alert("复制链接成功！");
      });
    }
  }
}
</script>
