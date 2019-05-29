<template>
  <div class="swiper-box">
    <!-- <div class="contacts">
      <div 
        class="contact"
        :class="{ 'active': index === swipe.activeIndex }" 
        v-for="(contact, index) in contacts"
        @click="turnTo(index)"
      >
      </div>
    </div> -->
    <rd-swipe :swipe="swipe">
      <a class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs" href='https://www.yitianlicai.com/'>
      </a>
    </rd-swipe>
  </div>
</template>
<script>
import rdSwipe from '@/components/slide/slide.vue'
export default {
  data () {
    return {
      swipe: {
        activeIndex: 0,
        autoplay: 5000
      },
      contacts: [{
        text: 'Page 1'
      }, {
        text: 'Page 2'
      }, {
        text: 'Page 3'
      }],
      imgs: [
        'https://www.yitianlicai.com/images?uuid=03da6cfa-c55b-4fed-b9a8-86714a6812aa',
        'https://www.yitianlicai.com/images?uuid=1280de94-82aa-41bf-82e2-e1a60b9bca87',
        'https://www.yitianlicai.com/supervisor/newsImg?uuid=5d7060f1-925b-44b5-9d2b-6e88ca40c9a2'
      ]
    }
  },
  components: {
    rdSwipe
  },
  methods: {
    turnTo (index) {
      this.$children.map(swipe => {
          if (swipe.turnTo) {
              swipe.turnTo(index)
          }
      })
    }
  }
}
</script>
