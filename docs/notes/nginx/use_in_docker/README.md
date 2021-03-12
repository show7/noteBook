---
title: docker来部署nginx项目
date: 2021-03-06
tags:
 - nginx
categories:
 - 笔记
isShowComments: false 
publish: true 
---
<Boxx/> 
<!-- more -->
## No.1

- 假设docker 安装成功，并且也获取了nginx镜像
    1. 第一步启动nginx :`docker run -d -p 80:80 --name nginx2 nginx`
    2. 
`docker run `
`-d` 表示后台运行
`-p 80:80 ` 第一个80是宿主机的端口，第二个是容器的端口
`-p`（小写）则可以指定要映射的IP和端口，但是在一个指定端口上只可以绑定一个容器。支持的格式有 hostPort:containerPort、ip:hostPort:containerPort、 ip::containerPort。
`--name nginx2` 表示容器的名称
最后的一个nginx 表示镜像
