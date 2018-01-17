<template>
	<div class="wrap">
		<sticky scroll-box="" :check-sticky-support="false" class="sticky" v-if="tabShow">
			<tab :line-width="1" style="" class="classification ">
				<tab-item selected @click.native="switchs(10)">今日推荐</tab-item>
				<tab-item @click.native="switchs(5)">酒水饮料</tab-item>
				<tab-item @click.native="switchs(5)">粮油副食</tab-item>
				<tab-item @click.native="switchs(5)">个护美妆</tab-item>
				<span style="" class="more iconfont icon-dayuhao" @click="switchTab">
				</span>
			</tab>
		</sticky>
		<div class="moreClass" v-if="!tabShow" @click="switchTab">
			<div class="top">
				<h2>切换分类</h2>
				<span class=" iconfont icon-dayuhao1" @click="switchTab"></span>
				<hr />
				<ul>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
					<li>
						<a>新品上架</a>
					</li>
				</ul>
			</div>
		</div>
		<!--		<div class="vux-sticky-fill" style="height:44px;"></div>-->

		<scroller lock-x height="45rem" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="0">
			<div class="box1">
				<grid :cols='2' class='padding0'>
					<grid-item link="/conment/1" v-for="i in bottomCount" :key="i" style="" class="item">
						<!--		<span class="grid-center">{{i}}</span>-->
						<img src="http://app.nhd-mart.com/xhdshop/upload/image/201612/77332af9-1222-48ba-9f16-2a11e84653ff-medium.jpg" />
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
import { Grid, GridItem, Scroller, LoadMore, Tab, TabItem, Sticky } from 'vux'
export default {
  components: {
    Grid,
    GridItem,
    Scroller,
    LoadMore,
    Tab,
    TabItem,
    Sticky
  },
  props: [],
  data () {
    return {
      bottomCount: 20,
      tabShow: true
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
    },
    switchs(val) {
      console.log(222222)
      this.bottomCount = val
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({
          top: 0
        })
      })
    },
    switchTab(evt) {
      event.stopPropagation()
      this.tabShow = !this.tabShow
      console.log('切换成功')
      console.log(this.tabShow)
    }
  }
}
</script>

<style scoped="scoped">
.box1 {
  padding-bottom: 5rem;
}

.item {
  width: 100%;
  height: 100%;
  height: 12rem;
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

.classification {
  position: relative;
  /*margin-top: 3rem;*/
  margin-right: 2rem;
  height: 3rem;
}

.more {
  position: absolute;
  background: white;
  right: -2.1rem;
  display: block;
  width: 2.2rem;
  height: 3rem;
  text-align: left;
  line-height: 2.6rem;
}

.sticky {
  height: 3rem;
}

.moreClass {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  z-index: 9;
}

.moreClass .top {
  width: 100%;
  height: 11.5rem;
  position: relative;
  background: white;
  margin-top: 2.88rem;
}

.moreClass .top h2 {
  font-weight: normal;
  text-align: center;
  color: gray;
  font-size: 1.2rem;
  padding: 0.3rem;
}

.moreClass .top .iconfont {
  position: absolute;
  z-index: 90;
  padding: 0.2rem 1rem;
  right: 1rem;
  top: 0.5rem;
}

.moreClass .top hr {
  opacity: 0.6;
}

.moreClass .top ul {
  width: 100%;
  list-style: none;
  margin-top: 1rem;
}

.moreClass .top ul li {
  text-align: center;
  float: left;
  width: 20%;
  margin-left: 4%;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

.moreClass .top ul li:hover a {
  opacity: 0.6;
}

.moreClass .top ul li a {
  font-size: 0.8rem;
  transition: all 0.2s;
  color: gray;
  padding: 0.25rem 0.5rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.06);
}
</style>