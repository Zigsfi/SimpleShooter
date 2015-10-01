Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy; 

Enemy.prototype.force = { x: 0.0, y: 0.0 };

function Enemy (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'enemy'); 

    //enemy = game.add.sprite(0, 0, 'enemy');
    this.scale.set(.10, .10); 
    this.anchor.setTo(0.5, 0.5); 
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false; 

    //game.physics.arcade.enable(enemy);

    game.add.existing(this); 
}
