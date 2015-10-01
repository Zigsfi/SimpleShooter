
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

//variables we will use
var ship;
var enemies;
var rock;
var wasd;
function preload () {
    //images for the sprites
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    //adds the cursor as a input
    this.cursors = game.input.keyboard.createCursorKeys();

    //uses the keyboard as input
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    //creates the enemy, ship, and rock objects
    enemies = new EnGroup(game, 40, 100, 6);
    ship = new Ship(game, 300, 300);
    rock = new RoGroup(game, 30, 50, 8);

}

function update() {
    //allows collisions ship and enemies, and ship and rocks
    game.physics.arcade.overlap(ship, enemies, collisionHandler, null, this);
    game.physics.arcade.overlap(ship, rock, Rockcollide, null, this);
}

//result of player/enemy collision
function collisionHandler(player, enemy) {
       player.collide();
}

//result of player/rock collision
function Rockcollide(player, rock){
    rock.collide();
}
