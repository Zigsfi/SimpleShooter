
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;
function preload () {
        game.load.image('ship', 'assets/ship.png');
        game.load.image('enemy', 'assets/evil.png');
        game.load.image('rock', 'assets/rock.png');
}

function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        player = new playerLogic(game, game.world.centerX, game.world.centerY);
        enemy = new enemy(game,100,100);
        rock = new rock(game,4,300);
}

function update() {
        player.update();
        enemy.update();
        rock.update();
}
