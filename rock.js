function Rock(game, x, y, vx, vy) {
    Phaser.Sprite.call(this, game, x, y, 'rock');
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.scale.setTo(0.15, 0.15);
    this.anchor.setTo(0.5, 0.5);
    /* The rocks bounce off of the game walls */
    this.body.collideWorldBounds = true;
    this.body.velocity.x = vx;
    this.body.velocity.y = vy;
    this.body.bounce.x = 1;
    this.body.bounce.y = 1;

    this.collide = function() {
        this.kill();
    };

}

Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

/* Rocks spin constantly */
Rock.prototype.update = function() {
        this.angle++;
}