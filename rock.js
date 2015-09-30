Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

Rock.prototype.force = {x:0.0, y:0.0};


function Rock(game, group, x, y){
	enemy = group.create(x, y, 'rock');
	game.physics.enable(enemy, Phaser.Physics.ARCADE);
	enemy.body.allowRotation = false;
	enemy.collide = function(ship) {
		this.kill();
	}
}
