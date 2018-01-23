<template>
	<div>
		<header>
			<orderResultTop></orderResultTop>
		</header>
		<section>
			<goodList></goodList>
		</section>
	</div>
</template>

<script>
import OrderResultTop from '../../components/orderResultTop'
import GoodList from '../../components/goodList'
export default {
  components: {
    OrderResultTop,
    GoodList
  }
}
</script>