RockSpawner = function(game, x, y, num) {
    Phaser.Group.call(this, game);
    this.classType = Rock;

    for (var i = 1; i <= num; i++) {
        /* Rocks are placed at 300, 300, with velocity towards the top left */
        var rock = new Rock(game, 300, 300, i * -50, i * -50);
        this.add(rock);
    }

};

RockSpawner.prototype = Object.create(Phaser.Group.prototype);

RockSpawner.prototype.constructor = RockSpawner;

RockSpawner.prototype.update = function () {
        Phaser.Group.prototype.update.apply(this, arguments);
};