import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import ShoppingCart from '@/page/shoppingCart.vue'
import Classification from '@/page/classification.vue'

import Cart from '@/components/Cart.vue'

import ChooseStores from '@/page/home/ChooseStores.vue'
import checkstand from '@/page/shoppingCart/checkstand.vue'
import OrderResult from '@/page/shoppingCart/orderResult.vue'
import OrderDetail from '@/page/shoppingCart/orderDetail.vue'
import GoodList from '@/page/classification/goodList.vue'
import My from '@/page/my.vue'
import userCenter from '@/page/mine/userCenter.vue'
import changeInfo from '@/page/mine/changeInfo.vue'
import address from '@/page/mine/address.vue'
import newAddress from '@/page/mine/newAddress.vue'
import password from '@/page/mine/password.vue'
import about from '@/page/mine/about.vue'

import Good from '@/components/good.vue'
import waitPayment from '@/page/mine/waitPayment.vue'
import refund from '@/page/mine/refund.vue'
import applyRefund from '@/page/mine/applyRefund.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    meta:{
    	title:'主页'
    },
    component: Home 
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/classification',
    name: 'classification',
    component: Classification
  },
  {
    path: '/shoppingCart',
    name: 'cart',
    component: ShoppingCart
  }]
  


})

