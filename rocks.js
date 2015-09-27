function addRocks(n, rocks){
	var rock;
	for(var i = 0; i < n; i++){
		rock = rocks.create(Math.random()*(game.world.width-20)+10, Math.random()*(game.world.height-20)+10,'rock');
		game.physics.enable(rock);
		rock.body.collideWorldBounds = true;
		rock.angle = (Math.random()*360);
		rock.body.velocity.x = Math.random()*5;
		rock.body.velocity.y = Math.random()*5;
		rock.anchor.setTo(0.5, 0.5);
		rock.body.bounce.y = 1;
		rock.body.bounce.x = 1;
		rock.update = function(){
			this.angle += 1;
		}
	}
}

function hitRock(player, rock){
	rock.kill();
}