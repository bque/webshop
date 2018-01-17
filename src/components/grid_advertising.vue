<template>
	<grid :cols='col'>
		<grid-item link="/conment/1" v-for="(value,index) in src" :key="index" class='paddingN' :style="{ 'background-image': 'url(' +value + ')'}" style="background-size:cover ; height: 8rem;">
			<!--	<span class="grid-center">{{i}}</span>-->
			<!--<div class="advertisingContent" >
					<h3>爆款盛宴</h3>
					<p>低至4.8折</p>
					<a>蕙生活</a>
				</div>-->
		</grid-item>
	</grid>
</template>

<script>
	export default {
		props['col'],
		data() {
			return {
				
			}
		}
</script>

<style>

</style>