<template>
    <div>
        <x-header class="tilte-header">
            <span style="color: #333;">{{titleContent}}</span>
        </x-header>
        <new-adds></new-adds>
    </div>
</template>
<script>
import { XHeader } from 'vux'
import newAdds from '../../components/newAdds.vue'
export default {
  components: {
    XHeader,
    newAdds
  },
  data() {
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
</style>
