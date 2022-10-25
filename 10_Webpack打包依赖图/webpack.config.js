const path = require('path')

//webpack配置文件
module.exports = {
	//文件入口,默认是index.js  可以通过entry进行修改
	entry: './src/main.js',
	//打包出口
	output: {
		//出口文件夹,默认是dist
		path: path.resolve(__dirname, './build'),
		//出口文件,默认是index.js
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/, //正则表达式, 表示匹配以.css为结尾的文件

				//1.loader的写法(语法糖)
				//loader:'css-loader'

				//完整写法
				use: [
					// { loader: 'css-loader' }
					'css-loader',
				],
			},
		],
	},
}
