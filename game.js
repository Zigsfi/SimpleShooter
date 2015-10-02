// game.js
// SimpleShooter game file

var boundsX = 1000, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game",
                    {preload:preload, update:update, create:create});

var player;
var rocks;
var rockGroup;

var score = 0;
var scoreText;
var gameEnd;

function preload () {
    game.load.image('space', 'Deep-Space.jpg');
    game.load.image('cat', 'spaceship.png');
    game.load.image('enemy', 'goomba.png');
    game.load.image('rock', 'pizza.png');
}

function create() {

    game.physics.enable(Phaser.Physics.ARCADE); // start physics

    // spacey background
    game.add.tileSprite(0, 0, game.width, game.height, 'space');

    //  The score
    scoreText = game.add.text(16, 16, 'score: ' + score, 
                        { fontSize: '32px', fill: '#ffffff' });

    // add player
    player = new Player(game, game.world.centerX, game.world.centerY); 
    
    // Make enemies (goombas)
    enemy1 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy2 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy3 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy4 = new Enemy(game, game.world.randomX, game.world.randomY);
    enemy5 = new Enemy(game, game.world.randomX, game.world.randomY);

    // group for the rock objects
    rockGroup = game.add.group();

    // Make 5 rocks
    for (var i = 0; i < 5; i++) {
        rock = rockGroup.create(game.world.randomX, game.world.randomY, 'rock');
        rock.scale.setTo(0.1,0.1);
        game.physics.enable(rock, Phaser.Physics.ARCADE);
    }

}

function update() {

    // collision detection (player and rock objects)
    game.physics.arcade.overlap(player, rockGroup, killRock, null, this);

    // checks if all rocks have been collected
    if (score === 50) {
        win();
    }
}

// kills the rock and adds to your score
function killRock(player, collider) {

    collider.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}

// Lose situations
function losing() {

    //  You Lose!
    gameEnd = game.add.text(300, 250, 'You Lose!', 
                        { fontSize: '100px', fill: '#ffffff' });
}

// Win situations
function win() {
    //  You Win!
    gameEnd = game.add.text(300, 250, 'You Win!', 
                        { fontSize: '100px', fill: '#ffffff' });
}