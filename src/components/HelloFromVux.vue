<template>
	<div>
		<div class="vux-demo">
			<img class="logo" src="../assets/vux_logo.png">
			<h1>asdasdas </h1>
			<h1>{{this.$route.params.id}} </h1>
		</div>
		<group title="cell demo">
			<cell title="VUX" value="cool" is-link></cell>
			<cell title="title" value="value" inline-desc="nihao"></cell>
			<datetime v-model="value1" @on-change="change" :title="Birthday" @on-cancel="log('cancel')" @on-confirm="log('confirm')" @on-hide="log('hide', $event)"></datetime>
		</group>
		<divider>Radio: no default value</divider>
		<div class="box">
			<checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
				<checker-item value="1">AA</checker-item>
				<checker-item value="2">GF</checker-item>
				<checker-item value="3">SA </checker-item>
				<checker-item value="4">小</checker-item>
				<checker-item value="5">'驴'</checker-item>
			</checker>
			<br>
			<span>Current value is': {{ demo1 }}</span>
			<br>
		</div>
		<!--<group>
			<cell title="title" value="value"></cell>
		</group>-->
	</div>
</template>

<script>
import {
  Checker,
  CheckerItem,
  Divider,
  Group,
  Cell,
  Popup,
  TransferDom,
  Datetime
} from 'vux'

export default {
  components: {
    Checker,
    CheckerItem,
    Divider,
    Group,
    Cell,
    Popup,
    TransferDom,
    Datetime
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      demo1: '',
      value1: '2015-11-12',
      Birthday: '生日'
    }
  },
  methods: {
    log(str1, str2 = '') {
      console.log(str1, str2)
    },
    change(value) {
      console.log('change', value)
    }
  }
}
</script>

<style scoped>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
</style>