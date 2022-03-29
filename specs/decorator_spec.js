const assert = require('assert');
const Decorator = require('../models/decorator.js')

describle('Deocrator', function() {
    let decorator;
    beforeEach(function(){
        decorator = new Decorator([])
    });
    it('should have paint stock', function(){
        assert.strictEqual([])
    })
});


