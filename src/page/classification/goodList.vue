<template>
  <div>
    <title-header :title="title"></title-header>
    <goodList>
    </goodList>
  </div>
</template>

<script>
import OrderResultTop from '../../components/orderResultTop'
import GoodList from '../../components/goodList'
import TitleHeader from '@/components/titleHeader.vue'
export default {
  components: {
    OrderResultTop,
    GoodList,
    TitleHeader
  },
  data () {
    return {
      title: '键盘'
    }
  }
}
</script>

<style scoped>
.title {
  line-height: 3rem;
  width: 100%;
  height: 3rem;
  background: white;
  font-size: 1.2rem;
  margin-bottom: -16px;
  text-align: center;
  position: relative;
  line-height: 3rem;
  margin-bottom: 0.1rem;
  border-bottom: 2px solid gainsboro;
}
.icon {
  position: absolute;
  left: 3%;
  top: 50%;
  transform: translate(0, -50%);
}
</style>