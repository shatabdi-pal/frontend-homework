// Add your code here
//source-of-help: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

let button = document.querySelector("button")

let input = document.querySelector('#timeInterval');

let interval;


window.addEventListener("load", (event) => {
button.addEventListener("click", function (event) {
    event.preventDefault();
    event.target.value = "Start";
    event.target.style.backgroundColor = "blue";
    button.addEventListener("click", function (event) {
        event.target.value = "Stop";
        event.target.style.backgroundColor = "red";
        clearInterval(interval);
        interval = null;
    });
    interval = setInterval(generate_random_color(), input.value);
});
});


function generate_random_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}




