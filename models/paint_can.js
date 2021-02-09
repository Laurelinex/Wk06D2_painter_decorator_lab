const PaintCan = function(litres){
    this.litres = litres;
}
PaintCan.prototype.checkForLitres = function(){
    return this.litres;
}

PaintCan.prototype.emptyItsSelf = function(){
    this.litres = 0;
}

module.exports = PaintCan;