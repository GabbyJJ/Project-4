/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons

let game;

document.getElementById("btn__reset").addEventListener("click", function () {
  game = new Game();
  game.startGame();
});

let keys = document.getElementsByClassName("key");
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", function () {
    game.handleInteraction(keys[i]);
  });
}
