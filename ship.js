Ship.prototype = Object.create(Phaser.Sprite.prototype);

Ship.prototype.constructor = Ship;

Ship.prototype.force = {x:0.0, y:0.0};


function Ship(game, x, y){
	Phaser.Sprite.call(this, game, x, y, 'ship');
    Ship.prototype.game = game;
	this.scale.set(0.5, 0.5);
	this.anchor.setTo(0.5,0.5);
    this.body.allowRotation = false;
    game.add.existing(this);
	game.physics.enable(this, Phaser.Physics.ARCADE);
}

Ship.prototype.update = function(){
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
    ship.angle = Math.atan2(ship.position.x - mX, ship.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown && ship.y - 3 >= 0) {
        ship.y -= 7;
    }
    if (wasd.down.isDown && ship.y + 3 <= this.game.height) {
        ship.y += 7;
    }
    if (wasd.left.isDown && ship.x -3 >=0) {
        ship.x -= 7;
    }
    if (wasd.right.isDown && ship.x +3 <= this.game.width) {
        ship.x += 7;
    }

    
}
