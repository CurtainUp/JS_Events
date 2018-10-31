// -------------Original individual button functions-----------
// function FlightHandlerFunction() {
//   let flight = document.querySelector("#flight")
//   flight.className = "power-enabled" 
// }

// function MindHandlerFunction() {
//   let mind = document.querySelector("#mindreading")
//   mind.className = "power-enabled"
// }

// function XrayHandlerFunction() {
//   let xray = document.querySelector("#xray")
//   xray.className = "power-enabled"
// }

// DRY refactor of activate buttons.
function PowerActivator(event) {
  let split = event.target.id.split("-")
  if (split[1] === "flight") {
    document.querySelector("#flight").className = "power-enabled" 
  } else if (split[1] === "mindreading") {
    document.querySelector("#mindreading").className = "power-enabled"
  } else
    document.querySelector("#xray").className = "power-enabled"
}

function ActivateAll() {
  let powers = document.querySelectorAll(".power-disabled")
  powers.forEach(power => {
    power.className = "power-enabled"
  })
}

function DeactivateAll() {
  let powers = document.querySelectorAll(".power-enabled")
  powers.forEach(power => {
    power.className = "power-disabled"
  })
}

document.querySelector("#activate-flight").addEventListener("click", PowerActivator)
document.querySelector("#activate-mindreading").addEventListener("click", PowerActivator)
document.querySelector("#activate-xray").addEventListener("click", PowerActivator)
document.querySelector("#activate-all").addEventListener("click", ActivateAll)
document.querySelector("#deactivate-all").addEventListener("click", DeactivateAll)