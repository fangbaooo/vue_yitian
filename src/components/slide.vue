<template>
  <div class="p_bannerbox">
    <div class="p_banner">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src" width="100%" height="380">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src" width="100%" height="380">
        </transition>
      </a>
    </div>
    <div class="p_conbox">
      <div class="p_main p_control"><span v-for="(item, index) in slides" @click="goto(index)" :class="{cur: index === nowIndex}"></span></div>
    </div>
    <span class="p_bprev" @click="goto(prevIndex)"></span><span class="p_bnext" @click="goto(nextIndex)"></span>
  </div>

<!--   <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div> -->
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(100%);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-100%);
}
</style>
