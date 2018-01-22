<template>
  <div>
    <div class="good" v-for="(value,index) in goodsList">
      <div class="top">
        {{value.shopName}}
      </div>

      <div class="goodItem clearfix ">
        <div class="left">
          <img :src='value.goodImg' align="absmiddle" />
        </div>
        <div class="right relative">
          <p class="firstP">{{value.goodName}}</p>
          <p class="lastP">
            <span class='showColor opacity'>颜色 :{{value.goodColor}}</span>
            <span class="money positionRight">￥{{value.goodPrice}}</span>
          </p>
        </div>
      </div>
      <p class="goodBottom">
        <router-link :to="value.leftUrl">{{value.OperatingA}}</router-link>
        <router-link :to="value.rightUrl">{{value.OperatingB}}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      goodsList: this.list
    }
  }
}
</script>

<style scoped>
.top {
  height: 2rem;
  line-height: 2rem;
  background: rgb(241, 240, 243);
  padding-left: 2%;
}
.goodItem {
  width: 100%;
  height: 4rem;
  padding: 1rem 0 1.1rem 0;
  border-top: 2px solid #f0f0f0;
  border-bottom: 3px solid #f0f0f0;
}
.left {
  width: 25%;
  float: left;
  height: 100%;
}
.left img {
  width: 75%;
  margin-left: 10%;
}

.right {
  width: 70%;
  float: left;
  padding-left: 5%;
  height: 100%;
}
.right .firstP {
  font-size: 0.9rem;
  /*white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;*/
  padding-right: 5%;
  /*  margin-bottom: 1rem;*/
}
.showColor {
  font-size: 0.8rem;
}
.right .money {
  color: red;
  font-size: 1.2rem;
}
.opacity {
  opacity: 0.4;
}
.positionRight {
  position: absolute;
  right: 5%;
  font-size: 0.8rem;
}
.goodBottom {
  border-bottom: 3px solid #f0f0f0;
  height: 3rem;
  line-height: 3rem;
  text-align: right;
}

.goodBottom a {
  padding: 0.2rem 1rem;
  font-size: 0.8rem;
  border: 1px solid darkgray;
  border-radius: 15px;
  margin-right: 1rem;
  color: #333 !important;
}
</style>