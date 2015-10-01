var enemy;

function initializeEnemy(){
	
	enemy = game.add.sprite(200, 200, 'enemy');

    enemy.anchor.setTo(0.5, 0.5);
}

function updateEnemy(){
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
}