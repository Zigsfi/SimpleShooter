function addEnemies(n, enemies){
	var enemy;
	for(var i = 0; i < n; i++){
		enemy = enemies.create(Math.random()*game.world.width, Math.round(Math.random())*game.world.height,'enemy');
		enemy.scale.setTo(0.2);
		enemy.anchor.setTo(0.5, 0.5);
		game.physics.enable(enemy);
		enemy.body.collideWorldBounds = true;
		enemy.update = function(){
			this.angle = Math.atan2(this.position.x - ship.position.x, this.position.y - ship.position.y)  * -57.2957795;
			this.position.x -= Math.sin((this.angle)/-57.2957795);
			this.position.y -= Math.cos((this.angle)/-57.2957795);
		}
	}
}

function enemyHit(player, enemy){
	player.kill();
}