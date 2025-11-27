import { quotes } from "./quotes.js"

const button = document.getElementById("stirBtn")
const coffee = document.getElementById("coffee")
const quoteText = document.getElementById("quote")

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length)
  return quotes[index]
}

button.addEventListener("click", () => {
  coffee.classList.add("stir")
  quoteText.style.opacity = 0

  setTimeout(() => {
    const quote = getRandomQuote()
    quoteText.textContent = `"${quote}"`
    quoteText.style.opacity = 1
    coffee.classList.remove("stir")
  }, 900)
})
