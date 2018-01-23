<template>
  <div>
    <title-header :title="title"></title-header>
    <new-adds></new-adds>
    <router-link to="address">
      <x-button type="warn" action-type="reset" class="btn-place">保存</x-button>
    </router-link>
  </div>
</template>
<script>
import { XButton } from 'vux'
import newAdds from '../../components/newAdds.vue'
import TitleHeader from '@/components/titleHeader.vue'

export default {
  components: {
    newAdds,
    XButton,
    TitleHeader
  },
  data () {
    return {
      title: '新增收货地址'
    }
  }
}
</script>
<style scoped>
.btn-place {
  position: fixed;
  bottom: 0;
  border-radius: 0;
}
</style>
