<template>
	<div>
		<a :class="{'addred':red}">{{mes}}</a>
	</div>
</template>

<script>
export default {
  data() {
    return {
      mes: 'niaho',
      red: false
    }
  },
  methods: {
    change() {
      this.red = true
    }
  },
  watch: {
    mes() {
      console.log(121231)
    }
  },
  mounted() {
    //			this.change()
    //			this.red=true
  }
}
</script>

<style>
.addred {
  color: red;
}
</style>