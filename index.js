
let greeting = alert("Hi 👋. I'm excited that you've checked out my first web app! Give this post a thumbs up or drop a comment to let me know! \n ❤️ Tasha ")

let greetingEl = document.getElementById("greeting-el")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
