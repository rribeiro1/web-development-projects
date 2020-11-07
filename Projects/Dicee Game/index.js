var dicePlayer1 = rollDice()
var dicePlayer2 = rollDice()
var result = document.querySelector("h1")

document.querySelector(".img1").setAttribute("src", `images/dice${dicePlayer1}.png`)
document.querySelector(".img2").setAttribute("src", `images/dice${dicePlayer2}.png`)

if (dicePlayer1 > dicePlayer2) {
    result.textContent = "🚩 Player 1 Wins!"
} 
else if (dicePlayer1 < dicePlayer2) {
    result.textContent = "Player 2 Wins! 🚩"
}
else {
    result.textContent = "Draw!"
}

function rollDice() {
    return Math.ceil(Math.random() * 6)
}