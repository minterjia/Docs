---
title: 博客搭建
description: 博客搭建
sidebar_position: 7
---

### 本地直接创建
```
#创建文件夹Blog，在文件夹Blog下git bash

#开始全局安装hexo博客框架
npm install -g hexo-cli

#进行初始化
hexo init

#安装依赖包
npm install

#这时候，你的blog文件夹下会自动生成几个文件夹
#- node_modules(依赖包）
#- public(存放本地生成的博客页面）
#- scaffolds(生成文章用的模板）
#- sources(存放你的博客文章）
#- themes(博客的主题）
#- _config.yml(博客的配置文件）

#输入下面的指令，就可以生成本地博客了
hexo g
hexo s

#初始化为git仓库
git init

#增加子模块 以Butterfly为例
git submodule add https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly

#如果你沒有 pug 以及 stylus 的渲染器，請下載安裝：
npm install hexo-renderer-pug hexo-renderer-stylus --save


#使用命令 git add . 把文件添加到版本库中，添加到暂存区里面去，后面的小数点"."，意为添加文件夹下的所有文件
git add .

#提交时转换为LF，检出时转换为CRLF
$ git config --global core.autocrlf true

#git commit -m “注释” — 把刚刚提交到暂存区里的文件提交到仓库。-m 后面的文字是注释，方便查看历史记录时知道每一次提交提交的是什么。
git commit -m "测试提交代码"


#git remote add origin 你的远程库地址 — 关联到远程库
git remote add origin git@github.com:minterjia/ceshi.git

git push -u origin master — 提交代码到指定分支
git push -u origin master


再次提交
git add .
git commit -m "测试提交代码"
git push
```

### vercel自动部署
```
#git clone到本地，不用初始化
git clone 地址

#安装依赖包
npm install

#开始全局安装hexo博客框架
npm install -g hexo-cli



#如果你沒有 pug 以及 stylus 的渲染器，請下載安裝：
npm install hexo-renderer-pug hexo-renderer-stylus --save


#找到自己主题的安装包，复制粘贴到theme主题目录下
#修改配置文件
#运行看效果
hexo c
hexo g
hexo s

#或者添加子模块就不要复制粘贴了
git submodule add https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
#修改配置文件
#运行看效果
hexo c
hexo g
hexo s

git add .
git commit -m "测试提交代码"
git push
```





