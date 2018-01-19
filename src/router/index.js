import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import ShoppingCart from '@/page/shoppingCart.vue'
import Classification from '@/page/classification.vue'
import My from '@/page/my.vue'

import ChooseStores from '@/page/home/ChooseStores.vue' // 首页

import GoodList from '@/page/classification/goodList.vue' // 分类

import Checkstand from '@/page/shoppingCart/checkstand.vue' // 购物车
import OrderResult from '@/page/shoppingCart/orderResult.vue'
import OrderDetail from '@/page/shoppingCart/orderDetail.vue'

import UserCenter from '@/page/mine/userCenter.vue' // 我的页面
import ChangeInfo from '@/page/mine/changeInfo.vue'
import Address from '@/page/mine/address.vue'
import NewAddress from '@/page/mine/newAddress.vue'
import Password from '@/page/mine/password.vue'
import About from '@/page/mine/about.vue'
import Refund from '@/page/mine/refund.vue'
import WaitPayment from '@/page/mine/waitPayment.vue'
import ApplyRefund from '@/page/mine/applyRefund.vue'

import Cart from '@/components/cart.vue'
import Good from '@/components/good.vue'

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
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      title: '我的'
    },
    component: My
  },
  {
    path: '/classification',
    name: 'OrderResult',
    meta: {
      title: '分类'
    },
    component: Classification
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    meta: {
      title: '购物车'
    },
    component: ShoppingCart
  },
  {
    path: '/chooseStores',
    name: 'chooseStores',
    meta: {
      title: '选择门店'
    },
    component: ChooseStores
  },
  {
    path: '/goodlist',
    name: 'goodlist',
    meta: {
      title: '商品列表'
    },
    component: GoodList
  },
  {
    path: '/checkstand',
    name: 'checkstand',
    meta: {
      title: '支付方式'
    },
    component: Checkstand
  },
  {
    path: '/orderResult',
    name: 'orderResult',
    meta: {
      title: '支付成功'
    },
    component: OrderResult
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    meta: {
      title: '订单详情'
    },
    component: OrderDetail
  },
  {
    path: '/usercenter',
    name: 'usercenter',
    meta: {
      title: '个人中心'
    },
    component: UserCenter
  },
  {
    path: '/changeinfo',
    name: 'changeinfo',
    meta: {
      title: '改资料'
    },
    component: ChangeInfo
  },
  {
    path: '/address',
    name: 'address',
    meta: {
      title: '收货地址'
    },
    component: Address
  },
  {
    path: '/newaddress',
    name: 'newaddress',
    meta: {
      title: '新增收货地址'
    },
    component: NewAddress
  },
  {
    path: '/password',
    name: 'password',
    meta: {
      title: '修改密码'
    },
    component: Password
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于我们'
    },
    component: About
  },
  {
    path: '/refund',
    name: 'refund',
    meta: {
      title: '退款/售后'
    },
    component: Refund
  },
  {
    path: '/waitpayment',
    name: 'waitpayment',
    meta: {
      title: '待付款'
    },
    component: WaitPayment
  },
  {
    path: '/applyrefund',
    name: 'applyrefund',
    meta: {
      title: '申请退款'
    },
    component: ApplyRefund
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/good',
    name: 'good',
    component: Good
  }
  ]

})

