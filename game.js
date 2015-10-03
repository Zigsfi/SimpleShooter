var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var enemy;
var rock;
var wasd;

function preload () {
    game.load.image('ship', 'sprites/ship.png');
    game.load.image('enemy', 'sprites/evil.png');
    game.load.image('rock', 'sprites/rock.png');

}

function create() {

    ship = new Ship(game, 800, 600);

    enemy = new Enemy(game, 100, 100);

    rock = new Rock(game, 400, 300);


    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}


function update() {

}



