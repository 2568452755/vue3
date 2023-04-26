import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ECharts from 'vue-echarts'
import { use } from 'echarts'
// 按需加载echarts组件
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { TitleComponent, LegendComponent, GridComponent, TooltipComponent } from 'echarts/components'
import '@/assets/font/font.css'

use([CanvasRenderer, LineChart, TitleComponent, LegendComponent, GridComponent, TooltipComponent])

createApp(App).mount('#app')
const app = createApp(App)
app.component('v-chart', ECharts)

app.mount('#app')
