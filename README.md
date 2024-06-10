# Simon
***Description:*** This is a memory game. The score is calculated by the number of rounds which you remember. Start by pressing any button. The game will then give you random selections from the four buttons and you have to remember the new selection plus all past selections in order to progress.


## Breakdown

* **Instance Variables:** The function initializes various instance variables such as score, moves, moveCount, button_dim, walk, walkThroughFlag, simon_width, and buttons.

* **Initialization:** The init() method initializes the game by creating four buttons with specific colors and positions on the canvas. After a delay of 3 seconds (3000 milliseconds), it adds the first move to start the game.

* **Random Move Generation:** The randomMove() method generates a random move by selecting an index from the buttons array.

* **Adding Moves:** The addMove() method adds a random move to the sequence of moves, selects the corresponding button, and increments the move count.

* **Playback:** The playBack() method plays back the sequence of moves by activating each button in the sequence with a delay of 600 milliseconds between activations.

* **Update and Render:** The update() and render() methods update and render the buttons respectively.

* **Handling Player Clicks:** The simonClick() method handles player clicks by checking if any button was clicked and calling the walkThrough() method accordingly.

* **Walk Through the Sequence:** The walkThrough() method compares the player's move to the expected move in the sequence. If the player's move matches, it advances to the next move. If the sequence is completed, the player's score is incremented, and the playback begins again. If there's a mismatch, the game ends.

* **Game Over:** The end() method resets the game when it ends by resetting all variables, resetting button states, and initiating a new sequence after a delay of 3 seconds.

