import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import ShoppingCart from '@/page/shoppingCart.vue'
import Classification from '@/page/classification.vue'
import My from '@/page/my.vue'

import Cart from '@/components/Cart.vue'

import ChooseStores from '@/page/home/ChooseStores.vue'
import checkstand from '@/page/shoppingCart/checkstand.vue'
import OrderResult from '@/page/shoppingCart/orderResult.vue'
import OrderDetail from '@/page/shoppingCart/orderDetail.vue'
import GoodList from '@/page/classification/goodList.vue'

import Good from '@/components/good.vue'
import waitPayment from '@/page/mine/waitPayment.vue'
import refund from '@/page/mine/refund.vue'
import applyRefund from '@/page/mine/applyRefund.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [{
    path: '/',
    redirect:'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home 
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
   {
    path: '/classification',
    name: 'OrderResult',
    component: Classification
  },
  {
    path: '/shoppingCart',
    name: 'cart',
    component: ShoppingCart
  }]

})
