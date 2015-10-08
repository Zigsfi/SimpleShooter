
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var enemies;
var rock;
var wasd;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    ship = game.add.sprite(50, 50, 'ship');
    game.physics.enable(ship, Phaser.Physics.ARCADE);
    ship.anchor.setTo(0.5, 0.5);    
    rock = game.add.sprite(300, 300, 'rock');
    game.physics.enable(rock, Phaser.Physics.ARCADE);
    rock.scale.setTo(.1, .1);
    enemies = game.add.group();
    createEnemy(enemies);
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
    game.physics.arcade.overlap(ship, enemies, kill, null, this);
    game.physics.arcade.overlap(rock, ship, kill, null, this);

}