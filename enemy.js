Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0}; 

function Enemy(game, group, x, y) {
    var enemy = group.create(x, y, 'enemy');
    enemy.scale.setTo(0.1, 0.1);
    enemy.anchor.setTo(0.5, 0.5);
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.body.allowRotation = false;
    enemy.collide = function(ship) {
        ship.kill();
    }
}
