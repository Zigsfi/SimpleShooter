Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Enemy;

function Rock(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'rock');
    this.scale.set(0.2, 0.2);
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);

}

