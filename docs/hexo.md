---
id: hexo
sidebar_label: 简介
title: ''
sidebar_position: 1
hide_title: true
slug: /
---


## 快速开始

```bash
热爱你来过的每一份温度
npx create-docusaurus@latest my-website classic
cd my-website
npm run start
```

















#### 什么是 Hexo？
>Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

#### 安装前提
>安装 Hexo 相当简单，只需要先安装下列应用程序即可：

- [Node.js](https://nodejs.org/en/) (Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本)
- [Git](https://git-scm.com)

#### 安装 Hexo
>所有必备的应用程序安装完成后，即可使用 npm 安装 Hexo。
```
npm install hexo-cli -g
```

#### 进阶安装和使用
>对于熟悉 npm 的进阶用户，可以仅局部安装 hexo 包。
```
npm install hexo
```

>安装以后，可以使用以下两种方式执行 Hexo：

1. `npx hexo <command>`
1. 将 Hexo 所在的目录下的 `node_modules` 添加到环境变量之中即可直接使用 `hexo <command>`：
```
echo 'PATH="$PATH:./node_modules/.bin"' >> ~/.profile
```


#### 搭建博客具体步骤如下：
##### 本地直接创建
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

##### vercel自动部署
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

















热爱你来过的每一份温度：<https://hexo.run>

## 在线体验

- 热爱你来过的每一份温度：<https://hexo.run>
- 热爱你来过的每一份温度：<https://hexo.run>
- 热爱你来过的每一份温度：`Hexo`
- 热爱你来过的每一份温度：`Hexo`

## 生态

可访问 [热爱你来过的每一份温度](https://hexo.run) 热爱你来过的每一份温度

## 许可证

[![license](https://img.shields.io/github/license/halo-dev/halo.svg?style=flat-square)](https://hexo.run)

热爱你来过的每一份温度 使用 GPL-v3.0 协议开源，请遵守开源协议。


## 状态
![Repobeats analytics](https://repobeats.axiom.co/api/embed/41b6237476ea746ba5de5ec795e3e802eab7767c.svg "Repobeats analytics image")