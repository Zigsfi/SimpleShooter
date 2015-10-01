Rock.prototype = Object.create(Phaser.Sprite.prototype);
//creates rock class

Rock.prototype.constructor = Rock;

function Rock(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'rock');
	//enables physics
	game.physics.enable(this, Phaser.Physics.ARCADE);
	//sets rotation axis
	this.anchor.setTo(0.5, 0.5);
	//sets size
	this.scale.setTo(0.25, 0.25);
	//gives initial velocity
	this.body.velocity.x=.5*x+2+x+x;
	this.body.velocity.y=-2*x+5*y-3*y;
	//allows rocks to collide with and bounce off of walls
	this.body.collideWorldBounds = true;
    this.body.bounce.set(1);
	//kills the rock upon hitting the ship
	this.collide = function(){
        this.kill();
    };
}

//Causes reverse spin of rock
Rock.prototype.update = function(){
	this.angle--;
}

//Calls killing of rock once collided with ship
function Rockcollide(rock, collider){
    rock.collide();
}
