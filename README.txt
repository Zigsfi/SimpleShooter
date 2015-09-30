README.txt

Lab 2: SimpleShooter
Lydia Pezzullo

IMAGE CREDIT FOR ROCKS: Cut from
"2d Lost Garden Zelda style tiles resized to 32x32 with additions"
by Daniel Cook, Jetrel, Saphy (TMW), Zabin, Bertram
Found at: http://opengameart.org/content/2d-lost-garden-zelda-style-tiles-resized-to-32x32-with-additions
License: CC BY 3.0 http://creativecommons.org/licenses/by/3.0/

*Note: Tragically, my collision doesn't work, and I ran out of time to fix it!

First, I used the example code to create basic files for the player and enemy (player.js, enemy.js). Then I wrote a constructor for the player and changed the create function in game.js to use that constructor. I made the ship move by essentially cutting the movement code out of game.js and moving it to player.js.

Next, I copied the player.js code, refactored Player to Enemy and got rid of the movement code. Then I had the Enemy turn toward the player by modifying the same code that made the player ship turn toward the mouse - instead of taking the mouse pointer's x and y coordinates, I took the player's coordinates, and used those to calculate the appropriate angle. After that, I used the MoveToObjects method to have the enemy move toward the player and tweaked the speed to make it easier to run away from.

Once I had created the enemy and player, I enabled collisions by putting a collide method into the player create function. Then I copied the collisionHandler function and the call to overlap from the example code. I modified collisionHandler to take the updated names for the player and enemy, and to call the collider on the player, so that the player dies (not the enemy). I then modified the enemy's update function so that once the player is dead, it stops moving, rather than spinning in a circle.

Finally, I created the rocks.js file, and initially copied the Enemy code. Then I refactored Enemy to Rock, creating a prototype for a single rock sprite with the image credited above. First I placed code in game.js to create one rock and enable working collisions. Then I created a group in create() which then created five rocks in a row, and used enableBody and enabled arcade physics for the rocks group to (hopefully) make the rocks behave according to arcade physics. I also added a call to overlap for the rocks, and generalized the syntax of the collisionHandler to call any collider (including the one I had made for the rocks group); however, this does not appear to work - the player flies right underneath the rocks with no change.


