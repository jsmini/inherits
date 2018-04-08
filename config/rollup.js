var pkg = require('../package.json');

// 兼容 jslib-base 和 @yanhaijing/jslib-base 
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * inherits ${version} (https://github.com/jsmini/inherits)
 * API https://github.com/jsmini/inherits/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/inherits/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
