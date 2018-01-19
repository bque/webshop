<template>
	<div>
		<div v-for="(value,index) in goodList">
			<slot name='top'>
				<div class="top">
					{{value.shopName}}
				</div>
			</slot>
			<div class="good clearfix ">
				<div class="left">
					<img :src='value.goodImg' align="absmiddle" />
				</div>
				<div class="right relative">
					<p class="firstP">{{value.goodName}}</p>
					<p>
						<span class=' showColor opacity'>颜色 : {{value.goodColor}}</span>
					</p>
					<p class="lastP">
						<span class="money">￥{{value.goodMoney}}</span>

						<span v-if="marks" class="positionRight opacity">{{value.goodWeight}}kgx{{value.goodNum}}</span>
						<span v-else class="positionRight opacity">{{value.status}}</span>
					</p>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		props:{
			list:{type:Array},
			mark:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				goodList:this.list,
				marks:this.mark
			}
		}
	}
</script>

<style scoped>
	.top {
		height: 2rem;
		line-height: 2rem;
		background: rgb(241, 240, 243);
		padding-left: 2%;
	}
	
	.good {
		width: 100%;
		height: 4rem;
		padding: 1rem 0;
		border-top: 2px solid #f0f0f0;
		border-bottom: 10px solid #f0f0f0;
	}
	
	.left {
		width: 25%;
		float: left;
	}
	
	.left img {
		width: 75%;
		margin-left: 10%;
	}
	
	.right {
		width: 70%;
		float: left;
		padding-left: 5%;
	}
	
	.right .firstP {
		font-size: 0.9rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-right: 5%;
	}
	
	.showColor {
		font-size: 0.8rem;
	}
	
	.money {
		color: red;
		font-size: 1.1rem;
	}
	
	.opacity {
		opacity: 0.4;
	}
	
	.positionRight {
		position: absolute;
		right: 5%;
		font-size: 0.8rem;
	}
</style>