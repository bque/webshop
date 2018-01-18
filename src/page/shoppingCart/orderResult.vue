<template>
	<div>
		<header>
			<orderResultTop></orderResultTop>
		</header>
		<section>
			<goodList title='------- 继续剁手 -------'></goodList>
		</section>
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

<style>
</style>