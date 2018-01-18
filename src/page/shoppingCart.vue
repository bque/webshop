<template>
	<div class="shoppingCart">
		<section>
			<cart></cart>
			<goodList></goodList>
		</section>
		<footer>
			<foot :activeNums='4'></foot>
		</footer>
	</div>
</template>

<script>
import Cart from '@/components/cart.vue'
import Foot from '@/components/footer.vue'
import GoodList from '@/components/goodList.vue'
export default {
  components: {
    Cart,
    Foot,
    GoodList
  },
  data() {
    return {}
  }
}
</script>

<style scoped="scoped">
	section{margin: 0;}

</style>