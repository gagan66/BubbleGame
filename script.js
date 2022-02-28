var timer = 60;
var timerelem = document.querySelector("#timerelem");
var hitelem = document.querySelector("#hitelem");
var btmpnl = document.querySelector("#btmpnl");
var scoreelem = document.querySelector("#scoreelem")
var score = 0;
var guessNumber;
setInterval(function() {
    if (timer > 0) {
        --timer;
        timerelem.textContent = timer;
    } else { btmpnl.innerHTML = '<h1 id="center" >Game Over<h1>' }

}, 1000);

function makeBubble() {
    for (var i = 0; i < 153; i++) {
        var randomNumber = Math.floor(Math.random() * 10);
        var template = ` <div class="bubble">${randomNumber}</div>`;
        btmpnl.innerHTML += template;
    }
}
makeBubble();

function getNewGuess() {
    // get a ranom number
    // and then place  the random number inside the game guess element

    guessNumber = Math.floor(Math.random() * 10);
    hitelem.textContent = guessNumber;
}
btmpnl.addEventListener("click", function(details) {
    var clickedBblvalue = details.target.textContent;
    if (clickedBblvalue == guessNumber) {
        score = score + 10;
        scoreelem.textContent = score;
        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubble();
    } else {}
});
getNewGuess();