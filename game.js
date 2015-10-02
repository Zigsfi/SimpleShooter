
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});


var ship;
var enemies;
var enemy;
var rocks;
var rock;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.jpg');
}

function create() {
    game.physics.enable(Phaser.Physics.ARCADE);
    ship = new Ship(game, game.world.centerX, 520); 
    enemies = game.add.group();
    for (var i = 0; i < 10; i ++) {
        enemy = new Enemy(game, 200 + i * 70, 200);
        enemies.add(enemy); 
    }
    rocks = game.add.group();
    for(var i=0; i<10; i++) {
        rock = new Rock(game, 10 + Math.random()* 400, 10+Math.random()*400);
        rocks.add(rock);
    }
    
}

function collisionHandler1(player, collider) {
    player.kill();
    game.debug.text('GAME OVER', 32, 32);
}

function collisionHandler2(player, collider) {
    collider.destroy();
}

function update() {

    game.physics.arcade.overlap(ship, enemies, collisionHandler1, null, this);
    game.physics.arcade.overlap(ship, rocks, collisionHandler2, null, this);

}


