<!--eslint-disable-->
<template>
  <div class="home">
    <header>
      <search>
      </search>
    </header>
    <section>
      <swiper heights='10' :swiperList='swiperList' :direction='direction'></swiper>
      <!--轮播图-->
      <!--<advertisingTop></advertisingTop>-->
      <!--优惠券等-->
      <letters></letters>
      <!--新华都快报-->
      <fourDdvertising :imgSrc='src'></fourDdvertising>
      <RectangularAdvertising :imgSrc='src'> </RectangularAdvertising>
      <!--长方形广告区-->
      <bottomGoods></bottomGoods>
      <!--热销商品-->
    </section>
    <footer>
      <foot></foot>
    </footer>
  </div>
</template>
<!--<style scoped>

</style>-->
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
section {
  margin-top: 2.6rem;
}
</style>
<script>
import Search from '@/components/search.vue'
import Swiper from '@/components/swiper.vue'
import Letters from '@/components/letters.vue'
import AdvertisingTop from '@/components/advertisingTop.vue'
import FourDdvertising from '@/components/fourDdvertising.vue'
import RectangularAdvertising from '@/components/rectangularAdvertising.vue'
import BottomGoods from '@/components/bottomGoods.vue'
import Foot from '@/components/footer.vue'

var baseList = [
  {
    url: 'javascript:',
    img:
      'http://app.nhd-mart.com/xhdshop/upload/image/201711/93313f9d-e986-485c-942d-3bcafb08505c.jpg',
    title: '送你一朵fua'
  },
  {
    url: 'javascript:',
    img:
      'http://app.nhd-mart.com/xhdshop/upload/image/201711/5270b9ee-4ba1-4d41-b90a-83724f7fb2ad.jpg',
    title: '送你一辆车'
  },
  {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }
]
export default {
  components: {
    Swiper,
    Search,
    AdvertisingTop,
    Letters,
    FourDdvertising,
    RectangularAdvertising,
    BottomGoods,
    Foot
  },
  data () {
    return {
      swiperList: baseList,
      bottomCount: 20,
      mes: '购物需知，买家必看',
      results: [],
      place: '福州',
      src: [
        'http://app.nhd-mart.com/xhdshop/upload/image/201711/12f8c330-0522-4787-a0b4-f67b97100278.png',
        'http://app.nhd-mart.com/xhdshop/upload/image/201711/90703fc0-44d7-44af-93f2-40af04495d19.png',
        'http://app.nhd-mart.com/xhdshop/upload/image/201711/ea57f0fb-ca09-4628-9f2a-bac769c651e8.jpg',
        'http://app.nhd-mart.com/xhdshop/upload/image/201711/cc5a4c50-b291-42ac-b56c-e83f5bc09c72.png'
      ],
      srcBottom: [
        '../src/img/MY.png',
        '../assets/imgs/1.png',
        '../img/shoppingCart.png',
        '../img/MY.png'
      ],
      srcBottomimg: '../img/MY.png',
      direction: 'right'
    }
  },
  methods: {
    turnTo: function () {
      this.$router.push('/conment/3')
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    onScrollBottom () {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          this.bottomCount += 10
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 1500)
      }
    },
    switchs (val) {
      this.bottomCount = val
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({
          top: 0
        })
      })
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {},
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        // type: 'text',
        // position: 'fixed',
        // text: 'on submit'
      })
    },
    onFocus () {
      this.place = ''
    },
    onCancel () {
      this.place = '福州'
    }
  }
}
</script>
