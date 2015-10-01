Eliza Schreibman
10-1-15
Comp 23 Lab 2

My first step in implementing the changes was to get the game to work within one
file by looking at the example game posted to piazza. Once I got the ship to
spin and move correctly, I got enemies to spawn at semi random places along the
screen. The next step was to simply move any code that was relevant to the
enemy group into its own file. I again looked at examples online to see what
functions needed to be called to connect the files; for example, I needed to
load the script for the enemy file in the preload for the game file. I then
also decided to add a bit of randomization to the changing enemy angle (just
for fun). Making collisions register was relatively easy (simply calling the
overlap function on two groups or objects that have arcade physics enabled), but
figuring out how to kill "enemy" children and not the group itself took some
research. I decided to implement a simple loop that checked every child in the
enemy group for collision, and if they had collided with the ship they were killed.
I used this exact same implementation for the rocks. I tried to make a rock.png
image, but for some reason I could not get Phaser to load it, so I used some
included view.png instead. 
