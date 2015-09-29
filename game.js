
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var player;
// var wasd;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
}

function create() {
    //player = game.add.sprite(50, 50, 'player');
    player = new Player(game, 50, 50);

    // player.anchor.setTo(0.5, 0.5);

    // this.cursors = game.input.keyboard.createCursorKeys();

    // wasd = {
    //     up: game.input.keyboard.addKey(Phaser.Keyboard.W),
    //     down: game.input.keyboard.addKey(Phaser.Keyboard.S),
    //     left: game.input.keyboard.addKey(Phaser.Keyboard.A),
    //     right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    // };
}

function update() {

}

function render() {
    game.debug.body(player);
}


