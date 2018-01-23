<template>
  <div>
    <title-header :title="title"></title-header>
    <good :list="goodList"></good>
  </div>
</template>
<script>
import Good from '@/components/good.vue'
import TitleHeader from '@/components/titleHeader.vue'

export default {
  components: {
    Good,
    TitleHeader
  },
  data () {
    return {
      title: '待发货',
      goodList: [
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodPrice: '4545',
          OperatingA: '申请退款',
          OperatingB: '提醒发货',
          leftUrl: '/applyRefund',
          rightUrl: 'shoppingCart'
        },
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodPrice: '4545',
          OperatingA: '申请退款',
          OperatingB: '提醒发货',
          leftUrl: '/applyRefund',
          rightUrl: 'shoppingCart'
        }
      ]
    }
  }
}
</script>