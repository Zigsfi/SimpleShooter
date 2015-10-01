enemy.prototype = Object.create(Phaser.Sprite.prototype);
enemy.prototype.constructor = enemy;

function enemy (game, x, y){
        enemies = game.add.group();
	enemies.enableBody = true;
	for(var i=0; i < 3; i++){
		var enemy = enemies.create(i*70,0,'enemy');
                enemy.scale.set(0.1,0.1);
                game.physics.arcade.enable(enemies);
	}
        game.add.existing(enemies);
}

enemy.prototype.update = function(playerX, playerY){
}
