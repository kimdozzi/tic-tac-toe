const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const PlayerConfigOverlayElement = document.querySelector(".config-overlay");
const backdropElement = document.querySelector("#backdrop");

const formElement = document.querySelector("form");
const errorsOutputElement = document.querySelector("#config-errors");

const editPlyaer1BtnElement = document.querySelector("#edit-player1-btn");
const editPlyaer2BtnElement = document.querySelector("#edit-player2-btn");
const cancelConfigBtnElement = document.querySelector(".cancel-config-btn");

const startNewGameBtnElement = document.querySelector("#start-game-btn");
const gameAreaElement = document.querySelector(".active-game");
// const gameFieldElements = document.querySelectorAll(
//   ".active-game__game-board li"
// );
const gameBoardElement = document.querySelector(".active-game__game-board");
const activePlayerNameElement = document.querySelector(
  ".active-game__play-name"
);
const gameOverElement = document.querySelector(".game-over");

// const playerNameElement = document.querySelector("#playername");

// A 파일에 있는 함수나 상수를 정의하면 B 파일에서도 사용할 수가 있다.
// 중요한 건 정의된 순서 !
editPlyaer1BtnElement.addEventListener("click", openPlayConfig); // Config.js 에서 함수 구성 & app.js에서 받음
editPlyaer2BtnElement.addEventListener("click", openPlayConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }
gameBoardElement.addEventListener("click", selectGameField);
