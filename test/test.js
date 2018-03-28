var expect = require('expect.js');

var base = require('../dist/index.js');

var inherits = base.inherits;
var inheritsByES3 = base.inheritsByES3;
var inheritsByForce = base.inheritsByForce;

describe('单元测试', function() {
    this.timeout(1000);

    describe('inherits', function() {
        function A() {}
        A.staticAAA = 1;
        A.prototype.aaa = 1;

        function B() {}

        inherits(B, A);

        B.prototype.bbb = 1;

        var a = new A;
        var b = new B;

        

        it('param', function() {
            try {
                inherits();
            } catch (e) {
                expect(e.message).to.equal('inherits first param must is function');
            }

            try {
                inherits(B);
            } catch (e) {
                expect(e.message).to.equal('inherits second param must is function');
            }
        });

        it('object', function() {
            expect(a instanceof A).to.equal(true);
            expect(a.aaa === 1).to.equal(true);
            expect(b instanceof B).to.equal(true);
            expect(b instanceof A).to.equal(true);
            expect(b.aaa === 1).to.equal(true);
            expect(b.bbb === 1).to.equal(true);
        });

        it('constructor', function() {
            expect(a.constructor === A).to.equal(true);
            expect(a.constructor === A).to.equal(true);
            expect(b.constructor === B).to.equal(true);
            expect(B.prototype.constructor === B).to.equal(true);
        });

        it('class', function() {
            expect(B.staticAAA === 1).to.equal(true);
            expect(B.uper === A).to.equal(true);
        });
    });

    describe('inheritsByES3', function() {
        function A() {}
        A.staticAAA = 1;
        A.prototype.aaa = 1;

        function B() {}

        inheritsByES3(B, A);

        B.prototype.bbb = 1;

        var a = new A;
        var b = new B;

        it('param', function() {
            try {
                inheritsByES3();
            } catch (e) {
                expect(e.message).to.equal('inherits first param must is function');
            }

            try {
                inheritsByES3(B);
            } catch (e) {
                expect(e.message).to.equal('inherits second param must is function');
            }
        });

        it('object', function() {
            expect(a instanceof A).to.equal(true);
            expect(a.aaa === 1).to.equal(true);
            expect(b instanceof B).to.equal(true);
            expect(b instanceof A).to.equal(true);
            expect(b.aaa === 1).to.equal(true);
            expect(b.bbb === 1).to.equal(true);
        });

        it('constructor', function() {
            expect(a.constructor === A).to.equal(true);
            expect(a.constructor === A).to.equal(true);
            expect(b.constructor === B).to.equal(true);
            expect(B.prototype.constructor === B).to.equal(true);
        });

        it('class', function() {
            expect(B.staticAAA === 1).to.equal(true);
            expect(B.uper === A).to.equal(true);
        });
    });

    describe('inheritsByForce', function() {
        function A() {}
        A.staticAAA = 1;
        A.prototype.aaa = 1;

        function B() {}

        inheritsByForce(B, A);

        B.prototype.bbb = 1;

        var a = new A;
        var b = new B;

        it('param', function() {
            try {
                inheritsByForce();
            } catch (e) {
                expect(e.message).to.equal('inherits first param must is function');
            }

            try {
                inheritsByForce(B);
            } catch (e) {
                expect(e.message).to.equal('inherits second param must is function');
            }
        });

        it('object', function() {
            expect(a instanceof A).to.equal(true);
            expect(a.aaa === 1).to.equal(true);
            expect(b instanceof B).to.equal(true);
            expect(b instanceof A).to.equal(true);
            expect(b.aaa === 1).to.equal(true);
            expect(b.bbb === 1).to.equal(true);
        });

        it('constructor', function() {
            expect(a.constructor === A).to.equal(true);
            expect(a.constructor === A).to.equal(true);
            expect(b.constructor === B).to.equal(true);
            expect(B.prototype.constructor === B).to.equal(true);
        });

        it('class', function() {
            expect(B.staticAAA === 1).to.equal(true);
            expect(B.uper === A).to.equal(true);
        });
    });
});
