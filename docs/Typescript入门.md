---
title: Typescript入门
date: 2020-10-06 09:23:00 
sidebar: 'auto'
tags:
 - typescript
 - 入门
categories: 
 - 前端
publish: true


---

<!-- more -->

### Typescript简介和安装

TypeScript是JavaScript的一个超集，主要提供了类型系统，它可以编译成纯JavaScript，编译出来的JavaScript可以运行在任何浏览器上，它相比JavaScript的优点是通过类型系统可以更好的维护代码，能在编译阶段发现大部分错误，而且能够自动做出类型推论，缺点是学习成本高，增加了一定的开发成本。

安装上可以使用：

```
yarn global add typescript
```

然后我们会有tsc命令可以使用，它可以用来编译一个typescript文件，一般这种文件的后缀是ts，而react中的则为tsx。

据说tsconfig.json中的noEmitOnError可以决定是否在编译出错时生成结果，但是**这似乎没有效果**。

### 基础知识

与JavaScript不同，TypeScript可以用void表示一个没有返回值的函数，但变量声明时尽量不要使用void，这意味着该变量只能使用undefined来赋值给该变量。

基本类型像number、string都可以像平时声明变量一样，变动不大，加个:number即可。

而像true这种就要注意：

```typescript
let a:boolean = true //通过
let b:Boolean = true //不通过
let c:boolean = new Boolean(1) //不通过
let d:Boolean = new Boolean(1) //通过
let e:Boolean = Boolean(1) //通过
```

联合类型：使用|来表示既可以是一种类型，也可以是另一种类型。

可选属性：?:  可以用在interface的定义中，表示属性可以不存在。

任意属性：一个接口中不确定的属性名，但确定属性值的类型，则可以：

```typescript
interface Person{
	[propName:string]:string; //表示有一个不确定的属性可以是string类型
}
```

只读属性：interface定义中，给属性的前面加上readonly，则该属性只能在被创建时被赋值。

#### 数组

一般的声明方式：

```typescript
let arr:number[] = [1,2]
```

泛型：

```typescript
let arr:Array<number> = [1,2]
```

使用接口声明数组（用来表示类数组）

函数中的参数如果要赋值给其他变量使用，则需用到上面的类数组：

```typescript
function fun(){
	let args:{
		[index:number]:number;
		length:number;
		callee:Function;
	} = arguments;
}
```

任意类型的数组：

```typescript
let list:any[] = [1,'1',{xxx:'1'}]
```

