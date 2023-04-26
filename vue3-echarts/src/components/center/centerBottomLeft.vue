<template>
	<div class="centerBottomItem">
		<card-title></card-title>
		<v-chart :option="option"></v-chart>
	</div>
</template>

<script setup>
import CardTitle from '@/components/comp/cardTitle.vue'
let option = {
	color: ['#67f9d8'],

	tooltip: {
		trigger: 'item',
		formatter: '来源地域<br/>德国: 2200<br/>韩国: 18000<br/>美国: 54000<br/>中国: 35000<br/>日本: 5000<br/>英国: 18120',
	},
	radar: {
		startAngle: 0,
		splitNumber: 3,
		axisLine: {
			show: true,
			lineStyle: {
				width: 2,
				color: '#01a1f0',
			},
		},

		splitLine: {
			show: false,
		},
		splitArea: {
			areaStyle: {
				color: ['#008ce4', '#0265c1', '#032f73'],
			},
		},
		center: ['50%', '40%'],
		indicator: [
			// , min:14000
			{ name: '德国', max: 54000 },
			{ name: '韩国', max: 54000 },
			{ name: '美国', max: 54000 },
			{ name: '中国', max: 54000 },
			{ name: '日本', max: 54000 },
			{ name: '英国', max: 54000 },
		],
	},
	series: [
		{
			name: 'Budget vs spending',
			type: 'radar',
			symbol: 'none',
			data: [
				{
					value: [18000, 18000, 54000, 35000, 18000, 18000],
					name: '来源地域',
					itemStyle: {},
				},
			],
		},
	],
}
</script>

<style lang="scss" scoped></style>
