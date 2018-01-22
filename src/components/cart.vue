<template>
  <div class="cart">
    <div class="top">
      <h2>购物车</h2>
      <span>编辑</span>
    </div>
    <div class="section">
      <div class="store" v-for="(value,index) in shoppingGoods">
        <div class="shopName"><input type="checkbox" v-model="value.checkStoreAll" @click="checkStoreAll(index)" /> {{value.store}}</div>
        <ul class="shopGoods">
          <li class="clearfix shopGoodsLi" v-for="(item,indexs) in value.goods">
            <div class="left">
              <input type="checkbox" v-model="item.check" @click="checkItem(index,indexs)" />
              <router-link :to="{name:'gooddetail' ,query : {Id:'1222'}}">
                <img :src='item.img' align="absmiddle" />
              </router-link>
            </div>
            <div class="right relative" :class="{noBorder:indexs==value.goods.length-1}">

              <p class="firstP">
                <router-link :to="{name:'gooddetail' ,query : {good:'1222'}}" style="border: none;">{{item.name}}</router-link>
              </p>

              <p>
                <span class='opacity'>重量:{{item.weight}}</span>
                <span class="positionRight opacity">修改</span>
              </p>
              <p class="lastP">
                <span class="money">￥{{item.price}}</span>
                <!--<s class="referencePrice">$100</s>-->
                <span class="positionRight">
                  <a class="a" @click="changeNum(index,indexs,-1)">-</a>
                  <a class="a">{{item.num}}</a>
                  <a class="a" @click="changeNum(index,indexs,1)">+</a>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom relative">
      <input type="checkbox" v-model="checkAll" @click="checkAllGoods" /> 全选
      <a class="total">合计:
        <span class="money smallFont">￥{{totalMoney}}</span>
      </a>
      <router-link :to="{name:'fillorder',query:{Id:'122'}}" class="settlement">去结算(1)</router-link>
    </div>
  </div>

</template>

<script>
export default {
  components: {},
  data () {
    return {
      checkAll: false,
      totalMoney: 0,
      shoppingGoods: [
        {
          store: '新华都超市',
          checkStoreAll: false,
          goods: [
            {
              img:
                'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
              name: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
              weight: '0.39kg',
              price: 500,
              num: 1,
              check: false
            },
            {
              img:
                'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
              name: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
              weight: '0.39kg',
              price: 500,
              num: 1,
              check: false
            }
          ]
        },
        {
          store: '新华都超市2',
          checkStoreAll: false,
          goods: [
            {
              img:
                'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
              name: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
              weight: '0.39kg',
              price: 500,
              num: 2,
              check: false
            },
            {
              img:
                'https://img.alicdn.com/imgextra/i1/59857264/TB2ItmtdaigSKJjSsppXXabnpXa_!!0-saturn_solar.jpg_220x220.jpg',
              name: 'Apple iphone 1plus 128G 红色特别版 移动联通电信4G手机',
              weight: '0.39kg',
              price: 500,
              num: 1,
              check: false
            }
          ]
        }
      ],
      selectedGoogs: []
    }
  },
  methods: {
    checkAllGoods () {
      var mark = this.checkAll
      this.shoppingGoods.forEach((value, index) => {
        value.checkStoreAll = !mark
        value.goods.forEach(value => {
          value.check = !mark
        })
      })
      this.addMoney()
    },
    checkStoreAll (index) {
      var mark = this.shoppingGoods[index].checkStoreAll
      this.shoppingGoods[index].goods.forEach(value => {
        value.check = !mark
      })
      this.checkItem()
    },
    checkItem (indexOne, indexTwo) {
      this.addMoney()
      this.shoppingGoods.forEach((value, index) => {
        value.goods.forEach((item, indexs) => {
          value.checkStoreAll = true
          this.$nextTick(() => {
            if (!item.check) {
              value.checkStoreAll = false
            }
          })
        })
        this.checkAll = true
        this.$nextTick(() => {
          if (!value.checkStoreAll) {
            this.checkAll = false
          }
        })
      })
    },
    changeNum (indexOne, indexTwo, val) {
      this.shoppingGoods[indexOne].goods[indexTwo].num += val
      var num = this.shoppingGoods[indexOne].goods[indexTwo].num
      if (num < 1) {
        this.shoppingGoods[indexOne].goods[indexTwo].num = 1
      }
      this.addMoney()
    },
    addMoney () {
      this.$nextTick(() => {
        var totalMoney = 0
        this.shoppingGoods.forEach(value => {
          value.goods.forEach(item => {
            if (item.check) {
              totalMoney += item.num * item.price
            }
          })
        })
        this.totalMoney = totalMoney
      })
    }
  },
  watch: {}
}
</script>

<style scoped>
.cart {
  width: 100%;
  height: auto;
  background: #f0f0f0;
  overflow: hidden;
}

.cart .top {
  width: 100%;
  height: 3rem;
  position: relative;
  margin-bottom: 0.6rem;
  background: white;
  line-height: 3rem;
  box-shadow: 0 1px 1px grey;
}

.cart .top h2 {
  text-align: center;
  font-weight: normal;
  font-size: 1.2rem;
}

.cart .top span {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translate(0, -50%);
  opacity: 0.4;
}

.shopName {
  width: 100%;
  font-size: 0.9rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding-left: 3.5%;
  background: #fafafa;
}

.shopGoods {
  width: 100%;
  height: auto;
}

.shopGoods li {
  width: 100%;
  height: 6rem;
  background: white;
}

.shopGoods .left {
  width: 40%;
  height: 100%;
  float: left;
}

.shopGoods .right {
	
  padding-left: 2%;
  width: 58%;
  height: 100%;
  font-size: 0.8rem;
  float: left;
  border-bottom: 1px solid lightgray;
}

.shopGoods .right .a {
  padding: 2px 10px;
  border: 1px solid gainsboro;
}

.shopGoods .left input {
  margin-left: 10%;
}

.shopGoods .left img {
 height:5.1rem;
  margin-left: 5%;
}

.clearfix {
  display: block;
  clear: both;
  content: '';
}

.relative {
  position: relative;
}

.positionRight {
  position: absolute;
  right: 5%;
}

.opacity {
  opacity: 0.4;
}

.money {
  color: orangered;
  font-size: 1.1rem;
}

.smallFont {
  font-size: 1rem;
}

.lastP {
  line-height: 1.2rem;
  margin-top: 0.3rem;
}

.firstP {
  padding-right: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.shopGoodsLi {
  padding: 0.5rem 0;
}

.bottom {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background: white;
  position: fixed;
  border-bottom: 0.3rem solid#F0F0F0;
  bottom: 3rem;
  padding-left: 3.5%;
  z-index: 100;
}

.marginLeft {
  margin-left: 18%;
}

.settlement {
  color: white;
  font-size: 1.2rem;
  display: block;
  text-align: center;
  position: absolute;
  right: 3.5%;
  width: 30%;
  height: 3rem;
  background: orangered;
  top: 0;
}

.total {
  position: absolute;
  right: 35.5%;
}
.section .noBorder {
  border-bottom: none;
}
/*.referencePrice {
  opacity: 0.4;
}*/
</style>