var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var wasd;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');   
}

function create() {
	setupEnemy();
	setupRock();
	game.physics.enable(Phaser.Physics.ARCADE);
    ship = new Ship(game, game.world.centerX, game.world.centerY);
}

function collisionHandler(player, collider) {
	collider.collide();
}

function update() {
    game.physics.arcade.overlap(ship, enemies, collisionHandler, null, this);
    updateShip();
    game.physics.arcade.overlap(ship, rocks, collisionHandler, null, this);
    updateEnemy();
}
