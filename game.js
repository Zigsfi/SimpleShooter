
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});
var player;
var enemy;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {

    game.physics.enable(Phaser.Physics.ARCADE);

    player = new Player(game);
    player.createShip();
    player.createInput();

    enemy = new Enemy(game);
    enemy.create();

    rocks = new Rocks(game);
    rocks.create();
}

function update() {
    player.update();
    game.physics.arcade.overlap(player.ship, enemy.enemy, destroyPlayer, null, this);
    game.physics.arcade.overlap(player.ship, rocks.rocks, destroyRocks, null, this);
}

function destroyPlayer(player, enemy) {
    player.destroy();
}

function destroyRocks(player, rocks) {
    rocks.destroy();
}
