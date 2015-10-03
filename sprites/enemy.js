Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 

function Enemy(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'enemy');
	game.physics.arcade.enable(this);
	this.scale.setTo(0.2, 0.2);
	this.anchor.setTo(0.5, 0.5);
	game.add.existing(this);
}

function shipVSenemy() {
    ship.destroy();
}

Enemy.prototype.update = function() {
	game.physics.arcade.overlap(ship, enemy, shipVSenemy, null, this);
}
