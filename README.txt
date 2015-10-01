    README.txt
Assignment:    Comp23 LAB 2
By:            Alena Borisenko
Last Edit:     Oct 1, 2015

Changes:

1. "Refactor the enemy and player code into their own files."

    Using 23Examples as a guide moved everything that has to deal with 
    enemy/rock object settings to separare files. 
    Not sure if that's how it was supposed to be done, but I put the 
    update() functions for each inside the constructor using 
    collide() as a reference. 


2. "Implement collision between enemies and player. Player dies on impact."

    Checked for collision between the two via game.physics.arcade.overlap.
    Changed collisionHandle to enemyCollision. Inside this new function
    I "kill" the player sprite and the user needs to refresh the page
    in order to start again. 

3. "Implement a new object: rocks. Rocks die on collision with the ship."

    Pretty much recycled the code for Enemy in order to create the new
    object Rock, but with a different update() function. 
    Again, using game.physics.arcade.overlap I check for collision and
    apply rockCollision, which in turn uses the collision() function
    of Rock to destroy the specific rock. 

4.  Made the rocks spawn at random positions within the game bounds. 
   [Note: Might be a good idea to do that in their own file] 

5.  Made the player/ship collide with screen bounds so it is always visible.