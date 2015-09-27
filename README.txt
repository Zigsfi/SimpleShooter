The code that controls the player was moved into its own functions in "player.js" that are called by "game.js". Similarly, the code for the enemies was written in enemy.js.

Rocks were implemented in rocks.js by adding an additional group to the game and treating them much the same as the enemies- in fact, their spawn functions are very similar.

To implement collision, I enabled physics for the enemies, rocks, and players, and tested for overlap to destroy rocks on collision with the player and the player on collision with the enemies.