var rocks;

function setupRock(){
	rocks = game.add.group();

	rocks.enableBody = true;

    var rock = rocks.create(100, 100, 'rock');

    rock.anchor.setTo(0.0, 0.0);
    
    game.physics.enable(rock, Phaser.Physics.ARCADE);
    rock.collide = function() {
        this.destroy();
    };
}