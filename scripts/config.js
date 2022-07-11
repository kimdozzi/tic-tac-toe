function openPlayConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid;
  editedPlayer = selectedPlayerId;

  PlayerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  PlayerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
  // playerNameElement.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim(); // '    Max    ' => 'Max' trim's function

  if (!enteredPlayername) {
    // enteredPlayername === ''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.querySelector(
    "#player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  // if(editedPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // }
  // else{
  //   players[1].name = enteredPlayername;
  // }

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
  errorsOutputElement.textContent = "";
}
