<template>
  <div>
    <title-header :title="title"></title-header>
    <div class="top-bolck">
      <adds></adds>
    </div>
    <router-link to="/newaddress">
      <x-button type="warn" action-type="reset" class="btn-place">新增收货地址</x-button>
    </router-link>
  </div>

</template>
<script>
import { XButton } from 'vux'
import TitleHeader from '@/components/titleHeader.vue'
import Adds from '@/components/adds.vue'
export default {
  components: {
    Adds,
    XButton,
    TitleHeader
  },
  data () {
    return {
      title: '收货地址'
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
.top-bolck {
  border-top: 1px solid #e5e5e5;
}
</style>