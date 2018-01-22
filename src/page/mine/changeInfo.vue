<template>
  <div>
    <x-header class="tilte-header">
      <span style="color: #333;">改资料</span>
    </x-header>
    <Group class="m-1-t">
      <cell is-link value="修改头像">
        <img slot="icon" class="head-icon" src="../../../static/img/logo.jpg" />
      </cell>
      <x-input title="昵称" :placeholder="username" placeholder-align="right"></x-input>
      <datetime title="生日" v-model="time" value-text-align="right"></datetime>
    </Group>
    <br>
    <router-link to="/userCenter">
      <x-button type="warn" action-type="reset" class="btn-place">确定</x-button>
    </router-link>
  </div>
</template>
<script>
import { Group, Cell, Datetime, XHeader, XInput, XButton } from 'vux'
export default {
  components: {
    Group,
    Cell,
    Datetime,
    XHeader,
    XInput,
    XButton
  },
  data () {
    return {
      username: '猪，你的鼻子有两个孔',
      time: '1966-01-12'
    }
  }
}
</script>
<style scoped>
.head-icon {
  width: 50px;
  display: inline-block;
  margin-right: 5px;
  border-radius: 50%;
}
.m-1-t {
  margin-top: -1.3em;
}
.tilte-header {
  background-color: #fff;
}
</style>