<template>
	<div class="con">
		<heade></heade>
		<div class="echarts-con">
			<left></left>
			<center></center>
			<right></right>
		</div>
	</div>
</template>

<script setup>
import Heade from '@/components/header/heade.vue'
import Left from '@/components/left/index.vue'
import Center from '@/components/center/index.vue'
import Right from '@/components/right/index.vue'
</script>

<style scoped lang="scss">
.con {
	width: 96vw;
	height: 100vh;
	background: url('@/assets/dash/back.png') no-repeat;
	padding: 0 2vw;
	background-size: 100% 101%;
	.echarts-con {
		width: 100%;
		height: 92vh;
		display: flex;
		justify-content: space-between;
		//display: grid;
		//grid-template-columns: 1fr 2fr 1fr;
	}
}
</style>
