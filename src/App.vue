
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    console.log()
    if (this.$route.path == '/') {
      console.log(222)
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '../static/css/iconfont.css';
body {
  background-color: #fbf9fe;
}
</style>
