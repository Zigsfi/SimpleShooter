var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;
var enemies;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
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
}

function collisionHandler(player, collider) {
    player.kill();
}
function update() {
    /* look at the mouse */
    game.physics.arcade.overlap(ship, enemies, collisionHandler, null, this);
}


