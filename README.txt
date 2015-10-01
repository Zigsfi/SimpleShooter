Greta Jochem 
Game Design
Simple Shooter Lab 
September 30th 

I refractered the enemy code into its own file, enemy.js, which has instructions for how to create an 
enemy and add it to the game. Similarily, I refractered the ship (or player as the lab called it) code into its own file. The ship's code is more complicated than the refractered enemy code. It contains instructions to make a ship, but also has an update function allowing the user to move the ship. It also has a collider function that takes handles situations in which the ship collides with either a rock or a enemy. In game.js, I have standard functions, preload, create, update, that control the game. In the update function, overlaps between different sprites are detected, and then sent to collision functions within that specific sprite that decide what to do. I also implemented a rock group with a collision function that causes it to 
die. 