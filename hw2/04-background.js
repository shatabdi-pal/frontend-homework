// Add your code here
//source-of-help: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

let button = document.querySelector("button")

let interval;

button.addEventListener("click", function (event) {
    event.preventDefault();
    let input = document.querySelector('#timeInterval');
    if (button.innerHTML === "Start"){
        button.innerHTML ="Stop";
        button.className = "btn btn-danger btn-sm";
        interval = setInterval(() =>{
            let x = Math.floor(Math.random() * 256);
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            let alpha = Math.random() * 1;
            //let bgColor = "rgb(" + x + "," + y + "," + z + ")";
            let bgColor = "rgba(" + x + "," + y + "," + z + "," + alpha +")";
            document.body.style.background = bgColor;
        }, input.value * 1000);
        input.disabled = true;        
    }
    else {
        button.innerHTML = "Start";
        button.className = "btn btn-primary btn-sm";
        clearInterval(interval);
        interval = null;
        document.body.style.background = "white";
        input.disabled =  false;
       
    } 
   });







