Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 


function Enemy(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'enemy');
    this.scale.set(0.1, 0.1);
    this.anchor.setTo(0.5, 0.5);
    this.position.x = x;
    this.position.y = y;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;


    game.add.existing(this);
}

Enemy.prototype.update = function() {
        this.angle++;
}