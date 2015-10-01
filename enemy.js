// enemy.js
// SimpleShooter enemy file

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.force = {x:0.0, y:0.0};

var enemy;

function Enemy(group, x, y) {
    var enemyGroup = game.add.group();
    enemyGroup.position.x = x;
    enemyGroup.position.y = y;

    enemy = enemyGroup.create(0, 0, 'enemy');
    game.physics.arcade.enable(enemy);
    enemy.scale.setTo(0.2, 0.2);
    enemy.anchor.setTo(0.5, 0.5);

    group.add(enemyGroup);

/*
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.collide = function() {
        enemyGroup.destroy();
    };
//    enemy.addChild(cone);
*/
}


Enemy.prototype.update = function() {

	// make enemies accelerate to ship
	//enemies.forEachAlive(moveEnemies, enemies);
	//this.x += 5;
	//this.y += 6;
    enemies.forEachAlive(moveEnemies, this);
    console.log('hi');

}

// moves objects toward an enemy
// http://phaser.io/examples/v2/p2-physics/accelerate-to-object
function moveEnemies (enemy) { 
     accelerateToObject(enemy,player,1);  //start accelerateToObject on every enemy
}

// move toward object
// Uses trigonometry to get objects to follow
function accelerateToObject(obj1, obj2, speed) {
    
    if (typeof speed === 'undefined') { 
        speed = 1; 
    }

    var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
    obj1.body.rotation = angle + game.math.degToRad(90);  // correct angle of angry enemies
    obj1.x += Math.cos(angle) * speed;    // accelerateToObject 
    obj1.y += Math.sin(angle) * speed;
}
