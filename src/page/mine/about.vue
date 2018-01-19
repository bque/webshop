<template>
    <div>
        <x-header class="tilte-header">
            <span style="color: #333;">关于我们</span>
        </x-header>
        <card class="m-t-0">
            <img slot="header" src="../../../static/img/favicon.png" class="about-icon">
        </card>
        <group class="m-1-t">
            <cell title="版本更新" is-link></cell>
        </group>
    </div>
</template>
<script>
import { Card, Cell, Group , XHeader} from 'vux'
export default {
  components: {
    Card,
    Cell,
    Group,
    XHeader
  }
}
</script>
<style scoped>
.m-1-t {
  margin-top: -1.3em;
}
.tilte-header {
  background-color: #fff;
}
.about-icon {
    width: 100px;
    display: block;
    margin: auto;
    padding: 76px;
}
.m-t-0 {
    margin-top: 0;
}
</style>
