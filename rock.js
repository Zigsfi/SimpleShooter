Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

Rock.prototype.force = {x:0.0, y:0.0}; 

var Rock;
var wasd;

function Rock(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'rock');
    this.anchor.setTo(0.5, 0.5);
    this.scale.setTo(.25,.25);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    this.spin = Math.random() * 20 - 10;
    game.add.existing(this);
}

Rock.prototype.update = function() {
    this.angle += this.spin;
    this.position.x += 4;
    this.position.y +=4;

    if(game.physics.arcade.overlap(this, ship)) {
        this.kill();
    }

}