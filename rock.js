// rock.js
// SimpleShooter rock file

Rock.prototype = Object.create(Phaser.Sprite.prototype);
Rock.prototype.constructor = Rock;
Rock.prototype.force = {x:0.0, y:0.0};

var rock;

function Rock(group, x, y) {

    //Phaser.Sprite.call(this, game, x, y, 'rock');
    var rockGroup = game.add.group();
    rockGroup.position.x = x;
    rockGroup.position.y = y;

    rock = rockGroup.create(0, 0, 'rock');
    game.physics.arcade.enable(rock);
    rock.scale.setTo(0.15,0.15);

    //game.add.existing(this);

    group.add(rockGroup);

}

Rock.prototype.update = function() {


}

function killRock(player, enemy) {

    kill.rock();

}