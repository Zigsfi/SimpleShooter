
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd;

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function collisionHandler(player, collider) {
    collider.collide();
}

function enemyCollision (player) {

    //  If the player collides with the chillis then they get eaten :)
    //  The chilli frame ID is 17

    ship.kill();
}

function create() {
//    ship = game.add.sprite(50, 50, 'ship');
////???
    game.physics.enable(Phaser.Physics.ARCADE);
    ship = new Player(game, game.world.centerX, game.world.centerY);

 //   ship.anchor.setTo(0.5, 0.5);
    this.cursors = game.input.keyboard.createCursorKeys();


    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };


///???
    enemies = game.add.group();
    viewGroup = game.add.group();
    for (var i = 0; i < 10; i ++) {
        var enemy = Enemy(enemies, 200 + i * 70, 200); 
    }

    rocks = game.add.group();
    viewGroup = game.add.group();
    for (var i = 0; i < 10; i ++) {
    //    var rock = Rock(rocks, 200 + i * 70, 300); 
        var rock = Rock(rocks, game.rnd.between(50, boundsX - 50), game.rnd.between(50, boundsY - 50));
    }

}

function update() {
    enemies.forEach(function(enemy) {
        enemy.angle++;
    });

    rocks.forEach(function(rock) {
        rock.angle += 0.3;
    });

    game.physics.arcade.overlap(ship, enemies, enemyCollision, null, this);
    game.physics.arcade.overlap(ship, rocks, collisionHandler, null, this);

//    var mX = game.input.mousePointer.x;
//    var mY = game.input.mousePointer.y;
    /* look at the mouse */
//    ship.angle = Math.atan2(ship.position.x - mX, ship.position.y - mY)  * -57.2957795;

/*
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
*/

}


