
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;
var enemies;
var rocks;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png')
}

function create() {

    ship = add_player(ship);
    
    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    game.physics.enable(Phaser.Physics.ARCADE);

    //Enemies
    enemies = game.add.group();
    //Add a number of enemies to the game
    for (var i = 0; i < 3; i++) {
        var enemy = Enemy(enemies, 400 + i*80, 100);
    }

    //Rocks
    rocks = game.add.group();
    //Add a number of rocks to the game
    for (var i = 0; i < 3; i++) {
        var rock = Rock(rocks, 250 + i*100, 250 + i*3);
    }
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

    //Checking for collisions
    enemies.forEach(function(enemy) {
        game.physics.arcade.overlap(ship, enemy, destroy_player, null, this);
    });

    rocks.forEach(function(rock) {
        game.physics.arcade.overlap(ship, rock, cH, null, this);
    });
}

function cH(player, collider) {
    collider.collide();
}

