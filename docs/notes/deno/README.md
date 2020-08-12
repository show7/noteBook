---
title: Deno简介
date: 2020-02-02
tags:
 - deno
categories:
 - 笔记
isShowComments: false 
publish: true 
---
<Boxx/> 
<!-- more -->
## Deno是什么
> A secure runtime for JavaScript and TypeScript.
  Deno是JavaScript / TypeScript运行时，具有安全的默认值和出色的开发人员经验。
- 功能亮点

   1. 默认为安全。没有文件，网络或环境访问权限（除非明确启用）。
   2. 开箱即用地支持TypeScript。
   3. 只分发一个独立的可执行文件 (deno)。
   4. 有着内建的工具箱，比如一个依赖信息查看器 (deno info) 和一个代码格式化工具 (deno fmt)。
   5. 有一组经过审计的 标准模块，保证能在 Deno 上工作。
   6. 脚本代码能被打包为一个单独的 JavaScript 文件。
- 与 Node.js 的比较
   1. Deno 不使用 npm，而是使用 URL 或文件路径引用模块
- Hello World
 - Deno 是一个 JavaScript 和 TypeScript 的运行时，并尝试与浏览器兼容并使用现代的功能 (features)。
    -  由于 Deno 具有浏览器兼容性，Hello World 程序与浏览器里的没有区别。
    ```js
     deno run https://deno.land/std/examples/welcome.ts
    ```
+ 发出一个 HTTP 请求
```js
const url = Deno.args[0];
```
    1. 执行node的代码，把代码放入队列
    2. 事件循环程序（主线程）把队列里面的同步代码都先执行了，
    3. 同步代码执行完成，执行异步代码
    4. 异步代码分2种状况，

- 异步非io setTimeout() setInterval()
判断是否可执行，如果可以执行就执行，不可以跳过。
- 异步io 文件操作
会从线程池当中去取一条线程，帮助主线程去执行。
主线程会一直轮询，队列中没有代码了，主线程就会退出。

+ 子线程：被放在线程池里面的线程，用来执行异步io操作

    1. 在线程池里休息
    2. 异步io的操作来了，执行异步io操作。
    3. 子线程会把异步io操作的callback函数，扔回给队列
    4. 子线程会回到线程池了去休息。
    5. callback 在异步io代码执行完成的时候被扔回主线程。
## NodeJs好在哪里
   1. 统一前端开发体验
   2. 在处理高并发、I/O密集场景性能优势明显
     (`文件操作` `网络操作` `数据库操作`)
