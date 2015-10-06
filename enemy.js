function createEnemy(group) {
	var randomX = game.rnd.integerInRange(0, boundsX);
	var randomY = game.rnd.integerInRange(0, boundsY);
	var enemy = enemies.create(randomX, randomY, 'enemy');

	enemy.scale.setTo(.1, .1);
	game.physics.enable(enemy, Phaser.Physics.ARCADE);

	enemy.body.velocity.setTo(50, 50);
	enemy.body.collideWorldBounds = true;
	enemy.body.bounce.set(1);
}