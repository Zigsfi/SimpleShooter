function createEnemies() {
	/* create enemies */
	enemies = game.add.group();
    for (var i = 0; i < 2; i++) {
        var enemy = enemies.create(700 - (i * 250), 550, 'enemy');
		enemy.scale.setTo(0.1, 0.1);
		enemy.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(enemy);
    }
}

function updateEnemies() {
	enemies.forEach(function(enemy) {
		/* enemies look at the player */
		pointAtPlayer(enemy);
		
		/* enemies move towards the player */
		moveTowardsPlayer(enemy);
    });
}

function moveX(enemy, deltaX) {
	enemy.x += deltaX;
}

function moveY(enemy, deltaY) {
	enemy.y += deltaY;
}

function pointAtPlayer(enemy) {
	enemy.angle = Math.atan2(enemy.position.x - ship.position.x, enemy.position.y - ship.position.y)  * -57.2957795;
}

function moveTowardsPlayer(enemy) {
	if (enemy.position.x < ship.position.x) {
		enemy.position.x += 1;
	} else if (enemy.position.x > ship.position.x) {
		enemy.position.x -= 1;
	}
	
	if (enemy.position.y < ship.position.y) {
		enemy.position.y += 1;
	} else if (enemy.position.y > ship.position.y) {
		enemy.position.y -= 1;
	}
}
