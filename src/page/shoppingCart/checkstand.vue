<template>
  <div class="checkstand">
    <title-header :title="title"></title-header>
    <group>
      <div class="cell topLine">
        <span class="">订单金额</span>
        <span class="money">5799.00元</span>
      </div>
      <div class="cellPay">
        <router-link to="/orderResult">
          <div class="left"><img src="../../../static/img/wei.png" /></div>
          <div class="right">
            <p>微信支付</p>
            <p class="opacity">微信安全支付</p>
            <x-icon type="ios-arrow-right" size="30" class="iconR"></x-icon>
          </div>
        </router-link>
      </div>
      <div class=" cellPay">
        <router-link to="/orderResult">
          <div class="left"><img src="../../../static/img/yin.png" /></div>
          <div class="right">
            <p>银联支付</p>
            <p class="opacity">银联安全支付</p>
            <x-icon type="ios-arrow-right" size="30" class="iconR"></x-icon>
          </div>
        </router-link>
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
      title: '支付方式'
    }
  }
}
</script>

<style scoped>
.checkstand {
  width: 100%;
  height: 40rem;
  background: #f0f0f0;
}
.title {
  width: 100%;
  height: 3rem;
  background: white;
  font-size: 1.2rem;
  margin-bottom: -16px;
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
.iconR {
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translate(0, -50%);
}
.positionRight {
  position: absolute;
  right: 5%;
  font-size: 0.9rem;
  opacity: 0.5;
}
.img {
  width: 2.8rem;
  margin-right: 0.5rem;
}
.cell {
  position: relative;
  width: 100%;
  height: 3rem;
  padding-left: 15px;
  border-bottom: 3px solid #f0f0f0;
}
.topLine {
  line-height: 3rem;
}
.cell .money {
  color: red;
  position: absolute;
  right: 5%;
}
.cellPay {
  position: relative;
  width: 100%;
  height: 3.5rem;
  line-height: 3.5rem;
  padding-left: 15px;
  border-bottom: 3px solid #f0f0f0;
}
.left {
  width: 15%;
}
.left img {
  height: 60%;
  margin-top: 50%;
  transform: translate(0, -50%);
}
.right {
  width: 80%;
  font-size: 0.9rem;
  line-height: 1.2rem;
}
.left,
.right {
  float: left;
  height: 100%;
}
.opacity {
  opacity: 0.5;
  font-size: 0.5rem;
}
.right p:nth-of-type(1) {
  margin-top: 10px;
}
</style>