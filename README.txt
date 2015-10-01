Maya Saxena
Comp 23
Lab 2

The first thing I did was move the ship code to the ship.js file. I was unsure
whether I should move the ship movement code to the ship file, but then I
decided that it was part of the ship and not relevant to the rest of the game.

I created the enemy.js file next and moved the enemy creation code to it as
well. The enemy doesn't really do anything, so it doesn't need an update
function. 

I then attempted to write the collision code and was initially unsuccessful
because I tried to use collide rather than overlap. After switching to
overlap, my collision handler worked and killed the ship on collision. 

Then I created the rock.js file, which is nearly identical to the enemy file
other than differing sprites and also a collision method that destroys the
rock on collide. This collide method couldn't be used on the ship because it
doesn't always get destroyed on collide. 

I added a rock to the game.js file and determined that collision was working,
so I decided to up the ante and add more rocks and enemies in random places. I
changed the collision code to overlap the enemy and rock groups. I wrote the
random location functions to vary the location of the rocks and enemies.