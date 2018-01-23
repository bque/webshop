<template>
  <div>
    <div class="top relative">
      订单支付成功
      <span class="positionR"><router-link to="/shoppingCart">完成</router-link></span>
    </div>
    <div class="result">
      <div class="left">
        <span class="iconfont icon-dingdanwancheng"></span>
      </div>
      <div class="right">
        <p>支付方式 :
          <span class="red">微信支付</span>
        </p>
        <p>支付金额 :
          <span class="red">￥5799.00</span>
        </p>
        <p>优惠金额 :
          <span class="red">￥0.00</span>
        </p>
      </div>
    </div>
    <router-link :to="{name:'orderDetail',query:{id:'413'}}">
      <div class="bottom">
        <a class="btn">查看订单</a>
        <p>注意: 该平台及销售商不会以订单异常，系统升级为由要求您点击任何网址链接进行退款操作</p>
      </div>
    </router-link>
  </div>
</template>

<script>
</script>

<style scoped>
.top {
  width: '100%';
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid gainsboro;
  background: white;
}
.relative {
  position: relative;
}
.positionR {
  position: absolute;
  right: 3%;
  top: ;
  font-size: 0.8rem;
  opacity: 0.5;
}
.result {
  width: 100%;
  height: 5rem;
  padding: 1rem 0;
  background: white;
}
.left,
.right {
  height: 100%;
  float: left;
}
.left {
  width: 35%;
  text-align: right;
}
.left .iconfont {
  font-size: 3.5rem;
  color: red;
}
.right {
  width: 57%;
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding-left: 8%;
  padding-top: 5px;
}
.red {
  color: red;
}
.bottom {
  background: white;
}
.btn {
  display: block;
  width: 80%;
  height: 2rem;
  border: 1px solid gray;
  margin: 0 auto;
  text-align: center;
  line-height: 2rem;
  border-radius: 5px;
  font-size: 0.8rem;
}
.bottom p {
  font-size: 0.6rem;
  opacity: 0.6;
  padding: 1rem;
}
</style>