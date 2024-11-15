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

// Ajout de valeurs fictives aléatoires

const pseudos = ["Jean", "Paul", "Jacques", "Marie", "Pierre", "Lucie", "Julie", "Julien", "Lucas", "Léa"]
pseudos.sort(() => Math.random() - 0.5)

let datas = []

for (let i = 0; i < pseudos.length; i++) {
  datas.push({
    position: i+1,
    name: pseudos[i],
    time: i === 0 ? 30 + Math.floor(Math.random() * 30) : datas[i-1].time + Math.floor(Math.random() * 5) + 1
  })
}

for (const data of datas) {
  addPlayer(data.position, data.name, `${data.time}s`)
}
