function createShip() {
	ship = game.add.sprite(50, 50, 'ship');

	ship.anchor.setTo(0.5, 0.5);
	ship.scale.setTo(.5, .5);
	this.cursors = game.input.keyboard.createCursorKeys();

	wasd = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.W),
		down: game.input.keyboard.addKey(Phaser.Keyboard.S),
		left: game.input.keyboard.addKey(Phaser.Keyboard.A),
		right: game.input.keyboard.addKey(Phaser.Keyboard.D),
	};
		
	game.physics.arcade.enable(ship);
	ship.body.collideWorldBounds = true;
	game.physics.enable(ship, Phaser.Physics.ARCADE);
}

function moveShip() {
	var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
	/* look at the mouse */
    ship.angle = Math.atan2(ship.position.x - mX, ship.position.y - mY)  * -57.2957795;

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

function killShip (obj1, obj2) {
    ship.kill();
}