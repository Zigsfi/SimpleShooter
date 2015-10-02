Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

Rock.prototype.force = {x:0.0, y:0.0}; 


function Rock(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'rock');
    this.scale.set(.05, .05);
    this.anchor.setTo(0.5, 0.5);
    this.position.x = x;
    this.position.y = y;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;


    game.add.existing(this);
}

Rock.prototype.update = function() {
        

}