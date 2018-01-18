<template>
 <div>
 	<goodList>
 		<div class="title" slot='top'>
			<x-icon type="ios-arrow-left" size="30" class="icon"></x-icon>
			键盘
			
		</div>
 	</goodList>
 </div>
</template>

<script>
	import OrderResultTop from '../../components/orderResultTop'
	import GoodList from '../../components/goodList'
	export default{
		components:{
			OrderResultTop,
			GoodList
		}
		
	}
</script>

<style scoped>
	.title {
  line-height: 3rem;
  width: 100%;
  height: 3rem;
  color: ;
  background: white;
  font-size: 1.2rem;
  margin-bottom: -16px;
  text-align: center;
  position: relative;
  line-height: 3rem;
  margin-bottom: 0.1rem;
  border-bottom: 2px solid gainsboro;
}
.icon {
  position: absolute;
  left: 3%;
  top: 50%;
  transform: translate(0, -50%);
}
</style>