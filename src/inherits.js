import { setPrototypeOf } from './util.js';

export function inherits(C, P) {
    // 等同于临时构造函数
    C.prototype = Object.create(P.prototype);

    C.prototype.constructor = C; // 修复constructor
    C.uper = P;//存储超类

    // 静态属性继承，慎用，有坑，无法兼容10-
    setPrototypeOf(C, P);
}
