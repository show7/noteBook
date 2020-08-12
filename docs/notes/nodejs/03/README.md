---
title: 基础Api
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
## path
- `normalize`
   - 处理一些简单的路径问题见代码

```js
const { normalize } = require('path')
normalize('/usr/local//bin/') // => /usr/local/bin/
normalize('/usr/local/../bin/') //=> /usr/bin/
```
- `join`
   
```js
const { join } = require('path')
join('/usr','local','/bin') // => /usr/local/bin/
join('/usr','../local','bin') // => /local/bin/
```
- `resolve` 把相对路径转换为绝对路径
```js
const { resolve } = require('path')
resolve('/usr','../local','/bin') // => /local/bin/
```
- `basename` 文件名
- `dirname` 所在文件夹路径
- `extname` 文件的扩展名
```js
const { basename, dirname, extname } = require('path')
const filePath = '/usr/local/bin/test.txt'
basename(filePath) // => test.txt
dirname(filePath) // => /usr/local/bin
extname(filePath) // =>txt
```
- `parse` 将一个路径解析为对象
- `format` 将一个路径对象解析为路径
```js
const { parse, format } = require('path')
const filePath = '/usr/local/bin/test.txt'
parse(filePath) 
//=> {
//   root: '/',
//   dir: '/usr/local/bin',
//   base: 'test.txt',
//   ext: '.txt',
//   name: 'test'
// }
format(parse(filePath) ) // => /usr/local/bin
```
- `sep` 路径之间的分隔符
- `delimiter` 多个绝对路径之间分隔符
- `posix` (linux 内核) 宿主机环境
- `win32` (windows 内核) 宿主机环境
```js

```
- 总结 
   1. `__dirname` 与 `__filename` 总是返回文件的绝对路径
   2. `process.cwd()` 总是返回执行node命令的文件夹 

## buffer