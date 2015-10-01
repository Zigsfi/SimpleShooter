README for Simple Shooter

	Updated by Jordan Kemp

	October 1, 2015
__________________________

List of Changes:

	-Refactored enemy and player codes into individual objects
		>Now treated as classes with individual characteristics
		>Enemies are now managed by a group called EnGroup
			-Given initial velocities and the ability to collide with and 
			 bounce off walls.
			-Enemies rotate to add intimidation factor.
			-Can now collide with the player
		>Player dies upon colliding with the enemy class.
	-Added rocks to the game
		>Also given own velocities
		>Added collisions with players
			-Destroys the rock
		>Managed by rock group, which behaves identically to EnGroup.