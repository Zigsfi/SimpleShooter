Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0};

function Enemy(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'enemy');
	this.anchor.setTo(0.5, 0.5);
	this.scale.set(0.25, 0.25);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.collide = function() {
		this.destroy();
	}
	this.body.allowRotation = true;
	game.add.existing(this);
}

function collisionHandler(player, collider) {
	collider.collide();
}

Enemy.prototype.update = function() {
	game.physics.arcade.overlap(player, this, collisionHandler, null, this)
}