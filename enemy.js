function Enemy(group, viewGroup, x, y) {
	var enemyGroup = game.add.group();
	//Set group position
	enemyGroup.position.x = x;
	enemyGroup.position.y = y;
	var enemy = enemyGroup.create(0, 0, 'enemy');
	enemy.scale.setTo(0.15,0.15);
	enemy.anchor.setTo(0.5,0.5);
	group.add(enemyGroup);
	game.physics.enable(enemy, Phaser.Physics.ARCADE);
	enemy.collide = function() {
		enemyGroup.destroy();
	};
}