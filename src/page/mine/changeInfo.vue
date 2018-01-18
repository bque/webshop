<template>
  <div>
    <Group class="m-t-0">
      <cell title="头像" is-link><img slot="icon" class="" src="../../../static/img/logo.jpg"/></cell>
      <cell title="昵称" is-link></cell>
      <cell title="生日" is-link></cell>
    </Group>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group,
    Cell
  }
}
</script>
<style scoped>
    .head-icon {
        width: 20px;
        display: inline-block;
        margin-right: 5px;
    }
</style>