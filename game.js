
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var enemyGroup;
var enemy;
var rockGroup;
var rock;


function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock','rock.png');
}

function create() {
    //game.physics.enable(Phaser.Physics.ARCADE);
    //game.physics.startSystem(Phaser.Physics.ARCADE);

    // Spawn Enemy and Ship 
    ship = new Player(game, game.world.centerX, game.world.centerY); 
    enemy = new Enemy(game, 200, 200);

    // Creating groups of randomly placed rocks with physical body detection
    rockGroup = game.add.group();
    rockGroup.enableBody = true;
    for(var i = 0; i < 10; i++) {
        rock = rockGroup.create(Math.random() * boundsX, Math.random() * boundsY, 'rock'); 
        rock.scale.set(0.8, 0.8);
    };
}

function update() {
    game.physics.arcade.overlap(ship, enemy, killPlayer, null);
    game.physics.arcade.overlap(ship, rockGroup, killRock, null);

}

function killPlayer(player, enemy) {
    console.log("Collision detected");
    player.kill();
    //shutdown();
}

function killRock(player,rock) {
    console.log("Rock Collision");
    rock.kill();
}

