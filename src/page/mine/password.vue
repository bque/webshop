<template>
  <div>
    <x-header class="tilte-header">
      <span style="color: #333;">修改密码</span>
    </x-header>

    <group label-width="4.2em" label-margin-right="1em" label-align="justify" class="m-1-t">
      <x-input title="当前密码" type="password" v-model="passwords"></x-input>
      <x-input title="新密码" type="password" v-model="passwords1"></x-input>
      <x-input title="确认密码" type="password" v-model="passwords2"></x-input>
    </group>
    <group title="密码长度8~32位，须包含数字，字母，符号，至少2种或以上元素">
    </group>
    <router-link to="/userCenter">
      <x-button type="warn" action-type="reset" class="btn-place">确定</x-button>
    </router-link>
  </div>

</template>
<script>
import { Group, XInput, XHeader, XButton } from 'vux'
export default {
  components: {
    Group,
    XInput,
    XHeader,
    XButton
  },
  data () {
    return {
      passwords: '',
      passwords1: '',
      passwords2: ''
    }
  }
}
</script>
<style scoped>
.tilte-header {
  background-color: #fff;
}
.m-1-t {
  margin-top: -1.3em;
}
</style>
