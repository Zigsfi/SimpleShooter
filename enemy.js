function Enemy(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'enemy');
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.scale.setTo(0.15, 0.15);
    this.anchor.setTo(0.5, 0.5);
    

    this.collide = function() {
        this.kill();
    };
}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function() {
        /* Set the angle to be the angle between the ship and the enemy */
        /* Multiply by the constant to convert atan2's radians to Phaser's degrees */
        this.angle = Math.atan2(ship.position.y - this.position.y, ship.position.x - this.position.x) * 57.2957795;
        /* Move the enemy towards the player */
        game.physics.arcade.velocityFromAngle(this.angle, 150, this.body.velocity);
        /* Tilt the enemy so its eyes are towards the player — there's probably a better way to do this */
        this.angle -= 270;

}