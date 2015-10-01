
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.CANVAS, "game", {preload:preload, update:update, create:create});
var counter = 0;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    ship = new Ship(game, 666, 400);
    enemy = new Enemy(game, 50, 50);

    this.cursors = game.input.keyboard.createCursorKeys();

}

function update() {
    counter++;
    if (counter == 30) {
        counter = 0;
        rock = new Rock(game, Math.random() * -300, Math.random() * -400);
    }
}


