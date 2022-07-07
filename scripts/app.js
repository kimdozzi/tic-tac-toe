const PlayerConfigOverlayElement = document.querySelector(".config-overlay");
const backdropElement = document.querySelector("#backdrop");

const editPlyaer1BtnElement = document.querySelector("#edit-player1-btn");
const editPlyaer2BtnElement = document.querySelector("#edit-player2-btn");
const cancelConfigBtnElement = document.querySelector(".cancel-config-btn");

// A 파일에 있는 함수나 상수를 정의하면 B 파일에서도 사용할 수가 있다.
// 중요한 건 정의된 순서 !
editPlyaer1BtnElement.addEventListener("click", openPlayConfig); // Config.js 에서 함수 구성 & app.js에서 받음
editPlyaer2BtnElement.addEventListener("click", openPlayConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);
