---
title: NodeJs简介
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
## NodeJs是什么
> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。
- 特性

   1. 非阻塞 I/O 模型
        - 阻塞I/O

            程序执行过程中必然要进行很多I/O操作，读写文件、输入输出、请求响应等等。I/O操作时最费时的，至少相对于代码来说，在传统的编程模式中，举个例子，你要读一个文件，整个线程都暂停下来，等待文件读完后继续执行。换言之，I/O操作阻塞了代码的执行，极大地降低了程序的效率。
        - 非阻塞I/O

            理解了阻塞I/O，非阻塞I/O就好理解。非阻塞I/O是程序执行过程中，I/O操作不会阻塞程序的执行，也就是在I/O操作的同时，继续执行其他代码（这得益于Node的事件循环机制）。在I/O设备效率还远远低于CPU效率的时代，这种I/O模型（非阻塞I/O）为程序带来的性能上的提高是非常可观的。
   2. 事件驱动 Event Driven

![事件驱动模型](https://img-blog.csdn.net/20170922171559540?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzIxNzA3MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast "事件驱动模型")
+ 主线程：

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
