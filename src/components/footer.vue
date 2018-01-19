<template>
	<div class="footer">
		<ul>
			<li :class="{active:activeNum==1}" >
				<router-link to='/home' >
					<span class="iconfont icon-home"></span>
					<h4>首页</h4>
				</router-link>
			</li>
			<li :class="{active:activeNum==2}" >
				<router-link to='/classification'>
				<span class="iconfont icon-leimupinleifenleileibie"></span>
				<h4>分类</h4>
				</router-link>
			</li>
			<li :class="{active:activeNum==3}" >
				<router-link to='/YOU'  >
				<span class="iconfont icon-liwu"></span>
				<h4>优惠券</h4>
				</router-link>
			</li>
			<li :class="{active:activeNum==4}" >
				<router-link to='/shoppingCart'  >
				<span class="iconfont icon-cart"></span>
				<h4>购物车</h4>
				</router-link>
			</li>
			<li :class="{active:activeNum==5}">
				<router-link to='/my' >
				<span class="iconfont icon-people"></span>
				<h4>我的</h4>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  props: {
    activeNums: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      activeNum: this.activeNums
    }
  }
}
</script>

<style>

.footer {
  width: 100%;
  height: 3rem;
  background: white;
  position: fixed;
  bottom: 0;
  z-index: 99999;
}

.footer ul {
  list-style: none;
}
.footer ul li {
  float: left;
  width: 20%;
  height: 100%;
  list-style: none;
  position: relative;
  color: gray;
  text-align: center;
}
.footer ul li .iconfont {
  font-size: 1.4rem;
}
.footer ul li h4 {
  font-weight: normal;
  font-size: 0.7rem;
  position: absolute;
  bottom: -0.7rem;
  left: 50%;
  transform: translate(-50%, 0);
}
 /*.active {
  color: red !important;
}*/
</style>