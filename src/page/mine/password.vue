<template>
  <div>
    <title-header :title="title"></title-header>
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
import { Group, XInput, XButton } from 'vux'
import TitleHeader from '@/components/titleHeader.vue'
export default {
  components: {
    Group,
    XInput,
    XButton,
    TitleHeader
  },
  data () {
    return {
      passwords: '',
      passwords1: '',
      passwords2: '',
      title: '修改密码'
    }
  }
}
</script>
<style scoped>
.m-1-t {
  margin-top: -1.3em;
}
.btn-place {
  width: 93%
}
</style>
