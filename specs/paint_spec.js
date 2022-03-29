const assert = require('assert');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');

describe('Paint', function() {
    let paint;
    beforeEach(function(){
        paint = new Paint(10)
    });
    it('should have number of litres', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 10)
    });
    it('should not be empty', function(){
        const actual = paint.isEmpty();
        assert.strictEqual(actual, false)
    });
    it('should set litres to 0', function(){
        paint.emptyPaint()
        const actual = paint.litres
        assert.strictEqual(actual, 0)
    });
});