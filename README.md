## Ionic技术记录点滴

作为ionic技术学习与交流，欢迎issue, PR相关内容。

## 博客书写

所有内容以`markdown`语法为准，保存文件后缀名为`.md`，放置路径统一为`_post`下，命名规范为:`yyyy-mm-dd-{title}.md`，如`2014-02-28-ionic.md`。

在正文内容上，需要配置以下内容：
```
---
layout: page   // 暂不可选，必须
title: "karma-jasmine"  //博客标题，必须
category: "/guide/" //博客分类，可选项为"/guide/", "/upgrade/", "/faq/"
permalink: "/guide/karma" //博客链接地址，务必以category值开头
excerpt: ""  // 博客内容简介
---
```

## 环境配置
jekyll依赖ruby环境, 建议从国内镜像安装， http://ruby.taobao.org/。
```
ruby --version
gem install bundler
bundle install
```

## 贡献者列表

+ [jacobdong](https://github.com/jacobdong)

+ [bornkiller](https://github.com/bornkiller)

