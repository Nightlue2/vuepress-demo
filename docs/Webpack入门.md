```
title: Webpack入门
date: 2020-10-29 18:28:00 
sidebar: 'auto'
tags:
 - Webpack
 - 入门
categories: 
 - 前端
publish: true
```

<!-- more -->

## Webpack入门

### 安装

```
//可以不用全局安装，用本地安装也可，目录记得初始化，yarn init -y
yarn add gloabl webpack@4 webpack-cli@4 //不一定是4，可以是5，具体看最新版，好像也可以不加版本号
yarn add html-webpack-plugin --dev //安装html的plugin
yarn add css-loader --dev //安装css的loader
yarn add style-loader --dev //安装和css配套的loader
yarn add webpack-dev-server --dev //安装webpack-dev-server
yarn add mini-css-extract-plugin --dev //安装能把css抽成文件的plugin
yarn add sass-loader dart-sass --dev //安装dart-sass
yarn add less --dev //安装less文件的loader
yarn add stylus-loader stylus --dev //安装stylus文件的loader
yarn add file-loader --dev //安装图片的loader
```

### 概述

作用---转译代码（ES6转ES5，SCSS转CSS）、构建build、代码压缩、代码分析

### 使用

```
npx webpack //本地安装可以使用，安装路径带空格的不要用npx，这样使用之后就会帮你打包了
//和parcel一样，每次build之前建议删除dist目录
```

package.json最好加一个build选项用以加快build，以及一个start用于开启服务器：

```
'build':'rm -rf dist/ && npx webpack --config webpack.config.prod.js',  // yarn build = npm run build
'start':'webpack-dev-server --open', //webpack-dev-server不依赖于dist目录，和parcel不同
```

增加两个配置文件在不同环境下进行build：webpack.config.js和webpack.config.prod.js

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
 mode:'development' //或者是'production'
 devtool:'inline-source-map', //devServer配置项
 devServer:{
    contentBase:'./dist',
}
 entry:'./src/index.js', //这里代表你的需要打包的文件
 output:{
 	path:path.resolve(__dirname,'dist'), //注意是两个下划线
 	filename:'[name].[contenthash].js' //name填你要打包出的文件名字，name的中括号记得删
 },
 plugins:[
     new HtmlWebpackPlugin({
 		title:"你想要改成的网页的名字", //用这个title作为打包文件的名字的话，网页名得叫做<%= htmlWebpackPlugin.options.title %>
 		template:'..' //模板html所在路径
 	}),
     /*new MiniCssExtractPlugin({
         filename:'[name].css',
         chunkFilename:'[id].css',
         ignoreOrder:false,
     })*/
 ],
 module:{
     rules:[
         {
             test:/\.css$/i,
             use:[
               {
         		loader:MiniCssExtractPlugin.loader,
         		options:{
         			publicPath:'../',
         			hmr:process.env.NODE_ENV === 'development',
         		},
         	   },'css-loader',],
             
         },
         {
             test:/\.scss$/i,
             use:[
                 'style-loader',
                 'css-loader',
                 {
                     loader:"sass-loader",
                     options:{
                         implementation:require('dart-sass')
                     }
                 },
             ]
         },
         {
             test:/\.less$/,
             loader:['style-loader','css-loader','less-loader'],
         },
         {
             test:/\.styl$/,
             loader:['style-loader','css-loader','stylus-loader']
         },
         {
             test:/\.(png|svg|jpg|gif)$/,
             use:["file-loader"]
         }
     ]
 }
}
```

1. style-loader和css-loader不大一样，前者负责把css放到style标签中，后者负责js引入css时能正常引入

2. 可以把开发环境和生产环境的共有的代码抽离到base.js，然后用require导入共有代码到config.js使用。

3. loader是把一个文件转换到一个文件，然后plugin是有可能把多个文件变成一个文件。

4. babel-loader是内置的，所以不用装，默认就可以使用它打包js文件，而其他比如css、图片，就只能使用loader将它们加载进来
5. 遇到问题可以查询对应的github仓库，在issue里面找到问题的解决方案。比如像dart-sass就是在node-sass里找到了使用的语法。
6. 懒加载的实现是通过事件触发->异步导入->使用then方法处理数据
7. 这里的图片是通过导入到js里，再操作dom才能显示的，所以可以看看有没有其他的导入方式

