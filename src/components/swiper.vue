<template>
  <div>
    <swiper :list="demo01_list" :height="thisHeights" auto loop :dots-position='directions'></swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  props: ['swiperList', 'heights', 'direction'],
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      thisHeights: this.heights + 'rem',
      demo01_list: this.swiperList,
      directions: this.direction
    }
  }
}
</script>

<style>

</style>