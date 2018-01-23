<template>
  <div class="login-cloumn">
    <title-header :title="title"></title-header>
    <div class="card-block">
      <img slot="header" src="../../../static/img/favicon.png" class="about-icon">
      <div class="login-input">
        <group>
          <x-input placeholder="请输入手机号">
            <span slot="label" class="iconfont icon-shouji01 icon-login"></span>
          </x-input>
          <x-input placeholder="请输入密码" type="password" v-model="passwords">
            <span slot="label" class="iconfont icon-dengluyemianmima icon-login"></span>
          </x-input>
        </group>
        <router-link to="">
          <p class="b-t-text">忘记密码</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, XInput, XButton, Group } from 'vux'
import TitleHeader from '@/components/titleHeader.vue'

export default {
  components: {
    Card,
    XInput,
    XButton,
    Group,
    TitleHeader
  },
  data () {
    return {
      passwords: '',
      title: '登录'
    }
  }
}
</script>
<style scoped>
.about-icon {
  width: 66px;
  display: block;
  margin: auto;
}
.card-block {
  width: 100%;
  margin: auto;
  height: 100%;
  background-color: #fff;
}
.login-cloumn {
  width: 100%;
  height: 100%;
  position: absolute;
}
.login-input {
  width: 80%;
  margin: auto;
}
.icon-login {
  padding-right: 15px;
}
.login-input span{
 font-size: 1.5rem;
}
.b-t-text {
  color: #E5E5E5;
}
</style>
