import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Cart from '@/components/Cart.vue'
import ShoppingCart from '@/page/shoppingCart.vue'
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

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: about
  },
  {
    path: '/my',
    name: 'my',
    component: My,
    children: [{
      path: '/goodList',
      name: 'GoodList',
      component: GoodList
    }]
  },
  {
    path: '/OrderResult',
    name: 'OrderResult',
    component: OrderResult
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: userCenter
  },
  {
    path: '/changeInfo',
    name: 'changeInfo',
    component: changeInfo
  }
  ]

})
