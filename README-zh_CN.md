# [inherits](https://github.com/jsmini/inherits)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/inherits/blob/master/LICENSE)
[![CI](https://github.com/jsmini/inherits/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsmini/inherits/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.8.0-orange.svg)](https://www.npmjs.com/package/@jsmini/inherits)
[![NPM downloads](http://img.shields.io/npm/dm/@jsmini/inherits.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/inherits)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/inherits.svg)](http://isitmaintained.com/project/jsmini/inherits 'Percentage of issues still open')

ES6之前的继承方案，可继承ES6的class，100%兼容babel和Node，兼容ES3和IE6

[English](./README.md) | 简体中文

## 兼容性

单元测试保证支持如下环境：

| IE  | CH  | FF  | SF  | OP  | IOS | 安卓 | Node  |
| --- | --- | --- | --- | --- | --- | ---- | ----- |
| 6+  | 23+ | 4+  | 6+  | 10+ | 5+  | 2.3+ | 0.10+ |

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
$ npm install --save @jsmini/inherits
```

如果你是node环境

```js
var inherits = require('@jsmini/inherits').inherits;
```

如果你是webpack等环境

```js
import { inherits } from '@jsmini/inherits';
```

如果你是requirejs环境

```js
requirejs(
  ['node_modules/@jsmini/inherits/dist/index.aio.js'],
  function (jsmini_inherits) {
    var inherits = jsmini_inherits.inherits;
  },
);
```

如果你是浏览器环境

```html
<script src="node_modules/@jsmini/inherits/dist/index.aio.js"></script>

<script>
  var inherits = jsmini_inherits.inherits;
</script>
```

## 文档

[API](https://github.com/jsmini/inherits/blob/master/doc/api.md)，[相关原理博文](http://yanhaijing.com/javascript/2014/11/09/object-inherit-of-js/)

## 贡献指南 ![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

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

## 贡献者列表

[contributors](https://github.com/jsmini/inherits/graphs/contributors)

## 更新日志

[CHANGELOG.md](https://github.com/jsmini/inherits/blob/master/CHANGELOG.md)

## 计划列表

[TODO.md](https://github.com/jsmini/inherits/blob/master/TODO.md)

## 谁在使用
