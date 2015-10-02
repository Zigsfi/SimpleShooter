// Please run this in Chrome

class Enemy {

    constructor(game) {
        this.game = game;
    }

    create() {
        this.enemy = this.game.add.sprite(600, 300, 'enemy');
        this.enemy.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
    }

}