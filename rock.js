function Rock(group, viewGroup, x, y) {
	var rockGroup = game.add.group();
	//Set group position
	rockGroup.position.x = x;
	rockGroup.position.y = y;
	var rock = rockGroup.create(0, 0, 'rock');
	rock.scale.setTo(0.05,0.05);
	rock.anchor.setTo(0.5,0.5);
	game.group.add(rockGroup);
	/*
	game.physics.enable(enemy, Phaser.Physics.ARCADE);
	enemy.collide = function() {
		enemyGroup.destroy();
	};
	*/
}