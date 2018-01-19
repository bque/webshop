<template>
	<div>
		<x-header class="tilte-header">
			<span style="color: #333;">退款/售后</span>
		</x-header>
		<goodB :list='list' :mark='false'>
		</goodB>
	</div>
</template>

<script>
import goodB from '@/components/goodB.vue'
import { XHeader } from 'vux'
export default {
  components: {
    goodB,
    XHeader
  },
  data() {
    return {
      list: [
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodMoney: '454',
          status: '退款成功'
        },
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodMoney: '454',
          status: '退款中'
        },
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodMoney: '454',
          status: '退款中'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tilte-header {
  background-color: #fff;
}
</style>