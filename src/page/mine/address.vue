<template>
    <div>
        <x-header class="tilte-header">
            <span style="color: #333;">收货地址</span>
        </x-header>
        <adds></adds>
        <router-link to="/newaddress">
            <x-button type="warn" action-type="reset" class="btn-place">新增收货地址</x-button>
        </router-link>
    </div>

</template>
<script>
import { XHeader, XButton } from 'vux'
import Adds from '../../components/adds.vue'
export default {
  components: {
    XHeader,
    Adds,
    XButton
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