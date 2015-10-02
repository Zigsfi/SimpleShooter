var enemies;

function setupEnemy(){
	enemies = game.add.group();

	enemies.enableBody = true;

    var enemy = enemies.create(300, 500, 'enemy');

    enemy.anchor.setTo(0.5, 0.5);
    enemy.scale.setTo(0.1, 0.1);
    
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.collide = function() {
        this.destroy();
    };
}

function updateEnemy() {
	enemies.forEach(function(enemy) {
        enemy.angle++;
    });
}
