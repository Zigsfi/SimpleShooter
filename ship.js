function add_player(ship) {
	ship = game.add.sprite(50, 50, 'ship');
	game.physics.enable(ship);
	ship.anchor.setTo(0.5, 0.5);
	return ship;
}

function destroy_player(player, enemy) {
	player.destroy();
}