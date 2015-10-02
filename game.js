
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});


function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    newShip();
    newEnemy();
    newRock();

}

function update() {
    
    game.physics.arcade.overlap(rock, ship, rock_ship_collision, null, this);
    game.physics.arcade.overlap(ship, enemy, ship_enemy_collision, null, this); 

    updateEnemy();
    updateShip();

}


