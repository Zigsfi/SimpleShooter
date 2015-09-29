
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var player;
var wasd;
function preload () {
    game.load.image('player', 'player.png');
    game.load.image('enemy', 'evil.png');
}

function create() {
    //player = game.add.sprite(50, 50, 'player');
    player = new Player(game, 50, 50);

    // player.anchor.setTo(0.5, 0.5);

    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}

function update() {
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
    player.angle = Math.atan2(player.position.x - mX, player.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        player.y -= 3;
    }
    if (wasd.down.isDown) {
        player.y += 3;
    }
    if (wasd.left.isDown) {
        player.x -= 3;
    }
    if (wasd.right.isDown) {
        player.x += 3;
    }

}


