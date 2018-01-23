<template>
  <div>
    <div class="address-bolck" v-for="(location,index) in locations">
      <router-link :to="{name:'newaddress', query : {Id:'1222'}}">
        <div class="address-icon">
          <a class="icon iconfont icon-weizhi"></a>
        </div>
        <div class="icon-right">
          <a class=" icon iconfont icon-dayuhao"></a>
        </div>
        <div class="vux-cell-box  address">
          <p>
            <span class="name">{{location.name}}</span>
            <span class="tel">{{location.phone}}</span>
            <a class="default" v-show="{isShow:index='0'}">默认</a>
          </p>
          <p class="addressP">{{location.place}}</p>
        </div>
      </router-link>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      locations: [
        {
          name: '陈胜',
          phone: '181****4621',
          place: '广东 深圳 宝安区 详细地址......'
        },
        {
          name: '陈胜',
          phone: '181****4621',
          place: '广东 深圳 宝安区 详细地址......'
        }
      ],
      isShow: ''
    }
  }
}
</script>

<style scoped>
.addressP {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}
.address {
  padding: 1rem 1rem 1rem 2.5rem;
  font-size: 1rem;
}
.default {
  padding: 1px 5px;
  font-size: 0.5rem;
  border: 1px solid red;
  color: red;
}

.m-1-t {
  margin-top: -1.3em;
}
.address-icon {
  display: inline-block;
  float: left;
  padding-left: 10px;
  padding-top: 30px;
}
.icon-right {
  float: right;
  display: inline-block;
  padding-right: 10px;
  padding-top: 30px;
}
.address-bolck {
  background-color: #fff;
  border-bottom: 1px solid #E5E5E5;
}
a {
  color: #333;
}
</style>
