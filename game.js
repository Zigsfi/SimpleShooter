
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'rocketship.png');
	game.load.image('rocks', 'rocks.png');
}

function create() {
	createShip();
	createRocks();
	createEnemies();
	game.physics.startSystem(Phaser.Physics.ARCADE);
}

function update() {
	moveShip();

	game.physics.arcade.overlap(ship, enemies, killShip, null, this);
	game.physics.arcade.overlap(ship, rocks, killRock, null, this);
	
	rocks.forEachExists(screenWrap, this);
	rocks.forEachExists(changePosition, this);
	if (ship.alive == true) {
		enemies.forEachExists(moveTowardPlayer, this, ship);
	}
}
