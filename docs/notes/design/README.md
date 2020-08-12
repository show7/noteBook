---
title: 设计模式
date: 2020-02-02
tags:
 - 设计模式
categories:
 - 笔记
isShowComments: false 
publish: true 
---
<Boxx/> 
<!-- more -->
## 常用的设计模式

- 单例模式
> 单例模式保证类只有一个实例，并提供一个访问它的全局访问点

  ```js
  class Single{
        constructor(config){
          this.config = config
          this._single = null
        }
   static  getInstance(config){
        return  this._single ||  ( this._single =  new single(config))
   }
  }
  ```
  - 策略模式
> 解决一个问题的多个方法，将每种方法独立封装起来，相互可以替换
  ```js
  
    const S = salary=> salary * 1
    
    const A = salary=> salary * 4
    
    const B = salary=> salary * 7

    const calculate = (fun,salary)=>fun(salary)

    calculate(S,1000)
    calculate(B,1000)
  ```
- 代理模式
  > 代理模式为一个对象提供一个代用品或占位符，以便控制对它的访问
  ```js

  class landlord { // 房东
      askMoney(money){
          console.log('收钱'+money)
      }
  }
  class landlord2{ //管家
      askMoney(money){
        console.log('代收钱'+money)
        new landlord(money).askMoney()
      
      }
  }
  const money =2000
   new landlord2(2000)
  ```
- 观察者和发布订阅模式
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
