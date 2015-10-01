README

Assignment – Simple Shooter, COMP 23
Name – Jason Brillon

For this assignment, I moved all of the code about the player (ship) out of the
main game file and into its own file. This way, it can be reused for other
games if need be. I also created a new file for the enemy, which also has that
application of modular reuse.
Both the Player and the Enemy have their own update functions, which handle
most of the functionality of the game (movement, collision, etc.).
Because the rocks I made do very little, I decided to leave them inside the
main game file. Also left in the main game file is the create function – which
instantiates the player, enemy, and some number of rocks (I chose ten, but the
global variable can be set to any desired number) – and any function that
relates to multiple classes (i.e. kill functions).