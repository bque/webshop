<template>
  <div>
    <Group class="m-t-0">
      <cell title="改资料" is-link></cell>
      <cell title="修改密码" is-link></cell>
      <cell title="关于我们" is-link></cell>
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
