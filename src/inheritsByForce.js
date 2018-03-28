import { isFunction } from '@yanhaijing/is_js';

import { create, setPrototypeOf } from './util.js';

export function inherits(C, P) {
    // 如果不为函数，则不进行操作
    if (!isFunction(C)) {
        throw new TypeError('inherits first param must is function');
    }

    if (!isFunction(P)) {
        throw new TypeError('inherits second param must is function');
    }

    C.prototype = create(P.prototype);

    C.prototype.constructor = C;//修复constructor
    C.uper = P;//存储超类

    // 静态属性继承，慎用，有坑
    setPrototypeOf(C, P, true);
}
