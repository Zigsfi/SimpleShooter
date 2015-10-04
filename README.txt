game.js' create funciton initializes game physics and then calls initialization functions for the ship, the enemy, and the rocks

game.js' update function calls update functions of ship, enemy, and rocks

All code associated with ship prototype put in its own file. 
All code associated with enemy prototype put in its own file.

Created separate rocks.js file creating rock prototype and the initializeRock, updateRock, and killRock functions

Called overlap collision functions in player.js and rocks.js based on the collectStar() function from the phaser tutorial.

Also, enemies pursue the noble ship.
Unfortunately, the game still freezes after a few frames.
Still, it almost works.
Go team!