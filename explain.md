This is an article for beginners;

# Catalogue

## readme.md
这个文件其实是项目的说明文件，他里面会有一些关于项目的说明，我们可以全部删除掉，自己用markdown的语言做一些相关的介绍

## package.json
基本上每个脚手架工具都会有这个package.json这个文件，这就代表着，实际上这是node的包文件，这里会有脚手架工具以及项目的一些介绍，他可以让你的文件编程一个node的包，这个文件一般我们不会太动他。

## package-lock.json
锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致。
(https://www.cnblogs.com/cangqinglang/p/8336754.html)

## gitignore
如果是用git管理代码的话，有些文件，不像放进仓库里，可以把文件定义在gitignore里面

## gitattributes
在github上，如果未指定语言，Linguist来自动识别你的代码应该归为哪一类，它是根据某种语言的代码量来决定是哪种语言的项目。如果识别有误，可以新建.gitattributes文件来进行设置

## eslintrc.json
设置eslint规则

## eslintignore
忽略eslint检验的文件

## babelrc
.babelrc文件需要的配置项主要有预设(presets)和插件(plugins)
Babel官方解释,是下一代JavaScript 语法的编译器
在项目工程脚手架中，一般会使用.babelrc文件，通过配置一些参数配合webpack进行打包压缩

## node_modules
放的是一些这个项目里面的第三方的包，这些包不是自己写的，是脚手架工具，要实现自己的功能需要依赖一些包文件，这些包文件都放在node_modules里面，这里的东西也不动他，他是一些第三方的模块

## favicon.ico
打开网页的时候，网页标题左上角会有一个很小的icon，favicon正好就是标题上那个小的icon。

## index.js
所有代码的入口

## index.html
项目首页的html模板


#

#

#