<template>
	<div v-transfer-dom>
				<popup v-model="shows" position="bottom" height="75%" :class="{popup:marginBottom}">
					<div class='top'>
						<div class="left"><img src="//img14.360buyimg.com/n1/s450x450_jfs/t16492/203/126997766/293977/d94fc6e1/5a28b64cN5583735a.jpg" /></div>
						<div class="right">
							<p class="moneys">￥88</p>
							<p>库存 5478件</p>
							<p>请选择 颜色 分类</p>
							<!--<p>已选择 : <span>38</span> 蓝色</p>-->
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
								<p class="relative">购买数量
									<inline-x-number :min='1' class='changeNum'></inline-x-number>
								</p>
							</li>
						</ul>
					</div>
					<div class="btnBottom">
						<router-link to="/fillorder">
							<x-button class='btn' style="background: orangered;" @click.native='show13 = false'>确定</x-button>
						</router-link>
					</div>
				</popup>
			</div>
</template>

<script>
import { TransferDom, Popup, XButton, InlineXNumber } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    XButton,
    InlineXNumber
  },
  props:{
  	marginB:{
  		type:Boolean,
  		default:false
  	}
  },
  data () {
    return {
      shows: false,
      marginBottom:this.marginB
    }
  },
  mounted () {
    document.getElementsByTagName('svg')[0].style.fill = 'gray'
    document.getElementsByTagName('svg')[1].style.fill = 'gray'
  }

  
}
</script>

<style scoped="scoped">
	


.btnBottom {
  width: 100%;
  height: 2.65rem;
  position: absolute;
  bottom: 0;
  z-index: 9999;
}
.btn {
  width: 100%;
  margin: 0 !important;
  color: white;
}
.top {
  width: 100%;
  height: 6rem;
  position: absolute;
  top: 0%;
  z-index: 100;
  height: 6rem;
  background: white;
  border-bottom: 2px solid gainsboro;
}
.top .left,
.top .right {
  float: left;
}
.top .right {
  padding-left: 5%;
  width: 65%;
}
.top .left {
  width: 30%;
  height: 100%;
  text-align: right;
  margin-bottom: 10px;
}
.top .left img {
  width: 80%;
  height: 90%;
  border: 2px solid white;
  border-radius: 10px;
}
.money {
  color: red;
}
.classification {
  width: 100%;
  margin-top: 6rem;
  height: 70%;
  background: white;
}

.classification > ul {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  overflow-y: scroll;
}
.classification > ul > li {
  border-bottom: 1px solid gainsboro;
  padding: 10px 0 20px 0;
}
.classification ul {
  list-style: none;
}
.contain li {
  display: inline-block;
  padding: 2px 8px;
  background: #f0f0f0;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 5px;
}
.contain li:hover {
  background: orangered;
  color: white;
}
.relative {
  position: relative;
}
.changeNum {
  position: absolute;
  right: 0;
  color: black;
}
.vux-number-selector svg {
  color: red !important;
}
::-webkit-scrollbar {
  display: none;
}
.popup{margin-bottom: 3rem;}
</style>