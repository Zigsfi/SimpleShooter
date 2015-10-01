Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

function Rock(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'rock');
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(0.05, 0.05);
	
	//this.collide = function(){
      //  this.kill();
    //};
}

Rock.prototype.update = function(){
	
}
