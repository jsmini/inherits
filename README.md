# [inherits.js](https://github.com/yanhaijing/inherits.js) [![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base) [![npm](https://img.shields.io/badge/npm-0.1.1-orange.svg)](https://www.npmjs.com/package/@yanhaijing/inherits_js) [![Build Status](https://travis-ci.org/yanhaijing/inherits.js.svg?branch=master)](https://travis-ci.org/yanhaijing/inherits.js) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/inherits.js/blob/master/LICENSE)
ES6之前的继承方案，可继承ES6的class，100%兼容babel和Node，兼容ES3和IE6

## 兼容性
单元测试保证支持如下环境：

- Node 0.8+
- Safari 6+ (Mac)
- iOS 5+ Safari
- Chrome 23+ (Windows, Mac, Android, iOS, Linux, Chrome OS)
- Firefox 4+ (Windows, Mac, Android, Linux)
- Internet Explorer 6+ (Windows, Windows Phone)
- Opera 10+ (Windows, linux, Android)

## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## 如何使用
通过npm下载安装代码

```bash
$ npm install --save @yanhaijing/inherits_js
```

如果你是node环境

```js
var inherits = require('@yanhaijing/inherits_js').inherits;
```

如果你是webpack等环境

```js
import { inherits } from '@yanhaijing/inherits_js';
```

如果你是requirejs环境

```js
requirejs(['node_modules/@yanhaijing/inherits_js/dist/index.aio.js'], function (inherits_js) {
    var inherits = inherits_js.inherits;
})
```

如果你是浏览器环境

```html
<script src="node_modules/@yanhaijing/inherits_js/dist/index.aio.js"></script>

<script>
var inherits = inherits_js.inherits;
</script>
```

## 文档
[API](./doc/api.md)，[相关原理博文](http://yanhaijing.com/javascript/2014/11/09/object-inherit-of-js/)

## 贡献指南
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试，浏览器环境需要手动测试，位于`test/browser`

```bash
$ npm test
```

修改package.json中的版本号，修改README.md中的版本号，修改CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish --access=public
```

可能需要你自己修改的地方如下：

- README.md 中的信息
- package.json 中的信息
- config/rollup.js 中的信息
- test/browser/index.html 中的仓库名称

## 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## 计划列表
[TODO.md](./TODO.md)

## 谁在使用

