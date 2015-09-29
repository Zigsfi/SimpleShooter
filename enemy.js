function Enemy(group, x, y) {
	//var enemyGroup = game.add.group();
	//Set group position
	var enemy = group.create(0, 0, 'enemy');
	enemy.position.x = x;
	enemy.position.y = y;
	enemy.scale.setTo(0.05,0.05);
	enemy.anchor.setTo(0.5,0.5);

	game.physics.enable(enemy, Phaser.Physics.ARCADE);
	
	enemy.collide = function() {
			console.log("destroy");
			this.destroy();
	};
}