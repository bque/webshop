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
import my from '@/page/my.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ome',
    component: GoodList 
  },
  {
    path: '/my',
    name: 'my',
    component: my
  },
   {
    path: '/Order',
    name: 'OrderResult',
    component: OrderResult
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }]

})
