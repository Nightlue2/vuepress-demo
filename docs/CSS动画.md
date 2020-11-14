---
title: CSS动画
date: 2020-10-26 22:16:00 
sidebar: 'auto'
tags:
 - CSS
 - 动画
categories: 
 - 前端
publish: true

---

<!-- more -->

## CSS动画

### 不带svg的普通版本（原生）

在选择器中可以通过animation给选择器所在元素添加动画，可以添加多个。

animation有

* animation-name
* animation-duration
* animation-timing-function 
* animation-delay
* animation-iteration-count
* animation-direction
* animation-fill-mode
* animation-play-state

### animation-name

取值有none和一个由合法字符组成的字符串。

### animation-duration

它是动画的持续时间，默认值为0，可以用逗号设置一个时间列表，它会按照列表顺序执行该动画，数字不能没有单位，不然不生效。

```css
animation-duration:2s; //普通版
animation-duration:3s,2ms,1s; //先是3s，然后是2ms，最后是1s
```

### animation-timing-function

它定义该动画的执行节奏，作用于关键帧周期（比如从0到50%），而非整个动画周期。

取值有我们熟知的ease,ease-in,ease-in-out,ease-out,linear,step-start,step-end，还有比如cubic-bezier(0.1,0.7,1.0,0.1)，cubic-bezier可以在[该网站](https://cubic-bezier.com/#.29,.68,.83,.67)模拟；steps(4,end)，frames(10)。

我们也可以使用多个动画。

### animation-delay

定义动画何时开始，如果有两个动画，第二个动画的该项值会和第一个动画同时开始计算（同时倒计时，所以必须比第一个动画执行时间长）。

默认为0，必须写单位（ms或者s）。负值代表动画序列中的某一个状态。

### animation-iteration-count

定义动画在结束前的执行次数。

可以指定多个值，默认值为1，值可以为小数，但不能为负数，小数代表动画周期。

一般为：

```css
animation-iteration-count:infinite; //任选其一
animation-iteration-count:3;
```

### animation-direction

定义动画的播放是否反向。

默认为normal，这代表动画结束之后重置元素状态，使其回到原来的初始状态。

alternate，比较常用，相当于反着执行动画，时间和操作都反向，ease-in变为ease-out，所以要注意这点。

reverse，反向执行动画。

alternate-reverse，先反后正，交替执行，相当于alternate的反向版本。

### animation-fill-mode

设置目标元素在动画之前和动画之后如何应用样式。

默认值为none，意思是不管动画如何变动，动画的开头和结尾都是按照元素本来的样式。

forwards，代表动画结束之后保留结束时的状态（样式），根据方向和执行次数决定最后关键帧。

backwards，代表动画开始之前就使得元素处于动画开始帧的状态，比如0%。

both，代表同时有backwards和forwards。

### animation-play-state

定义一个动画的状态，运行或者是暂停。可以被查询修改。

恢复动画将使其从暂停的状态继续。

默认是running，可以设置为paused。

### 总结

使用动画时一般是直接写在animation属性里，而不是分开写，因为合起来写更加方便，如果想多动画，和transition一样，使用逗号分隔即可，但是要注意多动画的播放时机。