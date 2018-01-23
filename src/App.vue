
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route () {
      window.scrollTo(0, 0)
      window.document.title = this.$route.meta.title
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import 'assets/css/iconfont.css';
body {
  background-color: #fbf9fe;
}
a {
  text-decoraction: none;
  color: gray;
}
#app .router-link-active {
  text-decoration: none;
  color: red;
}
</style>
