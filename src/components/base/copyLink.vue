<template>
  <div class="tg_link">
  <input class="tg_link_input" readonly v-model="spreadLink">
    <a id="copy_link_a" class="copy_link f16">复制链接</a>
  </div>
</template>

<script>
import ZeroClipboard from "./ZeroClipboard";
//import "@/assets/js/zeroClipboard/ZeroClipboard.swf"

export default {
  props: {
    // 用于记录总页码，可由父组件传过来
    spreadLink: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      
    }
  },
  mounted () {
    this.copyLink();
  },
  methods: {
    copyLink () {
      ZeroClipboard.setMoviePath("./ZeroClipboard.swf");
      var clip = new ZeroClipboard.Client();
      clip.setHandCursor(true);
      clip.addEventListener("mouseUp", function(client) {
        alert("复制链接成功！");
      });
      clip.setText(this.spreadLink);
      clip.glue('copy_link_a');
    }
  }
}
</script>
