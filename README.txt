                      README - Kevin Dorosh

By putting the scripts I wanted to include in index.html you can have one
.js file call the functions and use the objects of that file.

The order I included the scripts in index.html matters, since it must
load in such an order that as it loads the javascript, everything it
references has also been loaded at that time. That is why game.js
must be loaded last.

Creating functions like createShip(), createRocks(), and createEnemies()
in their own respective .js files makes the code easier to read, and
the logic easier to follow in game.js.

Arcade physics and game.physics.arcade.overlap() handles the collisions
of objects of different groups, and calls whatever function I want (the
function is a parameter in overlap() ), so implementing the 
ship/rock.kill() was trivial.

As a fun bonus, try to destroy all the moving rocks before a ship
gets to you. In a way, it's kind of its own small little game.
Challenging at first but there's a strategy/trick, and I have won.


                          END OF README