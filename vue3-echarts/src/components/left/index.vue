<template>
	<div class="left">
		<div class="time">
			<i>i</i>
			<span>2023-02-14 13:55:41</span>
			<i>i</i>
		</div>
		<left-top></left-top>
		<left-center></left-center>
		<left-bottom></left-bottom>
	</div>
</template>

<script setup>
import LeftTop from '@/components/left/leftTop.vue'
import LeftCenter from '@/components/left/leftCenter.vue'
import LeftBottom from '@/components/left/leftBottom.vue'
</script>

<style lang="scss" scoped>
.left {
	//background-color: skyblue;
	width: 23vw;
	height: 92vh;
	.time {
		color: #fff;
		font-family: QR, serif;
	}
}
</style>
