<template>
  <div>
    <x-header class="tilte-header">
      <span style="color: #333;">个人中心</span>
    </x-header>
    <Group class="m-1-t">
      <router-link to="/changeInfo">
        <cell title="改资料" is-link></cell>
      </router-link>
      <router-link to="/password">
        <cell title="修改密码" is-link></cell>
      </router-link>
      <router-link to="/about">
        <cell title="关于我们" is-link></cell>
      </router-link>
    </Group>
  </div>
</template>
<script>
import { Group, Cell, XHeader } from 'vux'
export default {
  components: {
    Group,
    Cell,
    XHeader
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
a {
  color: #333;
}
</style>
