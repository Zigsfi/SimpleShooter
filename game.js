
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var wasd;

function preload (){
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    initializeShip();
    initializeEnemy();
    initializeRock();
}

function update() {
    game.physics.arcade.overlap(ship, enemy, killPlayer, null, this);
    game.physics.arcade.overlap(ship, rock, killRock, null, this);
    updateShip();
    updateEnemy();
}
