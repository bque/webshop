<template>
	<div class="classification">
		<header>
			<search>
				<span slot='left'  class="hidden"></span>
				<span slot='right' class="hidden"></span>
			</search>
		</header>
		<section>
		<classificationOfLinkage></classificationOfLinkage>
		</section>
		<footer>
			<foot :activeNums='2'></foot>
		</footer>
	</div>
</template>

<script>
	import Search from '@/components/search.vue'
	import ClassificationOfLinkage from '@/components/classificationOfLinkage.vue'
	import Foot from '@/components/footer.vue'

	export default {
		components: {
			Search,
			ClassificationOfLinkage,
			Foot
		},
		data() {
			return {}

		}
	}
</script>

<style scoped>
	.hidden{position: relative; top: -100rem;}
	header{position: fixed; top: 0;width: 100%; z-index: 100;}
	section{width: 100%; margin-top:2.6rem;height: 38rem; }
</style>