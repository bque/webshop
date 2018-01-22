<template>
  <div>
    <x-header class="tilte-header">
      <span style="color: #333;">待付款</span>
    </x-header>
    <good :list="goodList"></good>
  </div>

</template>

<script>
import Good from '@/components/good.vue'
import { XHeader } from 'vux'

export default {
  components: {
    Good,
    XHeader
  },
  data () {
    return {
      goodList: [
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodPrice: '4545',
          OperatingA: '取消订单',
          OperatingB: '付款',
          leftUrl: '/shoppingCart',
          rightUrl: '/fillorder'
        },
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodPrice: '4545',
          OperatingA: '取消订单',
          OperatingB: '付款',
          leftUrl: '/shoppingCart',
          rightUrl: '/fillorder'
        }
      ]
    }
  }
}
</script>
<style scoped>
.tilte-header {
  background-color: #fff;
}
</style>
