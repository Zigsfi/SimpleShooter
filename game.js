var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;
var enemies;
var rocks;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    game.physics.enable(Phaser.Physics.ARCADE);
    ship = new Ship(game, game.world.centerX, game.world.centerY); 

    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    enemies = game.add.group();
    for (var i = 0; i < 5; i++) {
        var en = new Enemy(game, 200 + i * 70, 400);
        enemies.add(en);
    }
    rocks = game.add.group();
    for (var j = 0; j < 7; j++) {
        console.log('rocks');
        var r = new Rock(game, 300, 100 + j * 70);
        rocks.add(r);
    }
}

function collisionEnemy(player, collider) {
    player.kill();
}
function collisionRock(player, collider) {
    collider.kill();
}
function update() {
    /* look at the mouse */
    game.physics.arcade.overlap(ship, enemies, collisionEnemy, null, this);
    game.physics.arcade.overlap(ship, rocks, collisionRock, null, this);
}


