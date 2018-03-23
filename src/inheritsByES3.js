import { isFunction } from '@yanhaijing/is_js';

import { create, setPrototypeOf, error } from './util.js';

export function inherits(C, P) {
    // 如果不为函数，则不进行操作
    if (!isFunction(C)) {
        error('inherits first param must is function');
        return;
    }

    if (!isFunction(P)) {
        error('inherits second param must is function');
        return;
    }

    C.prototype = create(P.prototype);

    C.prototype.constructor = C;//修复constructor
    C.uper = P;//存储超类

    // 静态属性继承，慎用，有坑，无法兼容10-
    setPrototypeOf(C, P);
}
