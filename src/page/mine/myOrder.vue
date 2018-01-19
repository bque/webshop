<template>
	<div>
		<x-header class="tilte-header">
			<span style="color: #333;">我的订单</span>
		</x-header>
		<!--我的订单-->
		<good :list="goodList"></good>
	</div>

</template>

<script>
import { XHeader } from 'vux'
import Good from '@/components/good.vue'

export default {
  components: {
	Good,
	XHeader
  },
  data() {
    return {
      goodList: [
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodPrice: '4545',
          OperatingA: '删除订单',
          OperatingB: '评价'
        },
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodPrice: '4545',
          OperatingA: '删除订单',
          OperatingB: '评价'
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