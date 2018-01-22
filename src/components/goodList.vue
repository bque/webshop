<template>
  <div class="goodList">
    
    <sticky scroll-box="" :check-sticky-support="false" class="sticky" v-if="true">
			<slot name='top'>
      <div class="top">{{title}}</div>
    </slot>
		</sticky>
    <scroller lock-x height="59.2rem" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="0">
      <div class="box1">
        <grid :cols='2' class='padding0'>
          <grid-item :link="{name:'gooddetail',query:{Id:'12'}}" v-for="i in bottomCount" :key="i" style="" class="item">
            <img src="//img.alicdn.com/bao/uploaded/TB2S8u4XIrHK1Jjy1zjXXanYVXa_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp" />
            <div class="content">
              <h3>鲁花压榨花生油4L</h3>
              <span>￥115.80</span>
            </div>
          </grid-item>
        </grid>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Grid, GridItem, Scroller, LoadMore,Sticky } from 'vux'
export default {
  components: {
    Grid,
    GridItem,
    Scroller,
    LoadMore,
    Sticky
  },
  props: {
    title: {
      type: String,
      default: '为 / 你 / 推 / 荐'
    }
  },
  data() {
    return {
      bottomCount: 20,
      titles: this.title
    }
  },
  methods: {
    onScrollBottom() {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          //						this.bottomCount += 10
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 1500)
      }
    }
  }
}
</script>

<style scoped>
.box1 {
  padding-bottom: 5rem;
}

.item {
  width: 100%;
  height: 100%;
  background: white;
}

.item img {
  width: 100%;
  height: 80%;
}

.item h3 {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.57);
}

.item span {
  color: red;
}
.top {
  width: 100%;
  height: 2.5rem;
  background: #f0f0f0;
  line-height: 2.5rem;
  text-align: center;
}
</style>