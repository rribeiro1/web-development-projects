var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleButton);
}

document.addEventListener("keydown", handleKey);

function handleButton() {
    var clickedButton = this.innerHTML;
    playSound(clickedButton);
    buttonAnimation(clickedButton);
}

function handleKey(event) {
    var keyPressed = event.key
    playSound(keyPressed);
    buttonAnimation(keyPressed);
}

function playSound(key) {
    switch (key) {
        case 'w':
            getAndPlaySound("crash");
            break;
        case 'a':
            getAndPlaySound("kick-bass");
            break;
        case 's':
            getAndPlaySound("snare");
            break;
        case 'd':
            getAndPlaySound("tom-1");
            break;
        case 'j':
            getAndPlaySound("tom-2");
            break;
        case 'k':
            getAndPlaySound("tom-3");
            break;
        case 'l':
            getAndPlaySound("tom-4");
            break;
        default:
            console.log("Invalid key");
    }
}

function getAndPlaySound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");
    setTimeout(() => { 
        activeButton.classList.remove("pressed"); 
    }, 100);
}