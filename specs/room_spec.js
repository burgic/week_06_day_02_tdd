const assert = require('assert');
const Room = require('../models/room.js')


describe('Room', function(){
    let room;
    
    this.beforeEach(function(){
        room = new Room(10)
    });
    it('should have an area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 10)
    });
    it('it should be false by default', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false)
    });
    it('it should be able to be painted', function(){
        room.painted_complete();
        const actual = room.painted
        assert.strictEqual(actual, true)
    })
});