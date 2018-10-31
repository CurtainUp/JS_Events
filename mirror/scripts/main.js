let inputField = document.getElementById("message")
let firstField = document.getElementById("thing1")
let secondField = document.getElementById("thing2")

inputField.addEventListener("keyup", function (event) {
  firstField.innerHTML = event.target.value
  secondField.innerHTML = event.target.value
})