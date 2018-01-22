<template>
  <grid :cols='1'>
    <grid-item link="/conment/1" v-for="(value,index) in src" :key="index" class=" RectangleAdvertising" :style="{ 'background-image': 'url(' +value + ')'}" style="background-size:100% 100% ; height: 8rem;">
    </grid-item>

  </grid>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  components: {
    Grid,
    GridItem
  },
  props: ['imgSrc'],
  data () {
    return {
      src: this.imgSrc
    }
  }
}
</script>

<style>

</style>