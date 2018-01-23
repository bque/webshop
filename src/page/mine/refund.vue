<template>
  <div>
    <title-header :title="title"></title-header>
    <goodB :list='list' :mark='false'>
    </goodB>
  </div>
</template>

<script>
import goodB from '@/components/goodB.vue'
import TitleHeader from '@/components/titleHeader.vue'
export default {
  components: {
    goodB,
    TitleHeader
  },
  data () {
    return {
      title: '退款/售后',
      list: [
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodMoney: '454',
          status: '退款成功'
        },
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodMoney: '454',
          status: '退款中'
        },
        {
          shopName: '新华都超市',
          goodImg:
            'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
          goodName: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
          goodColor: '红色',
          goodMoney: '454',
          status: '退款中'
        }
      ]
    }
  }
}
</script>