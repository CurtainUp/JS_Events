// Lightning exercise:
// 1. Create a basic `index.html` `main.js` project
// 2. Create three `<h3>` tags and add any text you want to each. Use javascript to listen for a click event 
// on the header tags and `console.log` their text.

let header = document.getElementsByTagName("h3")

function handleSectionClick (event) {
  console.log(event.target.innerHTML)
}

for (let i = 0; i < header.length; i++) {
  header[i].addEventListener("click", handleSectionClick)
}