---
title: vuepress简单配置
date: 2020-08-12 12:46:55 
sidebar: 'auto'
tags:
 - vuepress
 - 博客
categories: 
 - 前端
publish: true
---

::: tip
这是一个提示
:::

顺序：vuepress安装（npm、yarn；全局还是目录）>  vuepress主题安装（安过什么主题，为什么选择这个）>  初始化目录 > 修改目录树 > 进行配置 > 页面美化 > 坑以及bug

<!-- more -->

###  vuepress安装

* 全局

  * npm

    ```node
    npm install -g vuepress // global
    ```

  * yarn

    ``` 
    yarn add vuepress
    ```

* 本地安装（指定文件夹安装）

  * npm

    ```
    npm install vuepress -D
    ```

  * yarn

    ```
    yarn add -D vuepress
    ```

这里给出两种安装方式，一种是全局的，一种是本地安装，个人推荐**本地安装**，因为如果使用全局安装，那么一旦你更换主题，比如更换了两个主题以上，你不能保证安装的主题不会对默认的主题产生影响（比如**配置残留**），导致之后的配置出现问题，因此最好使用本地安装。*已经出现这类问题的，建议重装系统（误*

以上步骤中，如果使用本地安装，那么必须先创建一个文件夹并进入该文件夹。（反正你得在一个文件夹里）

### 目录结构配置

接下来是初始化该目录，也就是在该目录下生成package.json文件，代码： 

```
npm init -y
or
yarn init -y
```

官方是有推荐目录结构的，里面有很多可选项，有需要的自己看[vuepress文档](https://www.vuepress.cn/guide/directory-structure.html)。

我们采用基本的项目结构：

```
vuepress-demo
├─package.json
├─docs
|  ├─README.md
|  ├─.vuepress
|  |     ├─config.js
|  |     ├─public
|  |     |   └avatar.png
|  |     ├─style
|  ├─timeline
```

其中，docs文件夹一般是放置写的md文件的，README.md是作为主页面的一些基本配置项，config.js则是对主题的配置，public文件夹放置需要用到的静态资源，timeline作为时间线的目录，style是自定义的样式目录。

### vuepress主题安装

这里选择的是**vuepress-theme-reco**主题，之前还装过别的像simple之类的主题，其他主题要么是配置手册没写好，要么是风格不适合做博客，还有的已经很久没维护了。

reco主题基本没有短板，设计还可以，手册写的也简单易懂，也没有阉割全局搜索功能，样式大部分也可以自定义，perfect！

代码：

```
npm install vuepress-theme-reco --save-dev 
or
yarn add vuepress-theme-reco
```

#### 配置config.js

```
module.exports = {
    title: '出现在左上角顶部的文字',
    head: [
        ['link', { rel: 'icon', href: '/note.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }]
    ],
    themeConfig: {
        author: '你的名字',
        logo: '/avatar.ico',
        authorAvatar: '/avatar.jpg',
        nav: [
            { text: '时间线', link: '/timeline/', icon: 'reco-date' }
        ],
        type: 'blog',
        blogConfig: {
            category: {
                location: 1,
                text: '分类'
            },
            tag: {
                location: 2,
                text: '标签'
            }
        },
        sidebar: 'auto',
    },
    theme: 'reco'
} 
```

解释一下里面的一些属性，title是网页的名称，head中的link项可以设置网页的小图标，也就是浏览器标签上的那个。

themeConfig中的author可以设置全局下每篇博客的作者，想每一篇的作者名不同的可以看官方的说明；logo代表左上角导航栏的图标，authorAvatar代表右边名片的图标，nav可以设置右边导航栏的项，下面的category和tag中的location和text，分别代表序号和文本，都可以自定义。

#### 配置README.md

```
---

home: true
bgImage: 路径
bgImageStyle: {
    自由发挥
}
heroText: 自由发挥
tagline: 自由发挥
features:
- title: 自由发挥
  details: 自由发挥
footer: 自由发挥

---
```

home属性必须给true才能显示主页；bgImage是背景的图片路径，bgImageStyle则是背景图片的样式，heroText是图片上的h1文字，tagline则是h1下方的描述文字。

#### 配置package.json

```
{
  "name": "vuepress-demo-1",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "@vuepress-reco/theme-cli": "^1.0.6"
  },
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

只要加入script部分即可，其他会默认生成。

### 博客美化

#### 导航栏部分

首先是左边的



title、logo、nav、theme-color、bg、herotext、avatar、home

### 遇到的坑

无主页、背景图片显示不全、无回到顶部按钮、右边名片分支的色块和文字不对齐