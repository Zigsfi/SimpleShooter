var ship;
var wasd;

Ship.prototype = Object.create(Phaser.Sprite.prototype);

Ship.prototype.constructor = Ship;

Ship.prototype.force = {x:0.0, y:0.0};

function initializeShip() {
    
	/*
	ship = game.add.sprite(50, 50, 'ship');

    ship.anchor.setTo(0.5, 0.5);*/

    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}




Ship.prototype.update = function() {
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

    game.physics.arcade.overlap(ship, enemy, killPlayer, null, this);
}


// making the ship
function Ship(){
    ship = new Ship(game, game.world.centerX, game.world.centerY);
    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.scale.set(0.05, 0.05);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);
}

// kill function
function killPlayer(ship, enemy){
    // removes ship
    ship.destroy();
}