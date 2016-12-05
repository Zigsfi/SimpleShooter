var ship
var wasd

function newShip(game){
	game.add.sprite(50, 50, 'ship');

	ship.anchor.setTo(0.5, 0.5);
	this.cursors = game.input.keyboard.createCursorKeys();

	wasd = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.W);
		down: game.input.keyboard.addKey(Phaser.Keyboard.S);
		left: game.input.keyboard.addKey(Phaser.Keyboard.A);
		right: game.input.keyboard.addKey(Phaser.Keyboard.D);
	}

}
function updateShip(game) {
	var mX = game.input.mousePointer.x;
	var mY = game.input.mousePointer.y;

	this.angle = Math.atan2(this.position.x - mX, this.position.y - mY) * -57.2957795;

	if (wasd.up.isDown) {
		ship.y -= 3;
	}
	if (wasd.down.isDown) {
		ship.y += 3;
	}
	if (wasd.left.isDown) {
		ship.x -= 3;
	}
	if (wasd.right.isDown) {
		ship.x += 3;
	}

	}
}
function ship_enemy_collision(ship, enemy) {
	ship.kill();
}
