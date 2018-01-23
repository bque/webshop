<template>
  <div class="fillOrder">
    <title-header :title="title"></title-header>
    <group>
      <div class="vux-cell-box  address">
        <p>
          <span class="name">陈胜</span>
          <span class="tel">181****4621</span>
          <a class="default">默认</a>
        </p>
        <p class="addressP">@ 广东 深圳 宝安区 详细地址......</p>
      </div>
      <div class="good clearfix ">
        <div class="left">
          <img src='https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg' align="absmiddle" />
        </div>
        <div class="right relative">
          <p class="firstP">Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机</p>
          <p>
            <span class=' showColor'>颜色 : 红色</span>
          </p>
          <p class="lastP">
            <span class="money">￥454</span>
            <span class="positionRight opacity">0.450kgx1</span>
          </p>
        </div>

      </div>
      <div class="vux-cell-box content ">
        <p>订单编号 : 16464646766467649</p>
        <p>创建时间 : 2017-1-1 12 : 58 : 58</p>
      </div>
      <div class="result">
        <p>
          <span class="bottomleft">商品金额</span>
          <span class="bottomRight">￥5799.00</span>
        </p>
        <p>
          <span class="bottomleft">运费
            <span class="opacity">(0.87kg)</span>
          </span>
          <span class="bottomRight">+￥0.00</span>
        </p>
      </div>
      <div class="bottom relative">
        <a class="total">实付款:
          <span class="money smallFont">￥5799</span>
        </a>
        <router-link to="/applyRefund" class="settlement">申请退款</router-link>
      </div>
    </group>
  </div>
</template>

<script>
import { Group, Cell, CellBox } from 'vux'
import TitleHeader from '@/components/titleHeader.vue'
export default {
  components: {
    Group,
    Cell,
    CellBox,
    TitleHeader
  },
  data () {
    return {
      title: '订单详情'
    }
  }
}
</script>
<style scoped>
.title {
  width: 100%;
  height: 3rem;
  background: white;
  font-size: 1.2rem;
  text-align: center;
  position: relative;
  line-height: 3rem;
}
.icon {
  position: absolute;
  left: 3%;
  top: 50%;
  transform: translate(0, -50%);
}
.name {
  padding-left: 5.5%;
}
.tel {
  margin-left: 3%;
}
.default {
  padding: 1px 5px;
  font-size: 0.5rem;
  border: 1px solid red;
  color: red;
}
.addressP {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}
.address {
  padding: 1rem;
  font-size: 1rem;
}
.content {
  padding: 0.6rem;
  font-size: 0.8rem;
  opacity: 0.6;
  border-bottom: 5px solid #f0f0f0;
  line-height: 1.5rem;
}
.relative {
  position: relative;
}
.good {
  width: 100%;
  height: 4rem;
  padding: 1rem 0;
  border-top: 2px solid #f0f0f0;
  border-bottom: 10px solid #f0f0f0;
}
.left {
  width: 25%;
  float: left;
}
.left img {
  width: 75%;
  margin-left: 10%;
}

.right {
  width: 70%;
  float: left;
  padding-left: 5%;
}
.right .firstP {
  font-size: 0.9rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 5%;
}
.showColor {
  font-size: 0.8rem;
}
.money {
  color: red;
  font-size: 1.1rem;
}
.opacity {
  opacity: 0.4;
}
.positionRight {
  position: absolute;
  right: 5%;
  font-size: 0.8rem;
}
.borderTB {
  border-top: 10px solid #f0f0f0;
  border-bottom: 10px solid #f0f0f0;
}
.result {
  padding: 15px 0;
  line-height: 1.5rem;
  font-size: 15px;
}
.bottomleft {
  margin-left: 15px;
}
.bottomleft .opacity {
  font-size: 0.8rem;
}
.bottomRight {
  position: absolute;
  right: 15px;
  color: red;
}

.bottom {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background: white;
  position: fixed;
  border-bottom: 0.3rem solid#F0F0F0;
  bottom: 0;
  padding-left: 3.5%;
  z-index: 100;
}
.settlement {
  color: white;
  font-size: 1.2rem;
  display: block;
  text-align: center;
  position: absolute;
  right: 3.5%;
  width: 30%;
  height: 3rem;
  background: orangered;
  top: 0;
}

.total {
  position: absolute;
  right: 35.5%;
}
.cell {
  font-size: 15px;
}
</style>