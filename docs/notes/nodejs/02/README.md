---
title: 环境&调试
date: 2020-02-02
tags:
 - node
categories:
 - 笔记
isShowComments: false 
publish: true 
---
<Boxx/> 
<!-- more -->

## CommonJs
+ 每个文件是一个模块，有自己的作用域
+ 在模块内部 `module` 代表模块本身
+ `module.export` 属性代表模块对外接口
``` js
//定义一个模块
const a = 'chinaBoy'
module.exports = {
    a
}
```
- require特性
   1. `module` 被加载的时候执行，加载后缓存
    ``` js
    //a.js
    console.log('this is moduleA')
    const a = 'moduleA'
    module.exports = {
        a
    }
    ```
    ``` js
    //main.js
    require('./a'); //首次加载需要执行，加载完放入内存 会打印 this is moduleA
    require('./a'); //不会被加载执行 ，直接内存中取值
    ```
    2. 某个模块被循环引用只会输出已经执行部分，未执行部分不会输出
## global
- 由于node环境并非浏览器环境 不存在bom对象 无法使用window对象去存放一个全局变量 node 采用global对象来定义全局变量
- 常见的`global`对象
   - `commonJs`
   - `Buffer`
   - `process`
   - `console`
   - `setImmediate`
      - 会将执行函数放到下一个时间队列队首执行，`setTimeout` 则在上一个事件队列 与下一个事件队列之间执行
## process
 - `argv`
   - type:`Array`
   - 第一个参数为`node`可执行程序所在系统目录，第二个参数为当前命令执行文件所在的目录，后面参数为执行命令传入参数
- `argv0`
- `execArgv` 
   - `node` 与文件名之前的参数
- `execPath`
   - `node` 可执行程序文件目录
- `env` 环境相关属性
- `cwd()` 当前命令所执行的路径
- `nexTick()`
   - 会将执行函数放入当前事件队列最后一个执行（微任务） 

 ```js
 const { argv, argvo, execArgv, execPath, env } = process
 process.cwd()
 process.nexTick(()=>{
     console.log('当前事件队列最后一个执行')
 })
 setImmedite(()=>{
      console.log('下一事件队列第一个执行')
 })
 //argv type:Array 
 ```