
Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

function Enemy(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'enemy');
    this.dx = Math.floor(Math.random() * 10);
    this.dy = Math.floor(Math.random() * 10);
    Enemy.prototype.game = game;
    this.scale.setTo(0.1, 0.1);
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
}

Enemy.prototype.update = function() {
    if ((this.x + this.dx) <= 0) {
        this.dx = this.dx * -1;
    }
    if ((this.x + this.dx) >= this.game.width) {
        this.dx = this.dx * -1;
    }
    if ((this.y + this.dy) <= 0) {
        this.dy = this.dy * -1;
    }
    if ((this.y + this.dy) >= this.game.height) {
        this.dy = this.dy * -1;
    }
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
}
