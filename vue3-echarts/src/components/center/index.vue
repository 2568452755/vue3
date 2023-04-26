<template>
	<div class="center">
		<center-top></center-top>
		<div class="centerBottom">
			<center-bottom-left></center-bottom-left>
			<center-bottom-right></center-bottom-right>
		</div>
	</div>
</template>
<script setup>
import CenterTop from '@/components/center/centerTop.vue'
import CenterBottomLeft from '@/components/center/centerBottomLeft.vue'
import CenterBottomRight from '@/components/center/centerBottomRight.vue'
</script>

<style lang="scss" scoped>
.center {
	//background-color: skyblue;
	width: 48vw;
	height: 92vh;
	.centerBottom {
		width: 48vw;
		height: 30vh;
		display: flex;
	}
}
.centerBottomItem {
	width: 24vw;
	height: 26vh;
}
</style>
