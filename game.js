<<<<<<< HEAD
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
=======

var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
}

function create() {
    ship = game.add.sprite(50, 50, 'ship');

    ship.anchor.setTo(0.5, 0.5);
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
    ship.angle = Math.atan2(ship.position.x - mX, ship.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        ship.y -= 3;
    }
    if (wasd.down.isDown) {
        ship.y += 3;
    }
    if (wasd.left.isDown) {
        ship.x -= 3;
    }
    if (wasd.right.isDown) {
        ship.x += 3;
    }

}


>>>>>>> 7f09b73f2dee1a721eb61479874c5af9578a8161
