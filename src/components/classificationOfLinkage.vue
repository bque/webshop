<template>
  <div class="classification">
    <div class="left">
      <ul>
        <li v-for="(value,index) in goodsList" :class="{active:current[index]}" @click="switchGood(index)">
          {{value.name}}
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="wrap" v-for="(value,index) in goodsList[goodnameNum].good">
        <p>{{value.listName}}</p>
        <ul class="clearfix wrapHeight">
          <li v-for="(val,indexs) in value.goodList" class="liHeight">
            <router-link :to="{name:'goodlist' ,query : {Id:'1222'}}">
              <img src="http://hkimg.yonghuigo.com/yhht/01/c0ce3c191a51bf28a33a16bddc30cabf-220-220.jpg" />
              <h5>{{val.good}}</h5>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      goodnameNum: 0,
      current: [],
      goodsList: [
        {
          name: '母婴用品',
          good: [
            {
              listName: '休闲食品',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品1',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品1',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品1',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品1',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品1',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            }
          ]
        },
        {
          name: '母婴用品2',
          good: [
            {
              listName: '休闲食品2',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理2'
                }
              ]
            },
            {
              listName: '休闲食品2',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理2'
                }
              ]
            }
          ]
        },
        {
          name: '母婴用品3',
          good: [
            {
              listName: '休闲食品3',
              goodList: [
                {
                  img: '',
                  good: '产品护理3'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品3',
              goodList: [
                {
                  img: '',
                  good: '产品护理3'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            }
          ]
        },
        {
          name: '母婴用品3',
          good: [
            {
              listName: '休闲食品3',
              goodList: [
                {
                  img: '',
                  good: '产品护理3'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品3',
              goodList: [
                {
                  img: '',
                  good: '产品护理3'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            }
          ]
        },
        {
          name: '母婴用品',
          good: [
            {
              listName: '休闲食品',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品1',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            }
          ]
        },
        {
          name: '母婴用品2',
          good: [
            {
              listName: '休闲食品2',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理2'
                }
              ]
            },
            {
              listName: '休闲食品2',
              goodList: [
                {
                  img: '',
                  good: '产品护理'
                },
                {
                  img: '',
                  good: '产品护理2'
                }
              ]
            }
          ]
        },
        {
          name: '母婴用品3',
          good: [
            {
              listName: '休闲食品3',
              goodList: [
                {
                  img: '',
                  good: '产品护理3'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品3',
              goodList: [
                {
                  img: '',
                  good: '产品护理3'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            }
          ]
        },
        {
          name: '母婴用品3',
          good: [
            {
              listName: '休闲食品3',
              goodList: [
                {
                  img: '',
                  good: '产品护理3'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            },
            {
              listName: '休闲食品3',
              goodList: [
                {
                  img: '',
                  good: '产品护理3'
                },
                {
                  img: '',
                  good: '产品护理'
                }
              ]
            }
          ]
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        },
        {
          name: '母婴用品3'
        }
      ]
    }
  },
  methods: {
    switchGood(index) {
      this.current = []
      this.current[index] = true
      this.goodnameNum = index
      this.setHeight()
    },
    setHeight() {
      this.$nextTick(function() {
        var row = Math.ceil(num)
        var liHeight = 6
        var ulDom = document.getElementsByClassName('wrapHeight')
        for (var i = 0; i < ulDom.length; i++) {
          var num =
            document.getElementsByClassName('wrapHeight')[i].children.length / 3
          var row = Math.ceil(num)
          ulDom[i].style.height = liHeight * row + 'rem'
        }
      })
    }
  },
  mounted() {
    this.setHeight()
  },
  created() {
    this.current[0] = true
  },
  watch: {
    current() {
      //				this.setHeight();
    }
  }
}
</script>

<style>
.clearfix {
  display: block;
  clear: both;
  content: '';
}

.classification {
  width: 100%;
  clear: both;
  background: #f0f0f0;
}

.classification ul {
  list-style: none;
}

.left {
  width: 23%;
  text-align: center;
}

.right {
  width: 77%;
}
.left,
.right {
  height: 38rem;
  float: left;
  overflow-y: scroll;
  padding-top: 0.4rem;
}
.left ul li {
  font-size: 0.8rem;
  opacity: 0.8;
  box-sizing: border-box;
  line-height: 3rem;
  width: 100%;
  background: white;
  height: 3rem;
  margin-bottom: 2px;
}

.left .active {
  background: #f0f0f0;
  color: red;
  border-left: 1.5px solid red;
  /*border-top: 1px solid gray;
		border-bottom: 1px solid gray;*/
}

.right .wrap {
  width: 92%;
  margin: 0 auto;
}

.right .wrap p {
  font-weight: bold;
  padding: 0.8rem 0 0.5rem 0;
  font-size: 0.87rem;
}

.right ul {
  width: 100%;
  height: 100%;
  /*overflow-y: scroll;*/
  background: white;
  padding: 1rem 0;
}

.right ul li {
  width: 33%;
  /*border: 1px solid red;*/
  box-sizing: border-box;
  float: left;
  height: 6rem;
  text-align: center;
}

.right ul li img {
  margin-top: 10%;
  width: 60%;
  margin-left: 50%;
  transform: translate(-50%, 0);
}

.right ul li h5 {
  font-weight: normal;
  color: gray;
}
::-webkit-scrollbar {
  display: none;
}
</style>