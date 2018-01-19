
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
  },
  watch:{
  	 $route(){
  	 	window.scrollTo(0,0);
	 	if(this.$route.name=='Home'){
	 			document.location.reload()
	 	}
  	 
  		console.log(this.$route.name)
  		window.document.title=this.$route.meta.title;
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
 a {
    text-decoraction: none;
    color: gray;
}
#app .router-link-active {
    text-decoration: none;
    color: red;
}
</style>
