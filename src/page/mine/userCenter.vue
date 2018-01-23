<template>
  <div>
    <title-header :title="title"></title-header>
    <Group class="m-1-t b-t-block">
      <router-link to="/changeInfo">
        <cell title="修改资料" is-link></cell>
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
import { Group, Cell } from 'vux'
import TitleHeader from '@/components/titleHeader.vue'
export default {
  components: {
    Group,
    Cell,
    TitleHeader
  },
  data () {
    return {
      title: '个人中心'
    }
  }
}
</script>
<style scoped>
.m-1-t {
  margin-top: -1.3em;
}
a {
  color: #333;
}
.b-t-block a div{
  border-bottom: 1px solid #E5E5E5;
}
</style>
