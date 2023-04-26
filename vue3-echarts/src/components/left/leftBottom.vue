<template>
	<card-title></card-title>
	<div class="leftBottom">
		<v-chart :option="option"></v-chart>
	</div>
</template>

<script setup>
import CardTitle from '@/components/comp/cardTitle.vue'
const data = [70, 80, 130, 150, 200]
let option = {
	grid: {
		left: 60,
		top: 0,
	},
	// tooltip: {
	// 	trigger: 'axis',
	// 	position: 'right',
	// 	axisPointer: {
	// 		type: 'shadow',
	// 		label: {
	// 			formatter: function (value) {
	// 				console.log(value)
	// 				return value.seriesData[1].data.name
	// 			},
	// 		},
	// 	},
	// },
	xAxis: {
		show: false,
		// type: 'value',
		// splitLine: { show: false },
		// axisLabel: { show: false },
	},
	yAxis: {
		type: 'category',
		axisTick: { show: false },
		axisLine: { show: false },
		axisLabel: {
			margin: 32,
		},
		data: [
			{
				value: 'TOP5',
				name: '阿乐',
				textStyle: {
					color: '#fff',
					width: 46,
					height: 20,
					lineHeight: 24,
					backgroundColor: '#0064bc',
					borderRadius: 10,
					align: 'center',
				},
			},
			{
				name: 'zs',
				value: 'TOP4',
				textStyle: {
					color: '#fff',
					width: 46,
					height: 20,
					lineHeight: 24,
					backgroundColor: '#E9385D',
					borderRadius: 10,
					align: 'center',
				},
			},
			{
				name: 'zs',
				value: 'TOP3',
				textStyle: {
					color: '#fff',
					width: 46,
					height: 20,
					lineHeight: 24,
					backgroundColor: '#b48000',
					borderRadius: 10,
					align: 'center',
				},
			},
			{
				name: 'zs',
				value: 'TOP2',
				textStyle: {
					color: '#fff',
					width: 46,
					height: 20,
					lineHeight: 24,
					backgroundColor: '#c04800',
					borderRadius: 10,
					align: 'center',
				},
			},
			{
				name: 'zs',
				value: 'TOP1',
				textStyle: {
					color: '#fff',
					width: 46,
					height: 20,
					lineHeight: 24,
					backgroundColor: '#c20090',
					borderRadius: 10,
					align: 'center',
				},
			},
		],
	},
	series: [
		{
			type: 'bar',

			itemStyle: {
				normal: {
					label: {
						formatter(params) {
							// return params.value
							for (let i = 0; i < data.length; i++) {
								if (params.dataIndex === i) {
									return data[i]
									// return params.dataIndex
								}
							}
						},
						show: true,
						position: 'right',
					},
					color: '#212b58',
				},
			},
			silent: true,
			barGap: '-100%',
			data: [
				{
					value: 200,
					itemStyle: {
						borderRadius: 10,
					},
				},
				{
					value: 200,
					itemStyle: {
						borderRadius: 10,
					},
				},
				{
					value: 200,
					itemStyle: {
						borderRadius: 10,
					},
				},
				{
					value: 200,
					itemStyle: {
						borderRadius: 10,
					},
				},
				{
					value: 200,
					itemStyle: {
						borderRadius: 10,
					},
				},
			],
		},

		{
			type: 'bar',
			barWidth: 15,
			showBackground: true,
			backgroundStyle: {
				color: '#212b58',
				borderRadius: 10,
			},
			data: [
				{
					value: 70,
					itemStyle: {
						color: '#0064bc',
						borderRadius: 10,
					},
				},
				{
					value: 80,
					itemStyle: {
						color: '#E9385D',
						borderRadius: 10,
					},
				},
				{
					name: 'ls',
					value: 130,
					itemStyle: {
						color: '#b48000',
						borderRadius: 10,
					},
				},
				{
					name: 'ww',
					value: 150,
					itemStyle: {
						color: '#c04800',
						borderRadius: 10,
					},
				},
				{
					name: 'zl',
					value: 200,
					itemStyle: {
						color: '#c20090',
						borderRadius: 10,
					},
				},
			],
		},
	],
}
</script>

<style lang="scss" scoped>
.leftBottom {
	height: 26vh;
}
</style>
