<template>
	<div>
		<swiper heights='24' :swiperList='swiperList' :direction='direction'></swiper>
		<section>
			<div class="content">
				<p class="goodName">
					<a class="shopName">新华都</a>小米 红米5 Plus 全面屏手机 全网通版 4GB+64GB 黑色 移动联通电信4G手机 双卡双待</p>
				<p class="tip">赠小米活塞耳机！内含原装保护壳，18:9千元全面屏</p>
				<p class="lastP">
					<a class="money">￥5799.00</a>
					<s>￥5799</s>
					<span class="positionRight">重量 0.48kg</span>
				</p>
			</div>
			<group class='group'>
				<cell :title="title" is-link @click.native="showChoose()" class="choose"></cell>
			</group>
		</section>
		<footer>
			<div>
				<ul class="footer">
					<li class="classOne">
						<span class="iconfont icon-message_light"></span>
						<h4>客服</h4>
					</li>
					<li class="classOne">
						<span class="iconfont icon-liwu"></span>
						<h4>收藏</h4>
					</li>
					<li class="classTwo" @click="showChoose()">加入购物车</li>
					<li class="classTwo" @click="showChoose()">立即购买</li>
				</ul>
			</div>
		</footer>
		<div>
			<popup ref="showChoose"></popup>
		</div>

	</div>
</template>
<script>
import Popup from '@/components/popup.vue'
import Swiper from '@/components/swiper.vue'
import { Cell, Group, TransferDom, XButton, InlineXNumber } from 'vux'
//var bus=new Vue();
var baseList = [
  {
    url: 'javascript:',
    img:
      '//img14.360buyimg.com/n1/s450x450_jfs/t16492/203/126997766/293977/d94fc6e1/5a28b64cN5583735a.jpg'
    //  title: '送你一朵fua'
  },
  {
    url: 'javascript:',
    img:
      '//img14.360buyimg.com/n1/s450x450_jfs/t13345/132/1711139889/229729/93a23073/5a28b650N71445a7d.jpg'
    //  title: '送你一辆车'
  },
  {
    url: 'javascript:',
    img:
      '//img14.360buyimg.com/n1/s450x450_jfs/t14833/5/273619310/222560/7ae9cc14/5a28b655Nc0e476ce.jpg'
    //  title: '送你一次旅行'
  },
  {
    url: 'javascript:',
    img:
      '//img14.360buyimg.com/n1/s450x450_jfs/t14833/5/273619310/222560/7ae9cc14/5a28b655Nc0e476ce.jpg'
    //  title: '送你一次旅行'
  }
]
export default {
  directives: {
    TransferDom
  },
  components: {
    Swiper,
    Cell,
    Group,
    Popup,
    XButton,
    InlineXNumber
  },
  data () {
    return {
      swiperList: baseList,
      direction: 'center',
      title: '请选择 尺寸 颜色',
      step1: 1
    }
  },
  methods:{
  	showChoose (){
		this.$refs.showChoose.shows=!this.$refs.showChoose.shows;
  	}
  },
  mounted () {
    document.getElementsByTagName('svg')[0].style.fill = 'gray'
    document.getElementsByTagName('svg')[1].style.fill = 'gray'
  }
}
</script>
<style scoped>
section {
  margin-bottom: 3rem;
}
.popup {
  overflow: inherit;
}
.content {
  padding: 0.5rem;
}
.content .goodName {
  font-size: 1rem;
  word-break: break-all;
}
.content .goodName a {
  background: red;
  color: white;
  margin-right: 1rem;
  padding: 0 0.5rem;
}
.content .tip {
  font-size: 0.8rem;
  color: red;
}
.lastP {
  position: relative;
}
.lastP .money {
  color: red;
  font-size: 1.2rem;
}
.moneys {
  color: red;
  font-size: 1.2rem;
}
.lastP s {
  opacity: 0.6;
  font-size: 0.8rem;
}
.positionRight {
  position: absolute;
  right: 5%;
  opacity: 0.6;
  font-size: 0.8rem;
}
.group {
  margin-top: -20px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  list-style: none;
  text-align: center;
  line-height: 3rem;
}
.footer .classOne {
  line-height: 2rem;
  background: white;
  color: darkgray;
  position: relative;
  width: 15%;
  height: 100%;
  box-sizing: border-box;
  float: left;
}
.footer .classTwo {
  width: 35%;
  height: 100%;
  box-sizing: border-box;
  float: left;
  color: white;
}
.footer li:nth-of-type(3) {
  background: orange;
}
.footer li:nth-of-type(4) {
  background: orangered;
}
.footer .iconfont {
  font-size: 1.3rem;
}
.footer h4 {
  width: 100%;
  font-weight: normal;
  font-size: 0.5rem;
  position: absolute;
  bottom: -0.2rem;
  left: 50%;
  transform: translate(-50%, 0);
}



.choose {
  font-size: 1rem;
}
</style>


