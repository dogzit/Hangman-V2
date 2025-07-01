const keypadContainer = document.getElementsByClassName("keypad")[0];
const failCounter = document.getElementById("Fail-counter");
const wordContainer = document.querySelector(".word-container");
const StartButton = document.querySelector(".Start-Button");
const backgroundzurag = document.querySelector(".backgroundzurag");
const hangmanWords = [
  "Apple",
  "Chair",
  "Pizza",
  "Money",
  "Ghost",
  "Water",
  "Robot",
  "Lantern",
  "Captain",
  "Monster",
  "Plastic",
  "Blanket",
  "Journey",
  "Diamond",
  "Avalanche",
  "Kryptonite",
  "Whirlwind",
  "Labyrinth",
  "Trapezoid",
  "Quarantine",
];

const letterarray = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

let ClickedLettersArray = [];

function zuragsolih() {
  for (let i = 0; i < 7; i++) {
    const zurag = document.createElement("div");
    zurag.classList.add("zurag");
    zurag.id = i.toString();

    backgroundzurag.appendChild(zurag);
  }
}

function StartGame() {
  for (let i = 0; i < 26; i++) {
    const keypads = document.createElement("div");
    keypads.classList.add("Keypads");
    keypads.innerText = [letterarray[i]];
    keypadContainer.appendChild(keypads);
    keypads.addEventListener("click", function () {
      const clickedLetter = keypads.innerText;
      ClickedLettersArray.push(clickedLetter.toLowerCase());
      console.log(ClickedLettersArray);
      if (
        randomwordtoshow.toLowerCase().includes(letterarray[i].toLowerCase())
      ) {
        failCounter.innerHTML = Number(failCounter.innerHTML) + 0;
      } else {
        failCounter.innerHTML = Number(failCounter.innerHTML) + 1;
      }
      randomwordfunction();
    });
  }
}
const randomNumber = Math.floor(Math.random() * hangmanWords.length);
const randomwordtoshow = hangmanWords[randomNumber].toLowerCase();

function randomwordfunction() {
  let word = "";
  for (let i = 0; i < randomwordtoshow.length; i++) {
    if (ClickedLettersArray.includes(randomwordtoshow[i].toLowerCase())) {
      word = word + randomwordtoshow[i] + " ";
    } else {
      word = word + "_ ";
    }
  }

  wordContainer.innerText = word.toUpperCase();
}

window.onload = StartGame;
randomwordfunction();
zuragsolih();
