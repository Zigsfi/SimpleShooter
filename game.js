
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function rockCollision(player, rocks) {
    rocks.collide();
}

function enemyCollision (player) {
    ship.kill();
}

function create() {

    game.physics.enable(Phaser.Physics.ARCADE);

    ship = new Player(game, game.world.centerX, game.world.centerY);
    ship.body.collideWorldBounds = true;

    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    enemies = game.add.group();
    for (var i = 0; i < 3; i ++) {
        var enemy = new Enemy(enemies, ship, 300 + i * 70, 100); 
    }

    rocks = game.add.group();
    for (var i = 0; i < 10; i++) {
        var rock = new Rock(rocks, game.rnd.between(50, boundsX - 50), game.rnd.between(50, boundsY - 50));
    }
}

function update() {

    game.physics.arcade.overlap(ship, enemies, enemyCollision, null, this);
    game.physics.arcade.overlap(ship, rocks, rockCollision, null, this);
}


