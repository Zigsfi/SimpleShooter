Simple Shooter Lab
Trish O'Connor
Comp 23
10/1/15

1. Refactor the enemy and player code into their own files.

I did this by separating the relevant player and enemy code into ship.js and enemy.js. Those files contain the create (constructor) and update information for the ship and enemy sprites. The grouping of enemies occurs in game.js to keep the enemy.js file modular (can be used as individual enemy or incorporated into groups). Enemy movement uses the Smiley algorithm discussed in class.

2. Implement collision between the enemies and the player.

To do this, I had to make sure that physics was enabled for both the ship and the enemies. This line was added to the constructors for both sprites. Then in game.js's update function, the overlap function is called to check if any members of the enemy group overlap with the ship. If so, the function collisionEnemy is called and the ship is killed.

3. Implement a new object: rocks.

I added rocks by creating their own file, rock.js, which is similar to enemy.js and ship.js. However, since rocks are stationary, no update function is necessary and there is only a constructor. I also had to add a picture to the folder to use for the rocks. The picture came from http://www.clker.com/clipart-mr-rock.html. The rocks are added to a group and then placed randomly on the screen. I then implemented collision detection for the rocks using the overlap function in game.js's update function again. The only difference from the enemy collision is that collisionRock is called and the rock dies instead of the player.