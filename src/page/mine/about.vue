<template>
    <div>
        <title-header :title="title"></title-header>
        <card class="m-t-0">
            <img slot="header" src="../../../static/img/favicon.png" class="about-icon">
        </card>
        <group class="m-1-t">
            <cell title="版本更新" is-link></cell>
        </group>
    </div>
</template>
<script>
import { Card, Cell, Group } from 'vux'
import TitleHeader from '@/components/titleHeader.vue'
export default {
  components: {
    Card,
    Cell,
    Group,
    TitleHeader
  },
  data () {
    return {
      title: '关于我们'
    }
  }
}
</script>
<style scoped>
.m-1-t {
  margin-top: -1.3em;
}
.about-icon {
  width: 100px;
  display: block;
  margin: auto;
  padding: 76px;
}
.m-t-0 {
  margin-top: 0;
}
</style>
