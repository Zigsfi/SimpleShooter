
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var player;
// var wasd;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
}

function create() {
    player = new Player(game, 50, 50);
}

function update() {

}

// function render() {
//     game.debug.body(player);
// }


