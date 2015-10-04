var rock;

Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;


function initializeRock(){
	rock = new Rock(game, 100, 100);

    rock.anchor.setTo(0.5, 0.5);
}

function updateRock(){
	game.physics.arcade.overlap(ship, rock, killRock, null, this);
}

// creates new rock
function Rock(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'rock');
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);
}

// kill function
function killRock(ship, rock){
	// removes rock
	rock.destroy();
}