
Ship.prototype = Object.create(Phaser.Sprite.prototype);

Ship.prototype.constructor = Ship;

Ship.prototype.force = {x:0.0, y:0.0};

function Ship(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.scale.set(0.5, 0.5);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
}

Ship.prototype.update = function() {
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

    if (game.input.activePointer.isDown) {
        game.physics.arcade.moveToPointer(this, 60, game.input.activePointer, 500);
    }
    if (wasd.up.isDown) {
        ship.y -= 10; 
    }
    if (wasd.down.isDown) {
        ship.y += 10;
    }
    if (wasd.left.isDown) {
        ship.x -= 10;
    }
    if (wasd.right.isDown) {
        ship.x += 10;
    }
}
