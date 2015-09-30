EnemySpawner = function(game, x, y, num) {
    Phaser.Group.call(this, game);
    this.classType = Enemy;

    for (var i = 1; i <= num; i++) {
        /* New enemies are placed in a tilted line across the top of the game */
        var enemy = new Enemy(game, i * x % game.width, y + y * i * x / game.width);
        this.add(enemy);
    }

};

EnemySpawner.prototype = Object.create(Phaser.Group.prototype);

EnemySpawner.prototype.constructor = EnemySpawner;

EnemySpawner.prototype.update = function () {
        Phaser.Group.prototype.update.apply(this, arguments);
};