Alex Nguyen
COMP23 Lab #1
10/1/2015

First, to refactor the enemy and player code into their own files, I edited the
game.js file so that in their respective files, prototypes of each object were
made and they each had their own constructor and update functions. Enemies did 
not have their own update functions because they do not need to be updated, 
unlike ships which move according to the player's keys. Anything left in 
game.js was either used to actually construct the ship, enemies, and rocks, 
or were used to construct the game.

In order to produce collisions, a collisionHandler function was made in the
game.js file. In the game.js file's update function, it would then check to see
if the ship overlaps with the enemies or the rocks. If it overlaps with the 
rocks, then the rocks die. If it overlaps with the enemy, then the ship dies. 
Also, within the enemy and rock files, there was code written to determine what
would happen if the ships collide with them. This was to determine which of the
two would die in overlap. 

Finally, the new rocks object was very simple to implement. The code to add it 
was very similar to adding the code for the enemies. The only difference is that
rocks die on collision rather than the ship. Also, the rocks do not rotate. Once
all the js files were completed, they were add as script sources in the html 
file. 