import { create, setPrototypeOf } from './util.js';

export function inherits(C, P) {
    C.prototype = create(P.prototype);

    C.prototype.constructor = C;//修复constructor
    C.uper = P;//存储超类

    // 静态属性继承，慎用，有坑
    setPrototypeOf(C, P, true);
}
