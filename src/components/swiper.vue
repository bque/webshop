<template>
	<div>
		<swiper :list="demo01_list" :height="thisHeights" auto loop></swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux'

	var baseList = [{
		img: 'http://app.nhd-mart.com/xhdshop/upload/image/201711/93313f9d-e986-485c-942d-3bcafb08505c.jpg',
		title: '送你一朵fua'
	}, {
		img: 'http://app.nhd-mart.com/xhdshop/upload/image/201711/5270b9ee-4ba1-4d41-b90a-83724f7fb2ad.jpg',
		title: '送你一辆车'
	}, {
		img: 'https://static.vux.li/demo/3.jpg',
		title: '送你一次旅行'
	}]
	export default {
		props: ['swiperList', 'heights'],
		components: {
			Swiper
		},
		data() {
			return {
				thisHeights: this.heights + "rem",
				demo01_list: this.swiperList
			}
		},
		mounted() {}
	}
</script>

<style>

</style>