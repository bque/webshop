<template>
	<div>
		<goodB :list='list' >
			<p slot='top'></p>
		</goodB>
		<group>
	    <!--<cell title="退款原因" value="请选择" is-link></cell>-->
		<div class="cell">
				退款原因 
				<span class="right">请选择</span>
				<x-icon type="ios-arrow-right" size="30" class="iconR"></x-icon>
		</div>
			<div class="cell">
				退款金额 : <span class="money">￥454</span>
				
		</div>
		   <x-button type="warn"  class="bottom">提交</x-button>
	  </group>
		
	</div>
		
		
</template>

<script>
	import goodB from '@/components/goodB.vue'
	import { CellFormPreview, Group, Cell,XButton } from 'vux'
	export default {
		components: {
			goodB,
			CellFormPreview,
		    Group,
		    Cell,
		    XButton
		},
		data() {
			return {
				list: [{
					shopName: '新华都超市',
					goodImg: 'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
					goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
					goodColor: '红色',
					goodMoney: '454',
					goodWeight:'0.475',
					goodNum:'1'
				}
				]
			}
		}
	}
</script>

<style scoped="">
	.bottom{position: fixed;bottom: 0;}
	.cell{height: 2.5rem;padding: 0 15px;line-height: 2.5rem;font-size: 1rem; position: relative;}
	.iconR{position: absolute; right: 5%; top: 50%; transform: translate(0,-50%);font-size: 0.9rem;}
	.right{position: absolute; right: 15%; top: 50%; transform: translate(0,-50%);}
	.money{color: red;font-size: 1.1rem;}
</style>