<template>
  <x-header class="tilte-header">
    <span style="color: #333;">{{title}}</span>
  </x-header>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  },
  props: ['title']
}
</script>
<style scoped>
.tilte-header {
  background-color: #fff;
}
</style>