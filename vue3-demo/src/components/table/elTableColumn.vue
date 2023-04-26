<template>
	<el-table-column :prop="prop" :label="label" :width="width">1</el-table-column>
</template>

<script setup>
defineProps({
	prop: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
	width: {
		type: Number,
		// default:
	},
})
</script>

<style lang="scss" scoped></style>
