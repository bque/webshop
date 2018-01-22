<template>
  <div class="chooseStores">
    <div class="header">
      <router-link to="/">
        <span class="iconfont icon-fanhui"></span>
      </router-link>选择门店</div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" class="marginTopNegative">
      <cell title="福州"></cell>
      <cell title="厦门"></cell>
      <cell title="福州"></cell>
      <cell title="厦门"></cell>
      <cell title="福州"></cell>
      <cell title="厦门"></cell>
    </group>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.header .iconfont {
  position: absolute;
  left: 1rem;
}
.header {
  width: 100%;
  height: 2.5rem;
  color: gray;
  line-height: 2.5rem;
  font-size: 1.2rem;
  background: #f0f0f0;
  text-align: center;
}
.marginTopNegative {
  margin-top: -20px;
  opacity: 0.6;
  margin-left: -5%;
}
</style>