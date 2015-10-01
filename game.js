
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.CANVAS, "game", {preload:preload, update:update, create:create});

var MAX_SPEED = 5;
var max_rocks = 10;
var ship;
var wasd;
var enemy;
var rocks;
function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    game.physics.enable(Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    ship = new Player(game, game.world.centerX, game.world.centerY); 
    game.physics.arcade.enable(ship);

    var enemy = new Enemy(game, 270, 200);
    game.physics.arcade.enable(enemy);

    rocks = game.add.group();
    rocks.enableBody = true;
    for(var i = 0; i < max_rocks; i++) {
        var rock = rocks.create(Math.random() * 800, Math.random() * 500, 'rock'); 
        rock.scale.set(0.4, 0.4);
    };
}

function killRock(player, rock) {
    rock.kill();
}

function killPlayer(ship, enemy) {
    ship.kill();
}

function update() {
}

function render() {

}

