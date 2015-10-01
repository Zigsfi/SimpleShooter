Changes:
1. Moved the player to an individual file. Player barely interacts with game.js anymore; the only thing the game does is create the player and let it run by itself
2. Created an enemy group and gave it an individual file.
3. Managed collision handling in the update function of the main game
4. Created rocks, which appear randomly on the screen and apparently don't do anything very interesting. Since the player destroys them if they're hit, the player can completely ignore them.