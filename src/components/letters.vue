<template>
  <div class="letters">
    <!--	<img src="../img/index-link-ft.jpg"  align="absmiddle"><span>购物需知买家必看</span>-->
    <div class="content">
      <img src="../img/index-link-ft.jpg" align="absmiddle">
      <!--<span v-if="mesShow" key="one">购物需知买家必看</span>
				<span v-else key="two">123123</span>-->
      <span>
        {{ mesShow ? '购物需知买家必看' : '123123' }}
      </span>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      mesShow: true,
      bounce: 'bounce'
    }
  },
  methods: {
    change () {
      var _this = this
      setInterval(function () {
        _this.mesShow = !_this.mesShow
      }, 2000)
    }
  },
  mounted () {
    this.change()
  },
  watch: {}
}
</script>

<style scoped="">
.letters {
  width: 100%;
  height: 3rem;
  background: #f0f0f0;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letters .content {
  width: 95%;
  height: 60%;
  background: white;
  border-radius: 5rem;
}

.letters .content img {
  height: 100%;
}

.letters .content span {
  opacity: 0.6;
}
</style>