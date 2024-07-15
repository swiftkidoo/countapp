console.log("Script loaded");

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function record() {
    console.log("Button clicked")
    count += 1
    countEl.textContent = count
}
function save() {
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}
