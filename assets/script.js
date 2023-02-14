let wordBlank = document.querySelector(".word-blanks");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let timerElement = document.querySelector(".timer-count");
let startButton = document.querySelector(".start-button");

let chosenWord = "";
let numBlanks = 0;
let winCounter = 0;
let loseCounter = 0;
let isWin = false;
let timer;
let timerCount;