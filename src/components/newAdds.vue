<template>
  <div>
    <group label-width="4.5em" label-align="right" label-margin-right="2em" class="m-1-t">
      <x-input title="姓名" placeholder="必填" v-model="username"></x-input>
      <x-input title="电话" placeholder="必填" v-model="phone"></x-input>
      <x-address title="地区" v-model="place" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-input title="地址" placeholder="必填" v-model="adds"></x-input>
    </group>
  </div>
</template>
<script>
import { Group, XInput, XAddress, ChinaAddressV4Data } from 'vux'
export default {
  components: {
    Group,
    XInput,
    XAddress
  },
  data () {
    return {
      username: '小陈',
      phone: '1546467646',
      adds: '仙塔街25号',
      place: ['天津市', '市辖区', '和平区'],
      addressData: ChinaAddressV4Data
    }
  }
}
</script>
<style scoped>
.m-1-t {
  margin-top: -1.3em;
}
</style>
