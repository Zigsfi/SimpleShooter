playerLogic.prototype = Object.create(Phaser.Sprite.prototype);
playerLogic.prototype.constructor = playerLogic;


function playerLogic (game, x,y){
        Phaser.Sprite.call(this, game, x, y, 'ship');
        this.anchor.setTo(.5,.5);
        game.physics.arcade.enable(this);
        game.add.existing(this);

        this.cursors = game.input.keyboard.createCursorKeys();
        wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D),
        };
}

playerLogic.prototype.update = function () {
        var mX = game.input.mousePointer.x;
        var mY = game.input.mousePointer.y;
        /* look at the mouse */
        player.angle = Math.atan2(player.position.x - mX, player.position.y - mY)  * -57.2957795;

        if (wasd.up.isDown) {
            player.y -= 3;
        }
        if (wasd.down.isDown) {
            player.y += 3;
        }
        if (wasd.left.isDown) {
            player.x -= 3;
        }
        if (wasd.right.isDown) {
            player.x += 3;
        }
        game.physics.arcade.overlap(player, enemies, player.die, null, this);
}

playerLogic.prototype.die = function () {
        player.kill();
}
