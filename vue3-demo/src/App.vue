<template>
	<el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
		<el-tab-pane label="devicePlan" name="devicePlan">
			<device-plane></device-plane>
		</el-tab-pane>
		<el-tab-pane label="table1" name="table1">
			<custom-table></custom-table>
		</el-tab-pane>
		<el-tab-pane label="table2" name="table2">
			<custom-table></custom-table>
		</el-tab-pane>
	</el-tabs>
	<el-button @click="showTable">按钮</el-button>
	<my-table></my-table>
</template>
<script setup>
import DevicePlane from '@/components/devicePlane.vue'
import MyTable from '@/components/table/index.vue'
import CustomTable from '@/components/customTable.vue'
import { nextTick, onMounted } from 'vue'
let activeName = $ref('table1')
const handleClick = (TabsPaneContext, Event) => {}
//两个问题
//1.抽屉的表格不适用
//2.表头有插槽的话会把插槽代码全部加载出来
onMounted(() => {
	const table = document.querySelector('#app')
	table.addEventListener('mousemove', (e) => {
		const cellList = document.querySelectorAll('.cell')
		cellList.forEach((cell) => {
			cell.title = cell.innerHTML
				.replace(/<!---->/g, '')
				.replace(/<[^>]+>/g, '')
				.replace('&nbsp;', '')
		})
	})
})
nextTick(() => {})
let show = $ref(false)
const showTable = () => {
	show = !show
}
</script>
<style lang="scss" scoped></style>
