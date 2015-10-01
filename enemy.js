//creates the enemy class;
Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

function Enemy(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'enemy');
	//enables physics
	game.physics.enable(this, Phaser.Physics.ARCADE);
	//sets rotation axis
	this.anchor.setTo(0.5, 0.5);
	//sets size
	this.scale.setTo(0.1, 0.1);
	//gives object velocity based on which number of the group the enemy
	this.body.velocity.x=x+10;
	this.body.velocity.y=2*x+5;
	//allows the enemies to collide with and bounce off the borders of the game
	this.body.collideWorldBounds = true;
    this.body.bounce.set(1);

}

Enemy.prototype.update = function(){
	//causes the enemies to violently spin, making them scary
	this.angle+=30;
}
