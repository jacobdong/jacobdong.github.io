---
layout: page   
title: "karma-jasmine"
category: "/guide/"
permalink: "/guide/karma"
excerpt: "前端测试需要一个test runner来处理繁琐的一切，让更加专注于测试用例的编写"
---

### 官方文档：
+  `jasmine` : http://jasmine.github.io/2.0/introduction.html
+  `jasmine-ajax` : http://jasmine.github.io/2.0/ajax.html

### karma-jasmine-ajax说明
+ 安装`karma-jasmine-ajax`插件，如下为其`package.json`文件，`npm install`之前，去掉`tags`，即可安装最新版本，否则文档高度不匹配，如此还不如手工引入最新版本。

```javascript
"dependencies": {
    "jasmine-ajax":      
        "git://github.com/pivotal/jasmine-ajax#477f044b4afa9b77ca834275109cbe08b362f05e"
  }
```

### karma-jasmine说明
+ npm仓库里`karma-jasmine`中`jasmine`的版本低于2.0版本，而2.0版本配合`karma`使用本人暂时未能顾及，故延后处理。
+ 使用`karma-jasmine`单元测试中，`spy.calls`为`undefined`.
+ 使用`karma-jasmine`单元测试中，`spyOn`链式调用函数与最新文档有明显差异。
官方2.0文档示范如下：

```javascript
 spyOn(foo, 'setBar').and.callThrough();
 spyOn(foo, "getBar").and.returnValue(1234);
 spyOn(foo, "getBar").and.callFake(function() {
     return 1234;
 });
 spyOn(foo, "getBar").and.throwError("unconsidered error");
```

但当前`karma-jasmine`环境下，经过个人验证，可如下调用。

```javascript
spyOn(love, 'getBar').andCallThrough();
spyOn(love, 'getBar').andReturn(1234);
spyOn(love, 'getBar').andCallFake(function () {
    return 1234;
});
spyOn(love,'getBar').andThrow('unconsidered error');
```

### Webstorm-live-template

如果使用webstorm,可以参考https://github.com/bornkiller/webstorm-livetpls-jasmine.git，将其中`Jasmine.xml`文件放入对应目录下即可，支持当前的`karma-jasmine`调用方式。新版调用方式会开新分支实现。

+ windows: `C:\Users\Administrator\.WebStorm8\config\templates`
+ linux: `~.[product name][version number]\config\templates`
+ mac: `~/Library/Preferences/[product name][version number]/templates`

### 技术交流
如果内容与实际有出入，请联系。

+ **QQ：491229492**
+ **Email：hjj491229492@hotmail.com**




