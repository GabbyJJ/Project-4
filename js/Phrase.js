/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    let letters = this.phrase.split("");
    let phraseBox = document.getElementById("phrase");

    let html = ``;

    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        html += `<li class="space"> </li>`;
      } else {
        html += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      }
    }
    phraseBox.insertAdjacentHTML("beforeend", html);
  }
  // This will check to see if the letter entered is in the phrase and return true or false.
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  showMatchedLetter(selectedLetter) {
    let replacedLetters = document.getElementsByClassName(
      selectedLetter.toLowerCase()
    );
    for (let i = 0; i < replacedLetters.length; i++) {
      replacedLetters[i].classList.replace("hide", "show");
    }
  }
}
