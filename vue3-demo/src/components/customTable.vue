<template>
	<div class="customTable">
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="Date" width="180">
				<template #header="{ row }">
					date
					<el-button>1</el-button>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180" />
			<el-table-column prop="address" label="Address" />
			<el-table-column>
				<el-button @click="openDialog">按钮</el-button>
			</el-table-column>
		</el-table>
		<el-dialog title="下发记录" v-model="Dialog">
			<custom-table2></custom-table2>
		</el-dialog>
	</div>
</template>

<script setup>
import CustomTable2 from '@/components/customTable2.vue'
let Dialog = $ref(false)
const openDialog = () => {
	console.log(1)
	Dialog = true
}
const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
]
</script>

<style lang="scss" scoped></style>
