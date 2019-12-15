
var rollButton = document.querySelector("#roll");
var body = document.querySelector("body");
var buttonsDiv = document.querySelector("#buttons")
var spaces = document.querySelector("#spaces");
var timerContainer = document.querySelector("#timerContainer");
var back = document.querySelector(".back");
var timerText = document.querySelector(".timer-text");
var centerContainer = document.querySelector(".center-container");
var minute = document.querySelector(".minute");
var backText = document.querySelector(".back-text");

var buttonContainer = document.createElement("span");

var startButton = document.createElement("button");
var resetButton = document.createElement("button");

startButton.addEventListener("click", function() {
    startTimer(60, timerText);
})

rollButton.addEventListener("click", function() {
    
    var jBody = $("body");
    randColourArr = generateRandomColours(5);
    var numSpaces = randomNum().toString();
    var numString = numSpaces + ".png";

    startButton.innerHTML = "Start";
    startButton.className = "timerButton";

    resetButton.innerHTML = "Reset";
    resetButton.className = "timerButton";

    timerText.style.display = 'none';
    buttonContainer.style.display = 'none';
    centerContainer.style.opacity = 0;


    $('.back').css({'background-image': ''});

    
    jBody.animate({backgroundColor: randColourArr[0]}, "fast");
    jBody.animate({backgroundColor: randColourArr[1]}, "fast");
    jBody.animate({backgroundColor: randColourArr[2]}, "fast");
    jBody.animate({backgroundColor: randColourArr[3]}, "fast");
    jBody.animate({backgroundColor: randColourArr[4]}, "fast", function () {

        timerText.textContent = "1:00";
        
        buttonContainer.className = "button-container";
        centerContainer.appendChild(buttonContainer);
        buttonContainer.style.display = '';
        buttonContainer.appendChild(startButton);
        buttonContainer.appendChild(resetButton);
        timerText.style.display = '';

        $('.center-container').animate({opacity: 1}, 700)
        $('.back').animate({opacity: 0}, 0).css({'background-image': "url(" + numString + ")"}).animate({opacity: 1}, 800); 
    });


})

function generateRandomColours(num) {
	var arr = []
	for (i = 0; i < num; i++){
		arr.push(randomColour())
	}
	return arr;
}

function randomColour() {
    var colours = ["#e80e27", "#32a852", "#3783ed", "#f5e93d"]
    var randomColour = colours[Math.floor(Math.random() * colours.length)];

    return randomColour;
}

function randomNum() {
    var num = Math.floor(Math.random() * 3) + 1;
    return num;
}

// startTimer function adapted from https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

function startTimer(duration, text) {
    var timer = duration, minutes, seconds;
    

    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        text.textContent = minutes + ":" + seconds;

        if (timer < 10) {
            text.style.color = "#ff000d";
            if (timer === 0) {
                timeOut(text);
                clearInterval(timerInterval);
            }
        }

        if (timer > 0){
            --timer;
        }
        
    }, 1000);
}

function timeOut (f) {
    flashInterval = setInterval(function() {
        f.style.opacity = (f.style.opacity == '0' ? '1' : '0');
    }, 500);
}

resetButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    if (typeof flashInterval !== 'undefined') {
        clearInterval(flashInterval);
    }
    
    timerText.textContent = '1:00';
    timerText.style.color = '#fff';
    f.style.opacity = '1';
    
})


