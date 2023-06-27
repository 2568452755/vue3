<template>
	<view>
		<u-button text="月落"></u-button>
		初始资金:<input v-model="init" /><br />
		池内资金:<input v-model="com" /><br />
		持有份额:<input v-model="copies" /><br />
		买入手续费:<input v-model="buyCommission" /><br />
		卖出手续费:<input v-model="sellCommission" /><br />
		<p>------------------</p>
		下降:<input v-model="down" /><br />
		<button @click="buySubmit">提交</button><br />
		需要买入:{{ buy }} <br />

		<p>------------------</p>
		上升:<input v-model="up" /> <br />
		<button @click="sellSubmit">提交</button><br />
		需要卖出:{{ sell }} <br />
		需要卖出:{{ sellCopies }}份 <br />
	</view>
</template>

<script>
import Decimal from 'decimal.js'
const decimal = (obj) => {
	return new Decimal(obj)
}
const add = (num1, num2) => {
	return decimal(num1).add(decimal(num2)).toNumber()
}
const sub = (num1, num2) => {
	return decimal(num1).sub(decimal(num2)).toNumber()
}
const mul = (num1, num2) => {
	return decimal(num1).mul(decimal(num2)).toNumber()
}
const div = (num1, num2) => {
	return decimal(num1).div(decimal(num2)).toNumber()
}
export default {
	data() {
		return {
			title: 'Hello',
			init: '', //初始资金
			com: 199.8, //池内资金-购入手续费
			copies: 100, //持有份额
			//---
			buyCommission: 0.001, //买入手续费率
			down: 0.02, //跌率
			buy: 0, //买入
			//---
			sellCommission: 0.005, //卖出手续费率
			up: 0.02,
			sell: 0, //卖出金额
			sellCopies: 0, //卖出份额
		}
	},
	onLoad() {},
	methods: {
		buySubmit() {
			if (this.init == '') {
				//由池内算初始
				//199.8/(1-0.001)
				let a = sub(1, this.buyCommission)
				this.init = div(this.com, a)
			} else {
				//由初始算池内
				//	初始资金
				//	1-0.001
				let a = sub(1, this.buyCommission)
				//	200*0.999
				this.com = mul(this.init, a)
			}
			this.compu(this.com)
		},
		compu(Inside) {
			// (200*(1-0.001)*(1-0.02)+x*(1-0.001))*(1+0.02)*(1-0.005)>=200+x
			/**
			 * 令t=200*(1-0.001)*(1-0.002),u=(1+0.02)*(1-0.005),y=1-0.001
			 * (t+x*y)*u=200+x
			 * t*u+x*y*u=200+x
			 * t*u-200=x(1-y*u)
			 * x=t*u-200/(1-y*u)
			 */

			//	池内资金*跌率
			let s = sub(1, this.down)
			let t = mul(Inside, s)
			// //	(1+涨率)*(1-卖出手续费)
			let a = add(1, this.up)
			let b = sub(1, this.sellCommission)
			let u = mul(a, b)
			//	二次买入手续费,1-0.001
			let y = sub(1, this.buyCommission)
			//	t*u
			let c = mul(t, u)
			let cc = sub(c, this.init)
			//	(1-y*u)
			let d = mul(y, u)
			let e = sub(1, d)
			// x=t*u/(1-y*u)
			this.buy = div(cc, e)
		},
		sellSubmit() {
			if (this.init == '') {
				//199.8/(1-0.001)
				let a = sub(1, this.buyCommission)
				this.init = div(this.com, a)
			}
			// (200*(1-0.001)*(1+0.02)-x)*(1-0.02)*(1-0.005)>=200-x*(1-0.005)
			/**
			 * 令t=200*(1-0.001)*(1+0.02), u=(1-0.02)*(1-0.005), y=(1-0.005)
			 * (t-x)*u>=200-x*y
			 * t*u-x*u>=200-x*y
			 * (y-u)*x>=200-t*u
			 * x>=(200-t*u)/(y-u)
			 */
			//	t
			let a = sub(1, this.buyCommission)
			let b = add(1, this.up)
			let c = mul(a, b)
			let t = mul(this.init, c)
			//	u
			let d = sub(1, this.up)
			let e = sub(1, this.sellCommission)
			let u = mul(d, e)
			//	t*u
			let f = mul(t, u)
			//200-t*u
			let g = sub(this.init, f)
			//	y
			let y = sub(1, this.sellCommission)
			let h = sub(y, u)
			this.sell = div(g, h)
			// 卖出份额 this.sell/200*(1-0.001)*(1+0.02)/100
			// 每份金额
			let i = div(t, this.copies)
			// 卖出份额
			this.sellCopies = div(this.sell, i)
		},
	},
}
</script>

<style>
/* .content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
} */
</style>
