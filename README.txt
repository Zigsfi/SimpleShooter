The SimpleShooter is a basic game in which the player,
a spaceship, is followed by enemies. There are three
main components to the game: the player, enemies with
which the player dies on contact, and rocks which fly
around the game. Though not specifically requested, I
made the rocks destroy the enemies because it made the
game more fun (it's one line of code, so removing it
or adding it back is very easy). 

The first change I made was abstracting out the ship,
mostly following the example set by the COMP23Examples
repository. The ship is prototyped on the Phaser.Sprite
class. I abstracted out the enemies by making a class to
extend Phaser.Group, and then made another class for the
elements of that group so that in game.js they can be
implemented simply by making a new instance of the
group object and passing it a number of enemies to create. 
Rocks are architected in an identical way. I added
functionality to make the enemies track the player and
to make the rocks bounce off of the game window and
destroy the enemies. 

Problems Encountered:
If using the .destroy() method to destroy objects,
the game gives an error since it attempts to
perform operations on the deleted object. This would
need to be fixed if adding and deleting new enemies/rocks
were to become frequent enough that it would eat up memory.

In the class declarations, for Rocks and Enemies, Phaser
throws an error when setting the constructor if the lines:
//////////
RockSpawner.prototype = Object.create(Phaser.Group.prototype);
RockSpawner.prototype.constructor = RockSpawner;
//////////
do not appear after the constructor function is made,
despite this working fine for the Ship class. I don't
really have any idea why this is, but it's functional 
as-is.

The overlap function in the physics engine sends arguments
to the collisionHandler in the order it receives them, except
it moves sprites to be before objects; this required the creation
of two collision handler functions, as the collisions needed
could not be reconciled with one function. 

In the classes which extend Phaser.Group, if in the update
function the 'super' update function:
//////////
Phaser.Group.prototype.update.apply(this, arguments);
//////////
isn't called, the child elements will not update.