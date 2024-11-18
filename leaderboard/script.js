const playersContainer = document.querySelector("#players-container");

const addPlayer = (position, name, time) => {
  const playerElement = document.createElement("tr")

  const positionElement = document.createElement("td")
  const nameElement = document.createElement("td")
  const timeElement = document.createElement("td")

  positionElement.innerText = position
  nameElement.innerText = name
  timeElement.innerText = time


  playerElement.appendChild(positionElement)
  playerElement.appendChild(nameElement)
  playerElement.appendChild(timeElement)

  playersContainer.appendChild(playerElement)
}