Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

Rock.prototype.force = {x:0.0, y:0.0}; 

function Rock(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'rock');
	game.physics.arcade.enable(this);
	this.scale.setTo(0.2, 0.2);
	this.anchor.setTo(0.5, 0.5);
	game.add.existing(this);
}

function shipVSrock() {
    rock.destroy();
}

Rock.prototype.update = function() {
	game.physics.arcade.overlap(ship, rock, shipVSrock, null, this);
}