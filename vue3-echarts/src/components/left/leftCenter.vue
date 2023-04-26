<template>
	<card-title></card-title>
	<div class="leftCenter">
		<v-chart :option="option"></v-chart>
	</div>
</template>

<script setup>
import CardTitle from '@/components/comp/cardTitle.vue'
let option = {
	legend: {
		xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#0179FF',
					type: 'solid',
				},
			},
		},
		textStyle: {
			color: '#fff',
		},
		data: [
			{
				name: '速率',
				// 强制设置图形为长方。
				icon: 'rect',
			},
			{
				name: '速度',
				// 强制设置图形为长方。
				icon: 'rect',
			},
		],
		left: 'left',
	},
	tooltip: {
		trigger: 'axis',
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45'],
		axisTick: {
			show: false,
		},
		axisLabel: {
			color: '#fff',
		},
		axisLine: {
			lineStyle: {
				color: '#0179FF',
			},
		},
	},
	yAxis: {
		type: 'value',
		splitLine: {
			lineStyle: {
				color: '#0179FF',
				type: 'dashed',
			},
		},
		axisLabel: {
			color: '#fff',
		},
	},
	series: [
		{
			name: '速率',
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: 'line',
			smooth: true,
			color: '#e9385d',
			symbol: 'circle',
			symbolSize: 8,
			itemStyle: {
				color: '#E9385D',
				borderColor: '#FF9CB1',
			},
			lineStyle: {
				width: 3,
			},
		},
		{
			name: '速度',
			data: [420, 232, 601, 534, 490, 530, 1420],
			type: 'line',
			smooth: true,
			color: '#0d77fc',
			symbol: 'circle',
			symbolSize: 8,
			lineStyle: {
				width: 3,
			},
		},
	],
}
</script>

<style lang="scss" scoped>
.leftCenter {
	height: 30vh;
}
</style>
