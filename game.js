var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var enemies;
var numEnemies = 3;
var enemyMargin = 100;

var rocks;
var numRocks = 10;
var rockMargin = 50;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    ship = new Ship(game, 50, 50);

    enemies = game.add.group();
    // Adds numEnemies to random locations within margin in world
    for (var i = 0; i < numEnemies; i++) {
        enemies.add(new Enemy(game, getRandomX(enemyMargin), getRandomY(enemyMargin)));
    }

    rocks = game.add.group();
    // Adds numRocks to random locations within margin in world
    for (var i = 0; i < numRocks; i++) {
        rocks.add(new Rock(game, getRandomX(rockMargin), getRandomY(rockMargin)));
    }
}

function update() {
    game.physics.arcade.overlap(ship, enemies, collideShipWithEnemy);
    game.physics.arcade.overlap(ship, rocks, collideShipWithRock);
}

function collideShipWithEnemy() {
    ship.kill();
}

function collideShipWithRock(ship, rocks) {
    rocks.collide();
}

function getRandomX(margin) {
    return Math.random() * (boundsX - margin * 2) + margin;
}

function getRandomY(margin) {
    return Math.random() * (boundsY - margin * 2) + margin;
}
