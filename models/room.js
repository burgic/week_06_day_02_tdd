const Room = function(area) {
    this.area = area;
    this.painted = false;

}

Room.prototype.painted_complete = function(){
    if(this.painted == false) {
        this.painted = true
    }
}

module.exports = Room;