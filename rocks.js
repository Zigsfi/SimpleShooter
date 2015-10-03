var rock;

function initializeRock(){
	rock = game.add.sprite(150, 150, 'rock');

    rock.anchor.setTo(0.5, 0.5);
}

function updateRock(){
	game.physics.arcade.overlap(ship, rock, killRock, null, this);
}

// kill function
function killRock(ship, rock){
	// removes rock
	rock.kill();
}