---
layout: page   
title: "ionic quick start"
category: "/guide/"
permalink: "/guide/ionic-01"
excerpt: "ionic 入门教程"
---
### 文档：
+  `官网` : http://ionicframework.com/
+  `中文` : http://ionicframework.net/
+  `社区` : http://ionichina.com/

### 环境要求
+ `nodeJs` : https://nodejs.org/

+ `JDK`(android 编译环境) : http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html
+ `Ant`(android 打包工具) : http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html
+ `Android SDK`(android 开发环境):http://pan.baidu.com/s/1o62xESM

### 快速开始

####安装
```
$ npm install -g cordova ionic
// cordova提供了一组设备相关的API，通过这组API，移动应用能够以JavaScript访问原生的设备功能，如摄像头、麦克风等。
$ ionic start quickStart tabs
```
####运行
```
$ cd quickStart
$ ionic serve
// 打开浏览器输入 http://localhost:8100/ 将会看到创建的项目
$ ionic platform add android
// 添加 android 平台
$ ionic build android
// 编译成 android Apk包
$ ionic emulate android
// 在模拟器上运行
```





