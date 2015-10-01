//Declares rock group
RoGroup = function (game, x, y, num){
	Phaser.Group.call(this, game);
	this.classType = Rock; 
	//creates num specified number of rocks
	for (var i=0; i<num; i++){
		this.add(new Rock(game, i*x+40, i*y));
	}

}

//Creates phaser prototype
RoGroup.prototype = Object.create(Phaser.Group.prototype);

RoGroup.prototype.constructor = RoGroup;

RoGroup.prototype.update = function(){
	Phaser.Group.prototype.update.apply(this, arguments);
}
