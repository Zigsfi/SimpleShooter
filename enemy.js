// enemy.js
// SimpleShooter enemy file

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.force = {x:0.0, y:0.0};

// Arthur's sample code was instrumental in making
// this function
function Enemy(game,x,y) {
    
    // prevents spawn overlap with the player
    while (x > 350 && x < 700 && y > 150 && y < 400) {
        x = game.world.randomX;
        y = game.world.randomY;
    }

    Phaser.Sprite.call(this, game, x, y, 'enemy');
    this.scale.set(0.2, 0.2);
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowRotation = false;
    game.add.existing(this);

}

// Nothing is being called in here
Enemy.prototype.update = function() {

    // enemies follow player
    moveEnemy(this);

    // collisions
    game.physics.arcade.overlap(this,player,killPlayer,null,this);
}

// moves objects toward an enemy
// http://phaser.io/examples/v2/p2-physics/accelerate-to-object
function moveEnemy (enemy) { 
    //start accelerateToObject on every enemy
    accelerateToObject(enemy,player,1.2);
}

// move toward object
// Uses trigonometry to get objects to follow
function accelerateToObject(obj1, obj2, speed) {
    
    if (typeof speed === 'undefined') { 
        speed = 1; 
    }

    var angle = Math.atan2(obj2.position.y - obj1.position.y,
                             obj2.position.x - obj1.position.x);
    
    // correct angle of angry enemies
    obj1.rotation = angle + game.math.degToRad(90);
    obj1.x += Math.cos(angle) * speed;    // accelerateToObject 
    obj1.y += Math.sin(angle) * speed;
}

// Kills player and starts losing sequence
function killPlayer(enemy, collider) {
    collider.kill(); // kills player
    losing();
}


