Enemy.prototype = Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.force = {x:0.0, y:0.0};

function Enemy(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'ship');
    enemy.position.x = x;
    enemy.position.y = y;
    enemy.scale.setTo(0.05, 0.05);
    enemy.anchor.setTo(0.5, 0.5);

    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.collide = function() {
        this.destroy();
    };
}

function collisionHandler(player, collider) {
    collider.collide();
}

function create() {
    game.physics.enable(Phaser.Physics.ARCADE);
    ship = new Ship(game, game.world.centerX, game.world.centerY); 

    enemies = game.add.group();
    viewGroup = game.add.group();
    for (var i = 0; i < 10; i ++) {
        var enemy = Enemy(enemies, 200 + i * 70, 200); 
    }
    game.add.sprite(200, 200, 'laser');
}

function update() {
    enemies.forEach(function(enemy) {
        enemy.angle++;
    });


    game.physics.arcade.overlap(ship, enemies, collisionHandler, null, this);
}
function render() {

}