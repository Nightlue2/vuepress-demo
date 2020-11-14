---
title: Vue数据传递
date: 2020-10-09 15:03:00 
sidebar: 'auto'
tags:
 - Vue
 - 父子组件
categories: 
 - 前端
publish: true

---

<!-- more -->

### Vue数据传递

数据传递无非两种：父组件->子组件、子组件->父组件

#### js数据

父->子：子组件使用Prop，父组件将值绑定到data的数据。数据由父组件传给子组件，在子组件中更新时，通过$emit来将数据传给父组件以通知父组件更新。

子->父：数据由子组件传给父组件，更新时也是通过$emit将数据从$event传给父组件。也可以不用$event，直接传，父组件直接按顺序使用，但是这时父组件的template里不能写@update:value="onUpdateValue(xxxx)"，只能写：@update:value="onUpdateValue"。

区别只在于子组件使用的数据是否是Prop上的。