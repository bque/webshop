<template>
  <div class="header">
    <search class="search" placeholder="搜索" auto-scroll-to-top top="0" position="fixed" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search">
      <slot name='left' v-if="show">
        <div class="address" slot="left">{{place}}</div>
      </slot>
      <slot name='right' v-if="show">
        <span class="iconfont icon-saoma rights" slot="right"></span>
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
  data () {
    return {
      place: '福州',
      show: true
    }
  },
  methods: {
    onFocus () {
      this.show = false
      document.getElementsByClassName(
        'weui-search-bar__cancel-btn'
      )[0].style.color =
        'gray'
    },
    onCancel () {
      this.show = true
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        // type: 'text',
        // position: 'fixed',
        // text: 'on submit'
      })
    },
    changeStyle () {
      var weuiSearchBar = document.getElementsByClassName(
        'weui-search-bar'
      )[0]
      var weuiSearchBarForm = document.getElementsByClassName(
        'weui-search-bar__form'
      )[0]
      var weuiSearchBarLabel = document.getElementsByClassName(
        'weui-search-bar__label'
      )[0]
      weuiSearchBar.style.backgroundColor = '#FFF'
      weuiSearchBarForm.style.height = '93%'
      weuiSearchBarForm.style.borderRadius = '5rem'
      weuiSearchBarLabel.style.background = '#f0f0f0'
    }
  },
  mounted () {
    this.changeStyle()
  }
}
</script>

<style scoped>
.address,
.rights {
  color: gray;
}
.address {
  margin-right: 10px;
}
.rights {
  margin-left: 10px;
}
.address {
  width: 2.2rem;
}

.iconfont {
  font-size: 1.1rem;
  display: block;
  transform: scale(1.2);
}
/*.icon-saoma{font-size: 1.2rem;}*/
</style>