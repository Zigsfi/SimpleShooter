Ship.prototype = Object.create(Phaser.Sprite.prototype);

Ship.prototype.constructor = Ship; 

Ship.prototype.force = { x: 0.0, y: 0.0 };


Ship.prototype.collide = function ( ) {
        //ship is destoyed when collides with something 
        this.destroy( ); 
}

Ship.prototype.collisionHandler2 = function(enemy, collider){
    collider.collide();
}

function Ship (game, x, y) { 
	
	Phaser.Sprite.call(this, game, x, y, 'ship'); 
    //scale sprite
	this.scale.set(0.50, 0.50); 
	this.anchor.setTo(0.5, 0.5); 
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.allowRotation = false; 
	game.add.existing(this); 

    this.cursors = game.input.keyboard.createCursorKeys(); 
    wasd = {  
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
 
}

Ship.prototype.update = function ( ) {
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /*look at mouse*/
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        ship.y -= 3;
    }
    if (wasd.down.isDown) {
        ship.y += 3;
    }
    if (wasd.left.isDown) {
        ship.x -= 3;
    }
    if (wasd.right.isDown) {
        ship.x += 3;
    }

}
