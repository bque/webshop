<template>
	<div>
	<swiper heights='28' :swiperList='swiperList' :direction='direction'></swiper>
	<section>
		<div class="content">
			<p class="goodName"><a class="shopName">新华都</a>小米 红米5 Plus 全面屏手机 全网通版 4GB+64GB 黑色 移动联通电信4G手机 双卡双待</p>
			<p class="tip">赠小米活塞耳机！内含原装保护壳，18:9千元全面屏</p>
			<p class="lastP"><a class="money">￥5799.00</a>  <s>￥5799</s> <span class="positionRight">重量 0.48kg</span></p>
		</div>
		 <group class='group'>
	      <cell :title="title"  is-link @click.native="show13 = true"></cell>
	      
	    </group>
	</section>
	<footer>
		<div>
			<ul class="footer">
				<li class="classOne">
					<span class="iconfont icon-liwu"></span>
					<h4>客服</h4>
				</li>
				<li class="classOne">
					<span class="iconfont icon-liwu"></span>
					<h4>收藏</h4>
				</li>
				<li class="classTwo" @click="show13 = true">加入购物车</li>
				<li class="classTwo" @click="show13 = true">立即购买</li>
			</ul>
		</div>
	</footer>
	
	<div>

    <div v-transfer-dom>
      <popup v-model="show13" position="bottom" height="60%" class="popup">
      	<div class='top'>
      		<div class="left"><img src="//img14.360buyimg.com/n1/s450x450_jfs/t16492/203/126997766/293977/d94fc6e1/5a28b64cN5583735a.jpg"/></div>
      		<div class="right">
      			<p class="moneys">￥88</p>
      			<p>库存 5478件</p>
      			<p>已选择 : 39 蓝色</p>
      		</div>
      	</div>
        <div class="classification">
        	<ul>
        		<li>
        			<p>尺码</p>
        			<ul class="contain">
        				<li>38</li>
        				<li>39</li>
        				<li>38</li>
        				<li>39</li>
        				<li>38</li>
        				<li>39</li>
        				<li>38</li>
        				<li>39</li>
        				<li>38</li>
        				<li>39</li>
        				<li>38</li>
        				<li>39</li>
        			
        			</ul>
        		</li>
        		<li>
        			<p>颜色</p>
        			<ul class="contain">
        				<li>深灰色</li>
        				<li>红色</li>
        				<li>蓝色</li>
        				<li>深灰色</li>
        				<li>红色</li>
        				<li>蓝色</li>
        				<li>深灰色</li>
        				<li>红色</li>
        				<li>蓝色</li>
        			
        			</ul>
        		</li>
        		<li>
        			<p class="relative">购买数量 <inline-x-number :min='1' class='changeNum'></inline-x-number></p>
        		</li>
        	</ul>
        </div>
        <div class="btnBottom" >
					<router-link to="/fillorder">
           <x-button class='btn' style="background: red;"  @click.native='show13 = false'>确定</x-button>
					</router-link>
        </div>
      </popup>
    </div>
    </div>
	
	</div>
</template>
<script>
	var baseList = [
  {
    url: 'javascript:',
    img:
      '//img14.360buyimg.com/n1/s450x450_jfs/t16492/203/126997766/293977/d94fc6e1/5a28b64cN5583735a.jpg',
//  title: '送你一朵fua'
  },
  {
    url: 'javascript:',
    img:
      '//img14.360buyimg.com/n1/s450x450_jfs/t13345/132/1711139889/229729/93a23073/5a28b650N71445a7d.jpg',
//  title: '送你一辆车'
  },
  {
    url: 'javascript:',
    img: '//img14.360buyimg.com/n1/s450x450_jfs/t14833/5/273619310/222560/7ae9cc14/5a28b655Nc0e476ce.jpg',
//  title: '送你一次旅行'
  },
    {
    url: 'javascript:',
    img: '//img14.360buyimg.com/n1/s450x450_jfs/t14833/5/273619310/222560/7ae9cc14/5a28b655Nc0e476ce.jpg',
//  title: '送你一次旅行'
  }
]

	import { Cell,Group,TransferDom, Popup ,XButton, InlineXNumber  } from 'vux'
	import Swiper from '@/components/swiper.vue'
	export default {
		 directives: {
		    TransferDom
		  },
	  components: {
	    Swiper,
	    Popup,
	    Group,
	    Cell, 
	    XButton,
	    InlineXNumber
	
	  },
	data(){
		return {
			swiperList: baseList,
			 direction:'center',
			 title:"请选择 尺寸 颜色分类",
			 show13: false,
			 step1: 1
		}
	},
	mounted(){
		document.getElementsByTagName('svg')[0].style.fill='gray';
		document.getElementsByTagName('svg')[1].style.fill='gray';
	}
	}
</script>
<style scoped>
	.content{padding: 0.5rem ;}
	.content .goodName{font-size: 1rem; word-break: break-all;}
	.content .goodName a{background: red; color: white;margin-right: 1rem; padding:0 0.5rem ;}
	.content .tip{font-size: 0.8rem; color: red;}
	.lastP{position: relative;}
	.lastP .money{color: red;font-size: 1.2rem;}
	.moneys{color: red;font-size: 1.2rem;}
	.lastP s{opacity: 0.6;font-size: 0.8rem;}
	.positionRight{position: absolute; right: 5%;opacity: 0.6;font-size: 0.8rem;}
	.group{margin-top: -20px;}
	.footer{position: fixed; bottom: 0; width: 100%; height: 3rem; list-style: none; text-align: center; line-height: 3rem;}
	.footer .classOne{line-height: 2rem;color: darkgray; position: relative; width: 15%;height: 100%; box-sizing: border-box; float: left;}
	.footer .classTwo{width: 35%;height: 100%;  box-sizing: border-box;float: left;color: white;}
	.footer li:nth-of-type(3){background: orange;}
	.footer li:nth-of-type(4){background: orangered;}
	.footer .iconfont{font-size: 1.3rem; }
	.footer  h4 {width: 100%;font-weight: normal;font-size: 0.5rem; position: absolute; bottom: -0.2rem;left: 50%; transform: translate(-50%, 0);}

.btnBottom{width: 100%; height: 2.65rem; position: fixed; bottom: 0;}
.btn{width: 100%;margin: 0 !important;color: white;}
.top{width: 100%; height: 6rem; position: fixed; top: 40%; z-index: 100; height: 6rem;background: white; border-bottom: 2px solid gainsboro;}
.top .left,.top .right{float: left; }
.top .right{padding-left: 5%;}
.top .left{width: 30%; height: 100%;text-align: right;margin-bottom: 10px;}
.top .left img{width: 90%;margin-top: -20px; border: 2px solid white; border-radius: 10px;}
.money{color: red;}
.classification{width: 100%; margin-top: 6rem;min-height: 30rem;background: white;}

.classification>ul{width: 90%; margin: 0 auto;}
.classification>ul>li{border-bottom: 1px solid gainsboro; padding: 10px 0 20px 0;}
.classification ul{list-style: none;}
.contain li{display: inline-block; padding: 2px 8px;background: #F0F0F0; border-radius: 5px;margin-top: 10px;margin-right: 5px;}
.relative{position: relative;}
.changeNum{position: absolute; right:0;color: black;}
.vux-number-selector svg{color: red !important;}
::-webkit-scrollbar {
  display: none;
}
</style>


