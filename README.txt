Comp 23 Lab 2 Readme
John Gallagher
10/01/2015

Changes Made:
        1. Moved ship code into ship.js:
                This was done by moving any ship related code from game.js' create(); function to ship.js' constructor (playerLogic).
                Any ship related code from game.js' update(); function was moved into playerLogic.update.
                game.js now calls the ship/player constructor and player.update(); to achieve the same functionality as before.

        2. Moved / implemented enemy code:
                Created an enemy prototype with a constructor that creates a group of enemy sprites and places them at intervals.

        3. Checked for overlap between enemies and ship:
                Added code to playerLogic.update to check for collisions between the player sprite and any sprites in the enemies group.
                Added a function that is called if such a collision occurs that kills the player sprite.

        4. Added rocks:
                Added a file called rock.js with a constructor that creates a group of three rocks and places them at intervals.
                Obtained rock art from http://opengameart.org/content/boulder
                Also added code to rock.update that checks for collisions between player(ship) and rocks.
                If there player collides with a rock ALL ROCKS DIE - this is a bug.

        5. Reorganized project
                Moved all javascript files into a folder called "js".
                Moved all images into a folder called "assets". 
