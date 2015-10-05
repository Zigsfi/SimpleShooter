Nick Flores
10/1/15
COMP23
Lab 2-SimpleShooter

Modularization:
The first part of this lab, refractoring the functions in game.js to create 
new files for enemy/ship/rock, was rather simple. I simply created a "setup"
function for each of my objects and called those functinos in my create functino
in game.js. The same method applied with the update function, with the exception
that update functions for each object vary in what the object is suppose to do.
Ship.js became a prototype so it didn't need a setup function and the rock was 
stagnant so it didn't need an update function.

Collision:
The collision apsect was definitely the most challenging. While I got my object
interactions to occur, I couldn't figure out how to make the player destroy.
Instead, all my collisions resulted in destroying what the ship ran into.

Rocks:
Implementing the new rock object wasn't so bad. I only gave it one simple
setup function, which creates a group of rocks (called 'rocks'), places it on
the map, and then calls the rock collide function.

Enemy:
I had to change around the enemy class a bit, and still couldn't get it to work
propperly. I took off the enemy tracking and just made it spin instead
(it was easier to work that way). I made the collision interaction with the ship
apparent but the ship would never be destroyed. AKA my ship is invincible and
gobbles up everything muahahah.

Conclusion:
I kinda rushed through this lab but most certainly absorded the gist of it.
When it comes to building my game, I'll be making sure everything interacts
accordingly.

PS: Feel free to grade this lab as is, but I'll most likely be coming to office
hours tomorrow for some clarification. Thanks Arthur!