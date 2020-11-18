var isGameStarted = false;
var isGameOver = false;
var level = 0;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

$("html").on("keydown", (event) => {
    if (event.key === "a") {
        startGame();
    }
});

$(".btn").on("click", (event) => {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer();
});

function startGame() {
    if (!isGameStarted) {
        isGameStarted = true;
        nextSequence();
    }
}

function resetGame() {
    isGameStarted = false;
    isGameOver = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function nextSequence() {
    var randomChosenColour = buttonColours[randomNumber()];
    gamePattern.push(randomChosenColour);
    animateButton(randomChosenColour);
    playSound(randomChosenColour);
    
    level++;
    $("h1").text(`Level ${level}`);
    userClickedPattern = [];
};

function gameOver() {
    playSound("wrong");
    $("h1").text(`Game Over! Score: ${level}`);
    gameStatus = 0;
    console.log("GAME OVER!");
    isGameOver = true;

    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
}

function checkAnswer() {
    /* Using the last index from userPattern to compare agains the gamePattern. */
    var currentAnswerIndex = userClickedPattern.length - 1;
    var currentAnswer = userClickedPattern[currentAnswerIndex];
    if (currentAnswer !== gamePattern[currentAnswerIndex]) {
        gameOver();
    }

    /* Here we check whether the user has completed the pattern or not
     * Create a new sequence if the Pattern is complete and status is not Game Over
     */
    var isPatternComplete = userClickedPattern.length === gamePattern.length;
    if (isPatternComplete && !isGameOver) {
        setTimeout(() => {
            nextSequence();
        }, 1000);
    } else if (isGameOver) {
        resetGame();
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 4);
};

function playSound(color) {
    var sound = new Audio(`sounds/${color}.mp3`);
    sound.play();
};

function animateButton(color) {
    $(`.${color}`).fadeOut(200).fadeIn(200);
};

function animatePress(currentColour) {
    $(`.${currentColour}`).addClass("pressed");
    setTimeout(() => {
        $(`.${currentColour}`).removeClass("pressed");
    }, 100);
};