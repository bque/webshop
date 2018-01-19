<template>
  <div>
    <div class="top-column">
      <div class="userinfo">
        <div class="info-img">
          <img src="../../static/img/logo.jpg" alt="">
        </div>
        <div class="info-text">
          <p>昵称</p>
          <p class="info-content">78.3小白信用分</p>
        </div>
      </div>
    </div>
    <group class="m-1-t">
      <cell title="我的订单"></cell>
    </group>
    <card class="m-t-0">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="icon-block" v-for="(orderIcon,i) in orderIcons" :key="i">
          <span class="iconfont icon-size" :class="orderIcon.icons"></span>
          <br/>
          <h5>{{orderIcon.title}}</h5>
        </div>
      </div>
    </card>
     <group class="m-1-t">
      <cell title="收货地址" is-link></cell>
      <cell title="收藏中心" is-link></cell>
      <cell title="客服中心" is-link></cell>
    </group>
    <goodList></goodList>
    <footer>
			<foot></foot>
		</footer>
  </div>
</template>

<script>
import { Grid, GridItem, Group, Cell, Card } from 'vux'
import GoodList from '@/components/goodList.vue'
import Foot from '@/components/footer.vue'
export default {
  components: {
    Grid,
    GridItem,
    Group,
    Cell,
    Card,
    GoodList,
    Foot
  },
  data () {
    return {
      orderIcons: [
        {icons: 'icon-yinhangqia-xianxing', title: '待付款'},
        {icons: 'icon-baoguofahuo-xianxing', title: '待发货'},
        {icons: 'icon-yunshuzhongwuliu-xianxing', title: '待收货'},
        {icons: 'icon-liaotianduihua-xianxing', title: '待收货'},
        {icons: 'icon-tuikuan', title: '退款/售后'}
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.top-column {
  background: #f05c3a;
}
.userinfo {
  margin-left: 20px;
  padding: 40px 0 28px 0;
}
.info-img img {
  width: 65px;
  border-radius: 50%;
  vertical-align: middle;
  float: left;
}
.userinfo .info-text {
  display: inline-block;
  margin-left: 20px;
  color: #fff;
  line-height: 28px;
  padding-top: 6px;
}
.userinfo .info-content {
  color: #ffe09b;
  font-size: 14px;
}
.m-1-t {
  margin-top: -1.3em;
}
.icon-block {
  color: #f05c3a;
  text-align: center;
  background: #fff;
  border-right: 1px solid #fff !important;
  display: inline-block;
  padding: 10px 15px;
}
.icon-size {
  font-size: 25px;
}
.m-t-0 {
  margin-top: 0;
}
</style>