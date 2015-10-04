
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});


function preload() {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    game.physics.enable(Phaser.Physics.ARCADE);
    initializeShip();
    initializeEnemy();
    initializeRock();
}

function update() {
    updateEnemy();
    updateRock();
}
