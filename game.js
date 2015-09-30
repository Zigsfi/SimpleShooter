var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var enemies;
var rocks;
var wasd;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
	game.load.image('rock', 'rock.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	createPlayer();
	createEnemies();
	createRocks();
	
    this.cursors = game.input.keyboard.createCursorKeys();
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}

function update() {
	updatePlayer();
	updateEnemies();
	
	game.physics.arcade.overlap(ship, enemies, killPlayer, null, this);
	game.physics.arcade.overlap(ship, rocks, killRock, null, this);
}

