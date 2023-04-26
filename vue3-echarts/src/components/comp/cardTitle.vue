<template>
	<div class="card-title">
		<div class="card-text">
			<span>状态栏</span>
			<span>当天</span>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card-title {
	width: 23vw;
	height: 6vh;
	background: url('@/assets/dash/title.png') no-repeat;
	background-size: 100%;
	display: flex;
	justify-content: center;
	color: #fff;
	.card-text {
		width: 18vw;
		display: flex;
		justify-content: space-between;
	}
}
</style>
