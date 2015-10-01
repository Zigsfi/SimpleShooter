Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.force = {x:0.0, y:0.0};

function Player(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.scale.set(0.5, 0.5);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false; 
    game.add.existing(this); 
}


Player.prototype.update = function() {
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;


    if (wasd.up.isDown) {
        this.y -= 3;
    }
    if (wasd.down.isDown) {
        this.y += 3;
    }
    if (wasd.left.isDown) {
        this.x -= 3;
    }
    if (wasd.right.isDown) {
        this.x += 3;
    }

}