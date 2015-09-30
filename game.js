
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var player;
var enemy;
// var wasd;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
}

function create() {
    player = new Player(game, 500, 500);
    enemy = new Enemy(game, 50, 50);
}

function collisionHandler(player, collider) {
    player.collide();
}

function update() {
    game.physics.arcade.overlap(player, enemy, collisionHandler, null, this);
}
