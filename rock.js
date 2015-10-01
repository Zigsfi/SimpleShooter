Rock.prototype = Object.create(Phaser.Sprite.prototype);

Rock.prototype.constructor = Rock;

Rock.prototype.force = {x:0.0, y:0.0};

function Rock(group, x, y) {
    var rock = group.create(0, 0, 'rock');
    rock.enableBody = true;
    rock.position.x = x;
    rock.position.y = y;
    rock.scale.setTo(0.15, 0.15);
    rock.anchor.setTo(0.5, 0.5);
    rock.body.immovable = true;
    rock.body.collideWorldBounds = true;
    rock.body.checkCollision.up = true;
    rock.body.checkCollision.down = true;


    game.physics.enable(rock, Phaser.Physics.ARCADE);
    rock.collide = function() {
        this.destroy();
    };
}

Rock.collisionHandler = function(player, collider) {
    Ship (game, 50, 50);
    rock.collide();
}