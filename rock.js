var rocks = game.add.group();

function newRock(game) {

	for (var i = 0; i < 10; i++) {
		var rock = game.add.sprite(150, 150, 'rocks');
		var randx = random() * 100;
		while (randx > game.width) {
			randx = random() * 100;
		}
		var randy = random() * 100;
		while (randy > game.height){
			randy = random() * 100;
		}
		var rock = game.add.sprite(randx, randy, 'rock');

		rock.scale.setTo(0.05, 0.05);

		rock = group.create(0, 0, 'rock');
	}
}
function rock_ship_collision(rock, ship) {
		rock.kill();
}
