Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

Rock.prototype.force = {x:0.0, y:0.0}; 

function Rock(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'rock');
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);
    
    this.collide = function () {
        this.destroy();
    }
}
