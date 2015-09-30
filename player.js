function createPlayer() {
	/* create player ship */
    ship = game.add.sprite(50, 50, 'ship');
	ship.scale.setTo(0.5, 0.5);
	ship.anchor.setTo(0.5, 0.5);
	game.physics.arcade.enable(ship);
}

function updatePlayer() {
	/* player look at the mouse */
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    pointAt(mX, mY);

	/* keyboard movement */
    if (wasd.up.isDown) {
        moveY(-3);
    }
    if (wasd.down.isDown) {
        moveY(3);
    }
    if (wasd.left.isDown) {
        moveX(-3);
    }
    if (wasd.right.isDown) {
        moveX(3);
    }
}

function moveX(deltaX) {
	ship.x += deltaX;
}

function moveY(deltaY) {
	ship.y += deltaY;
}

function pointAt(x, y) {
	ship.angle = Math.atan2(ship.position.x - x, ship.position.y - y)  * -57.2957795;
}

function killPlayer(ship, enemy) {
	ship.kill();
}

