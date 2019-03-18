# mgm-grand-street
Boxing Game MGM Grand Street

J Query Fighter Game Psuedo Code

Screen loads.. player sees borderless css grid container with characters.  The middle row div will be battle area.
Characters will be objects. Object attributes: Health Points, Attack Power, and Counter Attack Power.
On hover each character player card will flip over to show attributes.  
Once selected the player enters the battle area.  The enemies enter the defender area, a flex box container (justify content at space between, and margin auto).  
Once enemy is selected the remainding will always be shifted center and space between display.

New display will show two fighters in the boxing ring.  Each fighter will have health points bar underneath photo.  
HP bar will start green.  It will turn light green at 75%, yellow at 50% and red at 25%.  Bar will start at 100% width and decrease as HP decreases in realationship with starting HP.

Once players are in the ring, the user will be able to press button shaped like a boxing glove that will resize on mouse down and go bak to original size on mouse up.
Game Play
Mouse up or on click event will trigger function that initializes:
Player attack
Opponent HP adjustment
HP bar adjustment
Counter attack from opponent
Player HP adjustment
HP progress bar adjustment.
Player attack power += attack power
Show attack power adjustment
If player HP = 0 end game.
One of two random mesages will appear:
You beat your opponent by knockout (or decision), select your next opponent.
Opponent selects next opponent and after selection defeated opponent is sent back to the oppoonent div (far right) with adjusted opacity.
If opponent HP = 0.. choose next opponent.

