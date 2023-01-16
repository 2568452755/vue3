import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
// https://vitejs.dev/config/
export default () => {
	let alias = {
		'@': resolve(__dirname, './src'),
	}
	return defineConfig({
		plugins: [
			vue({
				reactivityTransform: true,
			}),
		],
		resolve: {
			alias,
		},
		commonjsOptions: {
			esmExternals: true,
		},
		css: {
			postcss: {
				plugins: [
					{
						postcssPlugin: 'internal:charset-removal',
						AtRule: {
							charset: (atRule) => {
								if (atRule.name === 'charset') {
									atRule.remove()
								}
							},
						},
					},
				],
			},
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/styles/utils.scss";',
				},
			},
		},
	})
}
