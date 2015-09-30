function createRocks() {
	/* create rocks */
	rocks = game.add.group();
    for (var i = 0; i < 2; i++) {
        var rock = rocks.create(100 + (i * 250), 300, 'rock');
		rock.scale.setTo(0.05, 0.05);
		rock.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(rock);
    }
}

function killRock(player, rock) {
    rock.kill();
}