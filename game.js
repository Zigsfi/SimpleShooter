
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'view.png');

    game.load.script('rock');
    game.load.script('player');
    game.load.script('enemy');
}

function create() {
    //create an instance of a ship
    ship = new Ship(game, game.world.centerX, game.world.centerY);
    //create an instance of an enemy
    enemies = game.add.group();
    rocks = game.add.group();
    for (var i = 0; i < 10; i ++) {
        var enemy = Enemy(enemies, 200+ (Math.floor(Math.random() * 60 * i)), 200 + (Math.floor(Math.random() * 60 *i))); 
    }

    for (var k = 0; k < 5; k ++) {
        var rock = Rock(rocks, 200+ (Math.floor(Math.random() * 80 * k)), 200 + (Math.floor(Math.random() * 80 *k))); 
    }
    //game.add.sprite(200, 200, 'rock');
}

function update() {
    //check if any enemies have collided with player
    for (var i = 0, len = enemies.children.length; i < len; i++){
        if(game.physics.arcade.overlap(ship, enemies.children[i], collisionHandler, null, this) ) {
            enemies.children[i].kill();
        }
    }
    //check if any enemies have collided with rocks
    for (var i = 0, len = rocks.children.length; i < len; i++){
        if(game.physics.arcade.overlap(ship, rocks.children[i], collisionHandler, null, this) ) {
            rocks.children[i].kill();
        }
    }
    //rotate enemies
    for (var i = 0, len = enemies.children.length; i < len; i++){
            enemies.children[i].angle = enemies.children[i].angle + (Math.floor(Math.random() * 3) );
    }
}

function collisionHandler(){
}


