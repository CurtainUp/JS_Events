let cardCounter = 1

function addDeleteListener(num) {
  let deleteButton = document.querySelector(`#delete--${num}`)
  deleteButton.addEventListener("click", () => {
    let createdCard = document.getElementById(`card--${num}`)
    console.log(createdCard)
    createdCard.parentNode.removeChild(createdCard)
    // createdCard.removeChild(createdCard)
    console.log("Delete clicked")
  })
}

// Element Builder
function cardBuilder() {
  let userInput = document.querySelector(".userInput").value
  let cardPlace = document.querySelector("#cards")

  // create card container
  let newArticle = document.createElement("article")
  newArticle.setAttribute("class", "card")
  newArticle.setAttribute("id", `card--${cardCounter}`)

  // create card content
  let newDiv = document.createElement("div")
  let userContent = document.createTextNode(`${userInput}`)
  newDiv.appendChild(userContent)
  newArticle.appendChild(newDiv)

  // create card delete button
  let newDelete = document.createElement("button")
  let deleteButtonText = document.createTextNode("Delete This Card")
  newDelete.setAttribute("id", `delete--${cardCounter}`)
  newDelete.appendChild(deleteButtonText)
  newArticle.appendChild(newDelete)

  // add card to DOM
  cardPlace.appendChild(newArticle)

  addDeleteListener(cardCounter)
  cardCounter += 1
}

// Event Listener
let createButton = document.querySelector("#button-create")

createButton.addEventListener("click", () => {
  cardBuilder()
}) 
