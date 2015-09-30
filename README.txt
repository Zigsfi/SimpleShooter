Comp 23
Lab 1
Kenny Crowell

	In order to put the ship and enemies into different files I create a prototype for each of them and put their constructors in their respective files. Then from the main file I can create a new object for either the ship, enemy, or rock. For the collisions I gave both the rocks and enemies a collision function that was called whenever the player collided with that object. When the player collided with an enemy the player was destroyed, but when it collided with a rock the rock was destroyed instead.