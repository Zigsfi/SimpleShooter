
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    ship = new Ship(game, game.world.centerX, game.world.centerY);
    enemies = game.add.group();
    rocks = game.add.group();
    enemies.enableBody = true;
    rocks.enableBody = true;
    for (var i = 0;i<4;i++){
        var enemy = Enemy(enemies, 200 + i*50, 300);
        var rock = rocks.create(100 + 40*Math.Random(), 200 + 50*Math.Random(), 'rock');
    }
}

function update() {
    game.physics.arcade.collide(ship, enemies);
    game.physics.arcade.collide(ship, rocks);
    game.physics.arcade.overlap(ship, enemies, shipDeath, null, this);
    game.physics.arcade.overlap(ship, rocks, destroyRock, null, this);

}

function shipDeath(ship, enemy) {
    ship.kill();
    game.shutdown();
}

function destroyRock(ship, rock) {
    rock.kill();
}