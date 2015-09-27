
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});



var ship;
var wasd;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'Asteroid.png');
}

function create() {
    enemies = game.add.group();
    enemies.enableBody = true;
    addEnemies(3, enemies);

    rocks = game.add.group();
    addRocks(3, rocks);

    ship(game.world.width/2, game.world.height/2);

    this.cursors = game.input.keyboard.createCursorKeys();

//    enemies.forEach(function(enemy){
//        enemy.update();
//    }, this);

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}

function update() {
    movePlayer(wasd);
    game.physics.arcade.overlap(ship, enemies, enemyHit, null, this);
    game.physics.arcade.overlap(ship, rocks, hitRock, null, this);
    game.physics.arcade.collide(rocks, rocks);
    game.physics.arcade.collide(rocks, enemies);
    game.physics.arcade.collide(enemies, enemies);
}


