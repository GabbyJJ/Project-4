/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Create goes into the class Game and adds new phrases.

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Have a Great Day"),
      new Phrase("I love sunny days"),
      new Phrase("Basketball is my favorite sport"),
      new Phrase("Dogs are the best"),
      new Phrase("I love to code"),
    ];
    this.activePhrase = null;
  }
  // This causes the overlay page not to display.
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  //Selects the randon phrase.
  getRandomPhrase() {
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
  }
  // This function checks to see if the selected letter matches and if the button clicked is correct.
  handleInteraction(keyElement) {
    keyElement.disabled = true;
    let letter = keyElement.innerText;
    let userFoundLetter = this.activePhrase.checkLetter(letter);

    if (userFoundLetter) {
      keyElement.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
      this.checkForWin();
    } else {
      keyElement.classList.add("wrong");
      this.removeLife();
    }
  }
  // Checks to see if game is won. If not, game over.

  checkForWin() {
    let remainingLetters = document.getElementsByClassName("hide");
    if (!remainingLetters.length) {
      this.gameOver(true);
    }
  }
  // This removes a life from the game and gives a lost heart
  removeLife() {
    if (this.missed < 4) {
      let lives = document.getElementById("scoreboard");
      let images = lives.getElementsByTagName("img");
      let currentLife = images[this.missed];

      currentLife.src = "images/lostHeart.png";
    } else {
      this.gameOver(false);
    }
    this.missed++;
  }
  // This lets you know if the user won or loss
  gameOver(userWon) {
    document.getElementById("overlay").style.display = "flex";
    let message = document.getElementById("game-over-message");

    if (userWon) {
      message.textContent = "YOU WON!";
      document.getElementById("overlay").className = "win";
    } else {
      message.textContent = "Maybe Next Time!";
      document.getElementById("overlay").className = "lose";
    }
    //Resetting keys.
    let keys = document.getElementsByClassName("key");
    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].classList = "key";
    }
    // Resetting images
    let lives = document.getElementById("scoreboard");
    let images = lives.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].src = "images/liveHeart.png";
    }
    //Resetting phrase container.
    document.getElementById("phrase").innerHTML = " ";
  }
}
