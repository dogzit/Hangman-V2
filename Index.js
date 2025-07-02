const keypadContainer = document.getElementsByClassName("keypad")[0];
const failCounter = document.getElementById("Fail-counter");
const button1 = document.getElementById("button-try-again");
const button2 = document.getElementById("button-restart");
const wordContainer = document.querySelector(".word-container");
const StartButton = document.querySelector(".Start-Button");
const backgroundzurag = document.querySelector(".backgroundzurag");
const WinnerBanner = document.getElementById("won");
WinnerBanner.style.visibility = "hidden";
const LoserBanner = document.getElementById("lose");
LoserBanner.style.visibility = "hidden";
const CorrectWord = document.getElementById("correct-word");

const hangmanWords = [
  "geography",
  "island",
  "rain",
  "history",
  "cherry",
  "ocean",
  "noodle",
  "sun",
  "mirror",
  "giraffe",
  "scared",
  "grape",
  "mountain",
  "gray",
  "pizza",
  "train",
  "art",
  "mango",
  "yellow",
  "bread",
  "monkey",
  "reading",
  "river",
  "rocket",
  "orange",
  "burger",
  "snow",
  "lamp",
  "bored",
  "sports",
  "window",
  "english",
  "tired",
  "banana",
  "plane",
  "star",
  "valley",
  "tiger",
  "desert",
  "coding",
  "blue",
  "boat",
  "mouse",
  "fries",
  "salad",
  "zebra",
  "sushi",
  "lion",
  "truck",
  "dog",
  "car",
  "white",
  "happy",
  "angry",
  "shelf",
  "proud",
  "mountain",
  "excited",
  "pasta",
  "helicopter",
  "cloud",
  "black",
  "lake",
  "moon",
  "apple",
  "volcano",
  "submarine",
  "green",
  "steak",
  "snow",
  "purple",
  "fog",
  "math",
  "bicycle",
  "pillow",
  "table",
  "storm",
  "chair",
  "peach",
  "kiwi",
  "orange",
  "calm",
  "curtain",
  "mirror",
  "cat",
  "cookie",
  "music",
  "sad",
  "science",
  "valley",
  "pink",
  "wind",
  "couch",
  "lemon",
  "rabbit",
  "door",
  "scooter",
  "angry",
  "excited",
  "happy",
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

function StartGame() {
  for (let i = 0; i < 26; i++) {
    const keypads = document.createElement("button");
    keypads.classList.add("Keypads");
    keypads.innerText = [letterarray[i]];
    keypadContainer.appendChild(keypads);
    keypads.addEventListener("click", function () {
      const clickedLetter = keypads.innerText;
      keypads.disabled = true;
      ClickedLettersArray.push(clickedLetter.toLowerCase());
      if (
        randomwordtoshow.toLowerCase().includes(letterarray[i].toLowerCase())
      ) {
        failCounter.innerHTML = Number(failCounter.innerHTML) + 0;
      } else {
        failCounter.innerHTML = Number(failCounter.innerHTML) + 1;
      }
      backgroundzurag.src = `./pictures/${failCounter.innerHTML}.jpg`;
      randomwordfunction();
      GameLost();
      GameWon();
    });
  }
}
const randomNumber = Math.floor(Math.random() * hangmanWords.length);
const randomwordtoshow = hangmanWords[randomNumber].toLowerCase();

function randomwordfunction() {
  let word = "";

  for (let i = 0; i < randomwordtoshow.length; i++) {
    if (ClickedLettersArray.includes(randomwordtoshow[i].toLowerCase())) {
      word = word + randomwordtoshow[i];
    } else {
      word = word + "_ ";
    }
  }

  wordContainer.innerText = word.toUpperCase();
}

function GameLost() {
  if (failCounter.innerHTML >= 7) {
    LoserBanner.style.visibility = "visible";
    CorrectWord.innerText = randomwordtoshow.toUpperCase();
  }
}

function GameWon() {
  if (wordContainer.innerText === randomwordtoshow.toUpperCase()) {
    WinnerBanner.style.visibility = "visible";
  }
}

window.onload = StartGame;
randomwordfunction();

button1.addEventListener("click", function () {
  location.reload();
});
button2.addEventListener("click", function () {
  location.reload();
});
