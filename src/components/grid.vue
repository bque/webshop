<template>
		<grid class="advertising" :cols='cols'>
				<grid-item link="/conment/1" v-for="(value,index) in counts" :style="heights">
					<!--<img slot="icon" src="../img/shop-record.jpg">-->
					<!--<p>{{content[index].name}}</p>-->
					{{index}}
				</grid-item>	
				<!--<grid-item link="/conment/1" :label="content">
					<img slot="icon" src="../img/shop-record.jpg">
				</grid-item>
				<grid-item link="/conment/1" :label="content">
					<img slot="icon" src="../img/shop-record.jpg">
				</grid-item>-->				
		</grid>
</template>

<script>
	import {Grid, GridItem } from 'vux'
	export default{
	components:{Grid, GridItem},
	props:['col','count',"height"],
	data(){
		return {
//			content:[{'name':'as是在'},{'name':'asd在'},{'name':'asd在'},{'name':'asd在'}],
			cols:this.col||1,
			counts:this.count||3,
			heights:'height:'+this.height+'rem'
		}
	}
}
</script>

<style>
</style>