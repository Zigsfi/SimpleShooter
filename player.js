function ship(x, y){
	ship = game.add.sprite(x, y, 'ship');
	game.physics.enable(ship)
	ship.body.collideWorldBounds = true;
    ship.anchor.setTo(0.5, 0.5);
}

function movePlayer(wasd){
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