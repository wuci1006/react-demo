var path = require('path');//node提供的一块方法
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:path.resolve(__dirname, '../app/client.js'),
    output: {
		path: path.resolve(__dirname, '../dist'),//打包后文件的输出路径
		filename: '[name].[hash:4].js',//输出文件名字
		publicPath:"./"
	},
	devServer:{
		historyApiFallback: true,
	},
    module: {
        rules: [
        	 //3 编译es6和编译jsx和js
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            //配置图片
			{
				test:/\.(jpg|png|gif|jpeg|bmp)$/,
				use:{
					loader:'url-loader',
					options: {
						limit: 8192    //限制图片的大小
					}
				}
			},
			//配置字体图标
			{
				test:/\.(png|woff|woff2|svg|ttf|eot)$/,
				use:{
					loader:'url-loader',
					options: {
						limit: 10000,  //限制大小10k
					}
				}
			},
			//配置css
			{
		        test: /\.css$/,
		        use: [ 
		        'style-loader',
		         {loader: 'css-loader',options: {importLoaders: 1}},
		         {loader: 'postcss-loader',options:{ident:"postcss",plugins:[require("autoprefixer")("last 100 versions")]}}
		        ]
	      	},
			//配置scss  执行顺序是从右往走的这个顺序是不能改变的
			{
		       test: /\.scss$/,
		       use: [ 
		       'style-loader',
		         {loader: 'css-loader',options: {importLoaders: 2}},
		         {loader: 'postcss-loader',options:{ident:"postcss",plugins:[require("autoprefixer")("last 100 versions")]}},
		         'sass-loader'
				]
		    }
        ]
    },
    // html 模板插件
    plugins: [
		// 将打包后的资源注入到html文件内 
	    // webpack 内置的 banner-plugin
	    // new webpack.BannerPlugin("Copyright by https://github.com/heyushuo."),
    	//利用webpack-html-plugin这个插件它可以生成html文件到指定的目录下，这样就可以不用再根目录下建立页面文件了，直接在src下建立模板文件，
    	new HtmlWebpackPlugin({
	        template: path.resolve(__dirname, '../app/index.html')  //默认会在dist路径下生成index.html并引用所有的静态资源
        }),
		// 定义环境变量为开发环境
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			IS_DEVELOPMETN: false,
		}),
		//提取css文件
		new ExtractTextPlugin({
		    filename: 'css/[name].[contenthash:8].css',
		}),
		// 提供第三方依赖的代码
		new webpack.optimize.CommonsChunkPlugin({
		    name: 'vendor',
		    //filename:"chunk.js"//忽略则以name为输出文件的名字，否则以此为输出文件名字
		})
        
    ]
    
}
