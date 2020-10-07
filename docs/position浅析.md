---
title: position浅析
date: 2020-08-16 19:59:59 
sidebar: 'auto'
tags:
 - css
 - 定位
 - position
 - absolute
categories: 
 - 前端
publish: true


---

<!-- more -->

### relative相对于谁定位？

如果元素设置了position:relative，那么，该元素会往上找relative元素，如果没有，那么就相对body进行定位，即使body设置了position:absolute，或者position:fixed。relative元素不会相对absolute或者fixed元素进行定位的。

对于relative元素的宽高计算，如果没有子元素，宽高又不写，那么默认是没有宽高的。如果有子元素，那么宽高由子元素的宽高决定；在这种情况下，设置宽高为0，那么内容会显示（并不会消失），但是背景色是没有的。

顺带一提，absolute定位的元素不能撑起其他定位的元素的宽高：

```css
.father{
	position:relative;
	background-color:red;
}
.son{
	position:absolute;
	width:100px;
	height:100px;
	background-color:green;
} //此时还是看不到class为father的元素
```



### absolute相对于谁定位？

如果元素已经absolute定位了，但是其他的元素不配合它（没有找到一个最近的relative定位的元素），那么这个元素会怎么样呢？

答案是：该元素相对于html元素进行定位，也就是相对于页面定位。（如果有元素和它配合，那么答案显而易见）

假设现在父元素采用absolute定位，那么子元素又怎么样呢？

答案是，首先父元素先往上找relative（不是往下找），然后子元素相对于父元素进行定位。

absolute元素的宽高由其中非absolute定位的元素的宽高决定。（如果没设置宽高的话）

