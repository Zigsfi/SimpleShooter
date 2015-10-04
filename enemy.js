var enemy;

function initializeEnemy(){
    enemies = game.add.group();
    viewGroup = game.add.group();
    for (var i = 0; i < 10; i ++) {
        var enemy = Enemy(enemies, 200 + i * 70, 200); 
    }
}

// allows enemies to track ship location
// detects for collisions every frame
function updateEnemy(){

    enemies.forEach(function (enemy) {

	enemy.angle = Math.atan2(enemy.position.x - ship.position.x, enemy.position.y - ship.position.y)  * -57.2957795;

    if (ship.position.x < enemy.position.x) {
        enemy.x -= 1;
    }
    if (ship.position.x > enemy.position.x) {
        enemy.x += 1;
    }
    if (ship.position.y < enemy.position.y) {
        enemy.y -= 1;
    }
    if (ship.position.y > enemy.position.y) {
        enemy.y += 1;
    }
    });

    // kills ship if collision
    game.physics.arcade.overlap(ship, enemies, killPlayer, null, this);

}

// enemy constructor
function Enemy(group, x, y) {
    var enemy = group.create(0, 0, 'enemy');
    enemy.position.x = x;
    enemy.position.y = y;
    enemy.anchor.setTo(0.5, 0.5);

    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    
}