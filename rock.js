function Rock(group, x, y) {
	//Set group position
	var rock = group.create(0, 0, 'rock');
	rock.position.x = x;
	rock.position.y = y;
	
	rock.scale.setTo(0.05,0.05);
	rock.anchor.setTo(0.5,0.5);

	game.physics.enable(rock, Phaser.Physics.ARCADE);
	
	rock.collide = function() {
		this.destroy();
	};
}