var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;
var enemies;
var rocks;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    ship = new Ship(game, 450, 450);
    enemies = new EnemySpawner(game, 50, 50, 20);
    rocks = new RockSpawner(game, 200, 200, 2);


}

function update() {
    /* 
     * Overlap is used instead of collide so objects are destroyed without sending game 
     * pieces flying off into space
    */
    game.physics.arcade.overlap(ship, enemies, collisionHandler, null, this);
    /* 
     * The rocks need to be destroyed on collision with the ship, but the collision
     * handler is sent the arguments with sprites listed before groups. This would
     * be fine, except that for the enemies to destroy the ship the collision handler
     * needs to destroy the first argument, while this needs to destroy the second,
     * and switching the arguments around is not possible because Phaser silently
     * switches them. Anyway, there are two collision handlers for this reason.  
     */
    game.physics.arcade.overlap(ship, rocks, collisionHandlerReverse, null, this);
    game.physics.arcade.overlap(enemies, rocks, collisionHandler, null, this);

}

function collisionHandler(toDestroy, toKeep) {
    toDestroy.collide();
}

function collisionHandlerReverse(toKeep, toDestroy) {
    toDestroy.collide();
}