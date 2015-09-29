function createEnemies() {
	enemies = game.add.group();

	//  We will enable physics for any enemy that is created in this group
    enemies.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a enemy inside of the 'enemies' group
        var enemy = enemies.create(Math.random() * 600 + 100, Math.random() * 400 + 100, 'enemy');  //range x: 0-700 y: 0-500
		
		enemy.scale.setTo(.2, .2);
		
		game.physics.enable(enemy, Phaser.Physics.ARCADE);
    }
}

function moveTowardPlayer (enemy, ship) {
	enemy.angle = Math.atan2(enemy.position.x - ship.position.x, enemy.position.y - ship.position.y)  * -57.2957795;
	if (enemy.position.x - ship.position.x > 0) {
		enemy.x -= .5;
	}
	else {
		enemy.x += .5;
	}
	if (enemy.position.y - ship.position.y > 0) {
		enemy.y -= .5;
	}
	else {
		enemy.y += .5;
	}
	
}