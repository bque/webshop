import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Cart from '@/components/Cart.vue'
import ShoppingCart from '@/page/shoppingCart.vue'
import ChooseStores from '@/page/home/ChooseStores.vue'
import goodList from '@/components/goodList.vue'
import checkstand from '@/page/shoppingCart/checkstand.vue'
import OrderResult from '@/page/shoppingCart/orderResult.vue'
import my from '@/page/my.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ome',
    component: checkstand
  },
  {
    path: '/my',
    name: 'my',
    component: my
  }]
})
