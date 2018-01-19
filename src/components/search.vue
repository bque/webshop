<template>
	<div class="header">
		<search class="search" placeholder="搜索" auto-scroll-to-top top="0" position="fixed" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search">
			<slot name='left' slot="left">
				<div slot="left" class="address">{{place}}</div>
			</slot>
			<slot name='right' slot="right">
				<div slot="right" class="right">
					<span class="iconfont icon-saoma"></span>
				</div>
			</slot>
		</search>
	</div>
</template>

<script>
import { Search } from 'vux'
export default {
  components: {
    Search
  },
  data() {
    return {
      place: '福州'
    }
  },
  mounted:function(){
    console.log('13133')
  },
  methods: {
    onFocus() {
      this.place = ''
      document.getElementsByClassName(
        'weui-search-bar__cancel-btn'
      )[0].style.color =
        'gray'

      console.log(this.$refs.search)
    },
    onCancel() {
      this.place = '福州'
      console.log('on cancel')
    },
    onSubmit() {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        //					type: 'text',
        //					position: 'fixed',
        //					text: 'on submit'
      })
    },
    changeStyle() {
      var weui_search_bar = document.getElementsByClassName(
        'weui-search-bar'
      )[0]
      var weui_search_bar_form = document.getElementsByClassName(
        'weui-search-bar__form'
      )[0]
      var weui_search_bar_label = document.getElementsByClassName(
        'weui-search-bar__label'
      )[0]
      weui_search_bar.style.backgroundColor = '#FFF'
      weui_search_bar_form.style.height = '93%'
      weui_search_bar_form.style.borderRadius = '5rem'
      weui_search_bar_label.style.background = '#f0f0f0'
    }
  },
  mounted() {
    this.changeStyle()
  }
}
</script>

<style scoped>
.address,
.right {
  margin: 0 10px;
  color: gray;
}

.search div {
  /*color: white;*/
}

.iconfont {
  font-size: 1.1rem;
  display: block;
  transform: scale(1.2);
}
/*.icon-saoma{font-size: 1.2rem;}*/
</style>