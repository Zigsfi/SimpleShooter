rock.prototype = Object.create(Phaser.Sprite.prototype);
rock.prototype.constructor = rock;

function rock (game, x, y){
        rocks = game.add.group();
	rocks.enableBody = true;
	for(var i=0; i < 3; i++){
		var rock = rocks.create((i+x)*10,(50+(i*200)),'rock');
                game.physics.arcade.enable(rocks);
	}
        game.add.existing(rocks);
}

rock.prototype.update = function(){
        game.physics.arcade.overlap(rocks, player, rock.die, null, this);
}


rock.prototype.die = function () {
        console.log("die foul rock");
        rocks.destroy();
}
