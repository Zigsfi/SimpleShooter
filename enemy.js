Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0};

function Enemy(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'enemy');
	this.anchor.setTo(0.5, 0.5);
	this.scale.set(0.25, 0.25);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.allowRotation = true;
	game.add.existing(this);
}


Enemy.prototype.update = function() {

	if (player.alive) {
		var mX = player.x;
		var mY = player.y;
		this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;
		game.physics.arcade.moveToObject(this, player, 60);
	} else {
		var stopX = this.x;
		var stopY = this.y;
		this.reset(stopX, stopY);
	}
}