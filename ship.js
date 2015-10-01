Ship.prototype = Object.create(Phaser.Sprite.prototype);

Ship.prototype.constructor = Ship;

Ship.prototype.force = {x:0.0, y:0.0}; 

var wasd;

function Ship(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(ship, Phaser.Physics.ARCADE);
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
    game.add.existing(this);
}

Ship.prototype.update = function() {
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