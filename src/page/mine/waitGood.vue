<template>
<div>
	<!--待收货-->
<good :list="goodList"></good>
</div>

</template>

<script>
import Good from '@/components/good.vue'

export default {
  components: {
	Good
  },
  data(){
  	return{
  		goodList:[
  			{
  				shopName:'新华都超市',
  				goodImg:'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
  				goodName:'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
  				goodColor:'红色',
  				goodPrice:'4545',
  				OperatingA:'申请退款',
  				OperatingB:'确认收货'
  			},
  			{
  				shopName:'新华都超市',
  				goodImg:'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
  				goodName:'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
  				goodColor:'红色',
  				goodPrice:'4545',
    			OperatingA:'申请退款',
  				OperatingB:'确认收货'
  			}
  		]
  	}
  }
}
</script>

<style>
</style>