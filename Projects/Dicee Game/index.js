var dicePlayer1 = randomDiceNumber()
var dicePlayer2 = randomDiceNumber()
var result = document.querySelector("h1")

document.querySelector(".img1").setAttribute("src", `images/dice${dicePlayer1}.png`)
document.querySelector(".img2").setAttribute("src", `images/dice${dicePlayer2}.png`)

if (dicePlayer1 === dicePlayer2) {
    result.textContent = "Draw!"
} 
else if (dicePlayer1 > dicePlayer2) {
    result.textContent = "🚩 Player 1 Wins!"
} 
else {
    result.textContent = "Player 2 Wins! 🚩"
}

function randomDiceNumber() {
    return Math.ceil(Math.random() * 6)
}