This is the README for the COMP23 - Game Development lab due on 10/1/15.

Title: SimpleShooter
Created by: Jacob Caccamo
Date: 9/29/15

The following changes have been made to SimpleShooter:

	Enemy and player (ship) code have been refactored into their own files, thus cleaning up the directory.

	A "Rock" group has been added to the game. This has been accomplished by creating a new rock object, similar to the enemy object.

	Collision handling was accomplished using the game's update loop, checking periodically for overlaps between objects. Collisions are fully functional in the following ways:

		The player is detroyed on collision with any enemy. 

		Rocks are destroyed on collision with the player.

The changes implemented above make SimpleShooter a richer and more interactive experience for players. Please consider implementing these changes into the source.