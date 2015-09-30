First I needed to write the code for creating and controlling the logic of the enemies. 
In this case I made them point at and follow the player’s ship. 
To do that, I created a file named enemy.js and added the script to index.html. 
Enemy.js contains functions that create, move, and change direction of the enemies. 
The create and update functions in enemy.js are called by those in game.js. 
A similar structure was used for player.js and rock.js. 
Each file contains the corresponding create, move, change direction, and kill functions to modify the objects. 
Just like enemy.js, the create and update functions for player.js and rock.js are called from game.js. 
