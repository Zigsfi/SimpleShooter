EnGroup = function (game, x, y, num){
	Phaser.Group.call(this, game);
	this.classType = Enemy; 
	for (var i=0; i<num; i++){
		this.add(new Enemy(game, (i*x+i*2), i*y));
	}
}

EnGroup.prototype = Object.create(Phaser.Group.prototype);

EnGroup.prototype.constructor = EnGroup;

EnGroup.prototype.update = function(){
	Phaser.Group.prototype.update.apply(this, arguments);
}
