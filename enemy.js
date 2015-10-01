Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 

function Enemy(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'evil');
    enemy.position.x = x;
    enemy.position.y = y;
    enemy.scale.setTo(0.05, 0.05);
    enemy.anchor.setTo(0.5, 0.5);
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
}

Enemy.prototype.update = function() {
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;

    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;
    enemies.forEach(function(enemy){
        enemy.angle++;
    });
}