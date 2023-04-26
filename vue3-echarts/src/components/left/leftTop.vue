<template>
	<card-title></card-title>
	<div class="gauges">
		<div class="gauges-item">
			<v-chart :option="option"></v-chart>
		</div>
		<div class="gauges-item">
			<v-chart :option="option"></v-chart>
		</div>
		<div class="gauges-item">
			<v-chart :option="option"></v-chart>
		</div>
	</div>
</template>

<script setup>
import CardTitle from '@/components/comp/cardTitle.vue'
let option = {
	tooltip: {
		formatter: '{a} : {c}',
	},

	series: [
		{
			name: '详情',
			type: 'gauge',
			startAngle: 195,
			endAngle: -15,
			// min: '',
			max: 1,
			splitNumber: -1,
			progress: {
				show: true,
				width: 15,
				itemStyle: {
					color: '#00f0ff',
				},
			},
			splitLine: {
				show: false,
			},
			pointer: {
				show: false,
			},
			detail: {
				show: false,
				fontSize: 12,
			},
			data: [
				{
					value: 22,
					title: {
						offsetCenter: ['0%', '-30%'],
					},
					detail: {
						valueAnimation: true,
						offsetCenter: ['0%', '-10%'],
					},
				},
			],
		},
		{
			name: '详情',
			type: 'gauge',
			// min: '',
			max: 1,
			startAngle: 195,
			endAngle: -15,
			splitNumber: -1,
			progress: {
				show: true,
				width: 10,
				itemStyle: {
					color: '#fe00e6',
				},
			},
			splitLine: {
				show: false,
			},
			pointer: {
				show: false,
			},
			detail: {
				show: false,
				fontSize: 12,
			},
			data: [
				{
					value: 22,
					title: {
						offsetCenter: ['0%', '-30%'],
					},
					detail: {
						valueAnimation: true,
						offsetCenter: ['0%', '-10%'],
					},
				},
			],
		},
		{
			name: '详情',
			type: 'gauge',
			startAngle: 195,
			endAngle: -15,
			// min: '',
			max: 1,
			splitNumber: -1,
			progress: {
				show: true,
				width: 5,
				itemStyle: {
					color: '#163587',
				},
			},
			splitLine: {
				show: false,
			},
			pointer: {
				show: false,
			},
			detail: {
				fontSize: 14,
				fontFamily: 'QR',
				color: '#fff',
				formatter: function (value) {
					return value + '\n\n拦截次数'
				},
			},
			data: [
				{
					value: 22,
					// name: '25',
					title: {
						offsetCenter: ['0%', '-30%'],
					},
					detail: {
						valueAnimation: true,
						offsetCenter: ['0%', '20%'],
					},
				},
			],
		},
	],
	graphic: {
		elements: [
			{
				type: 'line',
				z: 4,
				style: {
					fill: '#1c45a7',
					stroke: '#1c45a7',
					lineWidth: 3,
				},
				shape: {
					x1: 50,
					y1: 0,
					x2: 0,
					y2: 0,
				},
				left: 'center',
				bottom: '30%',
				silent: true,
			},
			{
				type: 'line',
				z: 5,
				style: {
					fill: '#1c45a7',
					stroke: '#1c45a7',
					lineWidth: 3,
				},
				shape: {
					x1: 22,
					y1: 0,
					x2: 0,
					y2: 0,
				},
				left: '11%',
				bottom: '37%',
				silent: true,
				rotation: 9.7,
			},
			{
				type: 'line',
				z: 6,
				style: {
					fill: '#1c45a7',
					stroke: '#1c45a7',
					lineWidth: 3,
				},
				shape: {
					x1: 22,
					y1: 0,
					x2: 0,
					y2: 0,
				},
				right: '11%',
				bottom: '37%',
				silent: true,
				rotation: -9.7,
			},
		],
	},
}
</script>

<style lang="scss" scoped>
.gauges {
	width: 24vw;
	height: 15vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.gauges-item {
		width: 7vw;
		height: 14vh;
	}
}
</style>
