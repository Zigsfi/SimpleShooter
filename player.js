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
	var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
    player.angle = Math.atan2(player.position.x - mX, player.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        player.y -= 3;
    }
    if (wasd.down.isDown) {
        player.y += 3;
    }
    if (wasd.left.isDown) {
        player.x -= 3;
    }
    if (wasd.right.isDown) {
        player.x += 3;
    }
})