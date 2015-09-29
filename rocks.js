var rocks;
rocks = game.add.group();
//rocks.enableBody = true;

for (var i = 0; i < 10; i++)
    {
        var rock = rocks.create(i * 70, 0, 'rock');
    }

function initializeRock(){
	rock = game.add.sprite(100, 100, 'rock');

    rock.anchor.setTo(0.5, 0.5);
}

// kill function
function killRock(ship, rock){
	// removes rock
	rock.kill();
}

