---
title: html表单
date: 2020-08-19 10:26:36 
sidebar: 'auto'
tags:
 - html
 - 表单
categories: 
 - 前端
publish: true

---

<!-- more -->

### 输入回车后，button的效果

如果没有form标签，只有input框和button，直接回车是无法提交的。

```html
<label for="">
    用户名:<input type="username">
</label>
<label for="">
      密码：<input type="password">
</label>
  <button type="submit" onclick="console.log('提交了')">提交</button>
```

但如果有form标签包裹，则必须在输入框内回车才可以提交，也就是说，想实现回车提交的功能，就必须监听回车事件。

```html
<form action="">
    <label for="">
    用户名:<input type="username">
  </label>
  <label for="">密码：<input type="password"></label>
  <button type="submit" onclick="console.log('提交了')">提交</button>
  </form>
```

