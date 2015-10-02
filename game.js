
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var enemies;
var wasd;

function preload () {
    // Add all images
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
}

function create() {
    // Enable physics
    game.physics.enable(Phaser.Physics.ARCADE);
    
    // Add ship sprite to center of screen
    ship = new Ship(game, game.world.centerX, game.world.centerY);
    // Create group for the enemy variables
    enemies = game.add.group();
 
    // Add actual enemies to group
    for(var i = 0; i < 7; i++) {
        var e = new Enemy(game, 200 + i *70, 50);
        enemies.add(e);
    }
    
    // controls
    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
}

function update() {
    //ship and enemy updates automatically called here
    //check for collisions
    game.physics.arcade.overlap(ship, enemies, collisionEnemy, null, this);
}


function collisionEnemy(player, collider) {
    player.kill();
}



function render(){
    game.debug.body(ship);

}


