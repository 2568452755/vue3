<template>
	<div class="head">
		<div class="head-con">
			<div class="title"><img src="src/assets/dash/logo.png" alt=" " class="logo" /> 天清Web应用安全网关</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.head {
	width: 100%;
	height: 8vh;
	display: flex;
	justify-content: center;
	color: #fff;
	font-size: 1.25vw;
	background: url('@/assets/dash/head.png') no-repeat;
	background-size: 100% 100%;

	.head-con {
		width: 26vw;
		display: flex;
		justify-content: center;
		.title {
			display: flex;
			align-items: center;
			.logo {
				width: 1.25vw;
				height: 1.25vw;
			}
		}
	}
}
</style>
