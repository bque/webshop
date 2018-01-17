<template>

	<div class="advertisingTop">
		<ul>
			<li>
				<img src="../../static/img/shop-record.jpg" />
				<p>优惠券</p>
			</li>
			<li>
				<img src="../../static/img/home-member-card.jpg" />
				<p>会员卡</p>
			</li>
			<li>
				<img src="../../static/img/money-card.jpg" />
				<p>储值卡</p>
			</li>
		</ul>
	</div>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  components: {
    Grid,
    GridItem
  },
  data() {
    return {
      contentOne: '优惠券',
      contentTwo: '会员卡',
      contentThree: '储值卡'
    }
  }
}
</script>

<style scoped>
.advertisingTop {
  width: 100%;
  height: 4rem;
  position: relative;
}

.advertisingTop ul {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 0.8rem;
}

.advertisingTop ul li {
  float: left;
  width: 33.333%;
  height: 100%;
  list-style: none;
}

.advertisingTop ul li img {
  width: 30%;
  margin-top: 0.45rem;
  margin-left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.advertisingTop ul li p {
  display: block;
  width: 33.333%;
  height: 100%;
  position: absolute;
  bottom: -2.4rem;
  text-align: center;
}

.advertisingTop li:nth-of-type(1) {
  background: #e70012;
}

.advertisingTop li:nth-of-type(2) {
  background: #f27b13;
}

.advertisingTop li:nth-of-type(3) {
  background: #feba17;
}
</style>