import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Cart from '@/components/Cart.vue'
import ShoppingCart from '@/page/shoppingCart.vue'
import ChooseStores from '@/page/home/ChooseStores.vue'
import goodList from '@/components/goodList.vue'
import checkstand from '@/page/checkstand.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ome',
    component: checkstand

  }]
})