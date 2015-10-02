Game: SimpleShooter
Updated by: Zach Zager

Files:
	index.html
	game.js
	player.js
	enemy.js


Changes:

I refactored the player and enemy code into their own files.
I did this by making more formal initializer functions for
both game elements. I also included relevant functions in
each file that related to the object at hand. I had a hard 
time making the enemy into a file for the entire group. 
I instead made the object for one enemy and created several 
of them in the game file. I implemented collision between 
the player and the enemies as well as the player and the 
"rocks"/pizza using the Phaser Arcade physics system. The
player dies upon impact by simply using the .kill() function
inherent in all sprites. The same method is used to get rid
of pizza/rocks that have been eaten.


Problems:
	- I attempted to create a separate file for the 
	  pizza/rocks but had a hard time with this.

	- I struggled with creating a group object for the
	  enemies that did what I wanted it to do, instead
	  opting to make a single sprite file and create
	  multiple instances of it in the game file. I don't
	  think this is what we were supposed to do, but it's
	  the only thing I could get to work.

	- Couldn't clear the "You Win!" text. If the enemies
	  catch the player after they win the "You Lose!" text
	  layers on top of the "You Win!" text.


Acknowledgements:
	Thanks to Arthur and Ming for all the sample code and help.
	Shout out to Alex Goldschmidt, Yotam Bentov, and Nick Flores
	for attempting to help me through this challenging lab.
	The Phaser website was also very helpful.
