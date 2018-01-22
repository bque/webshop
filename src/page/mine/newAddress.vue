<template>
  <div>
    <x-header class="tilte-header">
      <span style="color: #333;">{{titleContent}}</span>
    </x-header>
    <new-adds></new-adds>
    <router-link to="address">
      <x-button type="warn" action-type="reset" class="btn-place">保存</x-button>
    </router-link>
  </div>
</template>
<script>
import { XHeader, XButton } from 'vux'
import newAdds from '../../components/newAdds.vue'
export default {
  components: {
    XHeader,
    newAdds,
    XButton
  },
  data () {
    return {
      titleContent: '新增收货地址'
    }
  }
}
</script>
<style scoped>
.tilte-header {
  background-color: #fff;
}
.btn-place {
  position: fixed;
  bottom: 0;
  border-radius: 0;
}
</style>
