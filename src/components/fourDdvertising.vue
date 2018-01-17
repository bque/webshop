<template>
	<grid :cols='2'>
		<grid-item link="/conment/1" v-for="(value,index) in src" :key="index" class='paddingN' :style="{ 'background-image': 'url(' +value + ')'}" style="background-size:cover ; height: 8rem;">
		</grid-item>
	</grid>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  components: { Grid, GridItem },
  props: ['imgSrc'],
  data() {
    return {
      src: this.imgSrc
    }
  }
}
</script>

<style>

</style>