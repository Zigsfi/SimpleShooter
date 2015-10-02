var enemy;

function newEnemy(game) {
	Phaser.add.sprite(200, 200, 'enemy');
	enemy.scale.setTo(0.05, 0.05);
	enemy.anchor.setTo(0.5, 0.5);

}
function updateEnemy(game) {
	enemy.angle = Math.atan2(this.position.x - ship.position.x, this.position.y - ship.position.y) * -57.2957795;

	if (ship.position.x > enemy.position.x) {
		enemy.position.x += 2;
	}
	if (ship.position.y > enemy.position.y) {
		enemy.position.y += 2;
	}
	if (ship.position.x < enemy.position.x) {
		enemy.position.x -= 2;
	}
	if (ship.position.y < enemy.position.y) {
		enemy.position.y -= 2;
	}
}

