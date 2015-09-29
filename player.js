// Player code goes here!

Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.force = {x:0.0, y:0.0};

function Player(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'ship');
	this.anchor.setTo(0.5, 0.5);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.allowRotation = true;
	game.add.existing(this);
}

Player.prototype.update(function() {
	// Fill me in!
})