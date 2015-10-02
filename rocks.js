// Please run this in Chrome

class Rocks {

    constructor(game) {
        this.game = game;
    }

    create() {
        this.rocks = this.game.add.group();
        this.rocks.create(100, 200, "rock")
        this.rocks.create(100, 400, "rock")
        this.game.physics.enable(this.rocks, Phaser.Physics.ARCADE);
    }

}