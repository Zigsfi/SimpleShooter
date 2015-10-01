// game.js
// SimpleShooter game file

var boundsX = 1000, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game",
                    {preload:preload, update:update, create:create});

var player;

var enemy;

var rocks;

function preload () {
    game.load.image('space', 'Deep-Space.jpg');
    game.load.image('cat', 'spaceship.png');
    game.load.image('enemy', 'goomba.png');
    game.load.image('rock', 'rock.png');
}

function create() {

    // Arcade phyics
    //game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A spacey background
    game.add.tileSprite(0, 0, game.width, game.height, 'space');

    // add player
    player = new Player(game, game.world.centerX, game.world.centerY); 
    player = game.add.sprite(100, 100, 'cat');

    enemies = game.add.group();

    rocks = game.add.group();
    
    // Make enemies (goombas)
    for (var i = 0; i < 6; i++) {
        enemy = new Enemy(enemies, game.world.randomX, game.world.randomY);
    }

    // Make 5 rocks
    for (var i = 0; i < 5; i++) {
        rock = new Rock(rocks, game.world.randomX, game.world.randomY);
    }

    player.anchor.setTo(0.5, 0.5);

}



// Every time update() is called, update functions in objects
// w/ update functions are automatically called.
function update() {

    // make enemies accelerate to ship
    //enemies.forEachAlive(moveEnemies, this);
/*
    // handle collisions
    // Checks to see if the player overlaps with any of the goombas, 
    // player dies if he/she does
    if (checkOverlap(enemies, player)) {
        console.log("yerp");
        // kill player
        player.kill();
    } else {
        console.log("nerp");
        // don't kill player
        player.revive();
    }
*/

    game.physics.arcade.overlap(player, enemy, killPlayer, null, this);
    game.physics.arcade.overlap(player, rock, killRock, null, this);

}


/*
// moves objects toward an enemy
// http://phaser.io/examples/v2/p2-physics/accelerate-to-object
function moveEnemies (enemy) { 
    accelerateToObject(enemy,player,2);  //start accelerateToObject on every enemy
}

// move toward object
// Uses trigonometry to get objects to follow
function accelerateToObject(obj1, obj2, speed) {
    
    if (typeof speed === 'undefined') { 
        speed = 1; 
    }

    var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
    obj1.rotation = angle + game.math.degToRad(90);  // correct angle of angry enemies
    obj1.x += Math.cos(angle) * speed;    // accelerate to object 
    obj1.y += Math.sin(angle) * speed;
}
*/
