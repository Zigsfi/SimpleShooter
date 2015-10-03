Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.force = {x:0.0, y:0.0}; 

var wasd;

function Player(game, x, y) {

    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.scale.set(1, 1);
    this.anchor.setTo(0.5, 0.5);

    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    
    game.add.existing(this);

 	wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}


Player.prototype.update = function(){

	var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;

    // Mouse Facing
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

    // Handles Input
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
