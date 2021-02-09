const assert = require('assert');
const PaintCan = require('../paint_can.js');

let paint;

describe('can of paint', function(){
    beforeEach(function() {
        paint = new PaintCan(10);
    });

    it('should have some litres', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    });

    it('should be able to check for amount of litres', function(){
        const actual = paint.checkForLitres();
        assert.strictEqual(actual, 10);
    });

    it('should empty its self of paint', function(){
        paint.emptyItsSelf();
        const actual = paint.litres;
        assert.strictEqual(actual, 0);
    })
    
})