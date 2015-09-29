function createRocks() {
	rocks = game.add.group();
	
	//  We will enable physics for any rock that is created in this group
    rocks.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 12; i++)
    {
        //  Create a rock inside of the 'rocks' group
        var rock = rocks.create(Math.random() * 700, Math.random() * 500, 'rocks');
		rock.scale.setTo(.15, .15);
		rock.body.velocity.x = Math.random() * 2 + 1;
		rock.body.velocity.y = Math.random() * 2 + 1;
		if (Math.random() < .5) {
			rock.body.velocity.x *= -1;
		}
		if (Math.random() < .5) {
			rock.body.velocity.y *= -1;
		}
		game.physics.enable(rock, Phaser.Physics.ARCADE);
    }
}

function screenWrap (sprite) {

    if (sprite.x < 0)
    {
        sprite.x = game.width;
    }
    else if (sprite.x > game.width)
    {
        sprite.x = 0;
    }

    if (sprite.y < 0)
    {
        sprite.y = game.height;
    }
    else if (sprite.y > game.height)
    {
        sprite.y = 0;
    }
}

function killRock (obj1, obj2) {
    obj2.kill(); //obj2 is always the rock
}

function changePosition (sprite) {
	sprite.x += sprite.body.velocity.x;
	sprite.y += sprite.body.velocity.y;
}