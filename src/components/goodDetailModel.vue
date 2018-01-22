<template>
  <div>
    <group>
      <x-switch title="set max-height=50%" v-model="show13"></x-switch>
    </group>
    <div v-transfer-dom>
      <popup v-model="show13" position="bottom" max-height="50%">
        <!--<group>
          <cell v-for="i in 20" :key="i" :title="i"></cell>
        </group>-->
        <div style="padding: 15px;">
          <x-button @click.native="show13 = false" plain type="primary"> Close Me </x-button>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import {
  TransferDom,
  Popup,
  Group,
  Cell,
  XButton,
  XSwitch,
  Toast,
  XAddress,
  ChinaAddressData
} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Group,
    Cell,
    XSwitch,
    Toast,
    XAddress,
    XButton
  },
  data () {
    return {
      show13: false
    }
  },
  methods: {},
  watch: {}
}
</script>

<style scoped="scoped">
/*.GoodDetailModel{width: 100%; height: 20REM; background: red;}*/
</style>