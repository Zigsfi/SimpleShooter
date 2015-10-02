// Please run this in Chrome

class Player {

    constructor(game) {
        this.game = game;
    }

    createShip() {
        this.ship = this.game.add.sprite(50, 50, 'ship');
        this.ship.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this.ship, Phaser.Physics.ARCADE);
    }

    createInput() {
        this.wasd = {
            up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
        };
    }

    update() {

        var mX = this.game.input.mousePointer.x;
        var mY = this.game.input.mousePointer.y;

        /* look at the mouse */
        this.ship.angle = Math.atan2(this.ship.position.x - mX, this.ship.position.y - mY)  * -57.2957795;

        if (this.wasd.up.isDown) {
            this.ship.y -= 3;
        }
        if (this.wasd.down.isDown) {
            this.ship.y += 3;
        }
        if (this.wasd.left.isDown) {
            this.ship.x -= 3;
        }
        if (this.wasd.right.isDown) {
            this.ship.x += 3;
        }
    }

}