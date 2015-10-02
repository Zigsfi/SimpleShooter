Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;
Enemy.prototype.dx = 0;
Enemy.prototype.dy = 0;
Enemy.prototype.MAX_SPEED = 8;


function Enemy(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'enemy');
    Enemy.prototype.game = game;
    this.dx = Math.floor(Math.random()*this.MAX_SPEED);
    this.dy = Math.floor(Math.random()*this.MAX_SPEED);
    this.scale.set(0.1,0.1)
    this.anchor.setTo(0.5,0.5);
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
}

Enemy.prototype.update = function(){

    // movement
    if (((this.x + this.dx) <= 0) || ((this.x +this.dx) >= this.game.width)) {
        this.dx = this.dx *-1;
    }

    if (((this.y + this.dy) <= 0) || ((this.y +this.dy) >= this.game.height)) {
        this.dy = this.dy * -1;
    }

    this.x = this.x + this.dx;
    this.y = this.y + this.dy;

    // game.physics.enable(enemy, Phaser.Physics.ARCADE);
    //     enemy.collide = function() {
    //         enemyGroup.destroy();
    //     };
}