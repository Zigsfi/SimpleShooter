Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

Rock.prototype.force = {x:0.0, y:0.0}; 

function Rock(game, group, x, y) {
    var rock = group.create(x, y, 'rock');
    rock.scale.setTo(0.3, 0.3);
    rock.anchor.setTo(0.5, 0.5);
    game.physics.enable(rock, Phaser.Physics.ARCADE);
    rock.body.allowRotation = false;
    rock.collide = function(ship) {
        rock.destroy();
    }
}
