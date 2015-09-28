
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
    //enemy = game.add.sprite(50, 50, 'enemy');

    ship.anchor.setTo(0.5, 0.5);
    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    game.physics.enable(Phaser.Physics.ARCADE);

    enemies = game.add.group();
    viewGroup = game.add.group();
    //Add a number of enemies to the game
    for (var i = 0; i < 1; i++) {
        var enemy = Enemy(enemies, viewGroup, 200 + i, 200);
    }
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

    //  Checks to see if the player overlaps with any of the stars, if he does call the kill function
    //game.physics.arcade.overlap(ship, enemy, kill_player, null, this);

    enemies.forEach(function(group) {
        group.forEach(function(group) {
            game.physics.arcade.overlap(ship, group, collisionHandler, null, this);
        });
    });
}

function collisionHandler(player, collider) {
    collider.collide();
}

