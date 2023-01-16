<template>
	<div class="container">
		<div class="left">
			<div>
				<img alt="" :src="left_logo(1)" />
			</div>
			<div class="left-bottom">
				<div class="l-b-container">
					<!--					<img alt="" src="./assets/1ha.png" />-->
					<!--					<img alt="" src="./assets/1管理.png" />-->
					<template v-for="item in left_list" :key="item">
						<el-tooltip effect="dark" placement="top">
							<template #content>
								<template v-if="item.status == 1">
									网口{{ item.real_name }}<br />
									流入包统计(个/秒) {{ item.rx_pkt }}<br />
									流出包统计(个/秒) {{ item.send_pkt }}<br />
									流入包比特速率<br />
									(Kbps){{ (item.rx_byte_total / 8).toFixed(2) }}<br />
									流出包比特速率<br />
									(Kbps){{ (item.send_byte_total / 8).toFixed(2) }}<br />
								</template>
								<template v-else>
									网口{{ item.real_name }}<br />
									状态 未使用
								</template>
							</template>
							<img :src="left_img(item)" alt="" />
						</el-tooltip>
					</template>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="r-con" v-for="slot in right_list" :key="slot">
				<img :src="slot_img(slot)" class="slot" alt=" " v-if="slot && slot.grid_list.some((v) => v !== null)" />
				<div class="grid-con">
					<template v-for="grid in slot?.grid_list">
						<el-tooltip effect="dark" placement="top">
							<template #content>
								<template v-if="grid?.showall?.status == 1">
									网口 {{ grid.real_name }}<br />
									流入包统计(个/秒) {{ grid?.showall?.rx_pkt }}<br />
									流出包统计(个/秒) {{ grid?.showall?.send_pkt }}<br />
									流入包比特速率(Kbps) {{ grid?.showall?.rx_byte }}<br />
									流出包比特速率(Kbps) {{ grid?.showall?.send_byte }}<br />
								</template>
								<template v-else>
									网口 {{ grid.real_name }}<br />
									状态 未使用
								</template>
							</template>
							<img alt="" :src="grid_img(grid)" :style="grid ? '' : { visibility: 'hidden' }" />
						</el-tooltip>
					</template>
				</div>
			</div>
		</div>
	</div>
	<el-button type="primary">Primary</el-button>
</template>
<script setup>
import { computed } from 'vue'
import { data } from '../data.js'
// import { $ref } from 'vue/macros'
//一、面板logo
let serial_no = $ref('012')
let language = $ref('zh')
let left_logo_list = {
	wangyuzh: 'wangyu.png',
	wangyuen: 'Leadsec.png',
	qimingzh: 'qiming.png',
	qimingen: 'Venustech.png',
}
const left_logo = computed(() => {
	return (item) => {
		let imgName = left_logo_list[(serial_no == '221' ? 'wangyu' : 'qiming') + language]

		return new URL(`./assets/${imgName}`, import.meta.url).href
	}
})
//二、左侧插口
let left_list = $ref(data.portList.showall_param.filter((v) => v.interface_type !== 0))
let left_img_list = {
	//interface_type_1_status_1_lang_zh
	it_1_s_1_la_zh: '1管理.png',
	it_1_s_1_la_en: '1管理en.png',
	it_1_s_0_la_zh: '0管理.png',
	it_1_s_0_la_en: '0管理en.png',
	it_2_s_1_la_zh: '1ha.png',
	it_2_s_1_la_en: '1ha.png',
	it_2_s_0_la_zh: '0ha.png',
	it_2_s_0_la_en: '0ha.png',
}
let left_img = computed(() => {
	return (item) => {
		let imgName = left_img_list[`it_${item.interface_type}_s_${item.status}_la_${language}`]
		return new URL(`./assets/${imgName}`, import.meta.url).href
	}
})
//三、面板数据
let right_list = $ref([Array(4), Array(4)])
//面板排序
data.layoutList.slot_param.forEach((item, index) => {
	item.grid_list = [Array(4), Array(4)]
	right_list[item.row][item.col] = item
})
//二维转一维
right_list = right_list[0].concat(right_list[1])

//接口数据
right_list.forEach((slot) => {
	data.layoutList.grid_param.forEach((grid) => {
		//参数放入接口
		// data.portList.showall_param.forEach((showall) => {
		// 	if (grid.real_name === showall.real_name) {
		// 		grid.showall = showall
		// 	}
		// })
		grid.showall = data.portList.showall_param.filter((showall) => {
			return grid.real_name === showall.real_name
		})[0]
		//接口放入卡槽
		if (slot.slot_id === grid.slot_id) {
			slot.grid_list[grid.row][grid.col] = grid
		}
	})
	//二维转一维
	slot.grid_list = slot.grid_list[0].concat(slot.grid_list[1])
})
let slot_img_list = ['slot0.png', 'slot1.png', 'slot2.png', 'slot3.png', 'slot4.png', 'slot5.png', 'slot6.png', 'slot7.png']
let slot_img = computed(() => {
	return (slot) => {
		let imgName = slot_img_list[slot?.slot_id]
		return new URL(`./assets/${imgName}`, import.meta.url).href
	}
})
let grid_img_list = {
	status_0_media_2: '0圆.png',
	status_0_media_0_xge: '0圆.png',
	status_0_media_1: '0方.png',
	status_0_media_0_gev: '0方.png',
	status_1_media_2: '1圆.png',
	status_1_media_0_xge: '1圆.png',
	status_1_media_1: '1方.png',
	status_1_media_0_gev: '1方.png',
}
let grid_img = computed(() => {
	return (grid) => {
		let ge = '_' + grid?.media_type == 0 ? grid?.real_name.slice(0, 3) : ''
		let imgName = grid_img_list[`status_${grid?.showall?.status}_media_${grid?.media_type}${ge}`]
		return new URL(`./assets/${imgName}`, import.meta.url).href
	}
})
</script>
<style lang="scss" scoped>
.container {
	width: 1860px;
	height: 360px;
	background: url('./assets/devicePanelBgc.png') no-repeat;
	background-size: 100% 100%;
	display: grid;
	grid-template-columns: 1fr 4fr;
	.left {
		display: grid;
		grid-template-columns: 1fr;
		align-content: space-evenly;

		.left-bottom {
			display: grid;
			.l-b-container {
				justify-items: center;
			}
		}
	}
	.right {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		column-gap: 10px;
		row-gap: 10px;

		.r-con {
			//background-color: skyblue;
			display: grid;
			grid-auto-rows: 30px 110px;
			row-gap: 10px;
			align-content: center;
			.slot {
				width: 100%;
			}
			.grid-con {
				display: grid;
				grid-template-columns: 48px 48px 48px 48px;
				justify-content: space-evenly;
			}
		}
	}
}
.test {
	content: url('./assets/wangyu.png');
}
</style>
