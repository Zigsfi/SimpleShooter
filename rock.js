Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

function Rock(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'rock');
    Enemy.prototype.game = game;
    this.scale.setTo(0.2, 0.2);
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
}

