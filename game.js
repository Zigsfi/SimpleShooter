
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});

var ship;
var wasd; 
var enemy;

function Rock(group, viewGroup, x, y) {
    var rock = group.create(0, 0, 'rock');
    rock.position.x = x;
    rock.position.y = y; 
    
    rock.scale.setTo(0.10, 0.10); //resize png
    rock.anchor.setTo(0.5, 0.5);  

    game.physics.enable(rock, Phaser.Physics.ARCADE); 

  
    //tell rocks how to handle colissions 
    rock.collide = function ( ) {
        //rock is destoyed when collides with something 
        this.destroy( ); 
    };
}

function preload () {
    game.load.image('ship', 'ship.png');
    game.load.image('enemy', 'evil.png');
    game.load.image('rock', 'rock.png');
}

function create() {
    //enable arcade physics 
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //adding instance of ship in at center
    ship = new Ship (game, game.world.centerX, game.world.centerY); 
    enemy = new Enemy (game, 50, 50); 

    rocks = game.add.group ();
    viewGroup = game.add.group(); 
    for ( var i = 0; i < 10; i++) {
            var rock = Rock(rocks, viewGroup, 80*i, 400); 
   }    
    
}

function update() {
    //rocks hit ship
    game.physics.arcade.overlap(ship, rocks, collisionHandler1, null, this); 
    //enemy hit ships
    game.physics.arcade.overlap(enemy, ship, ship.collisionHandler2, null, this); 
}

//how rock handles colissions
function collisionHandler1 (ship, collider) {
    collider.collide(); 
}

