const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

const output = document.getElementById("result");

function handleInput(e) {
    let number = e.target.value
    let temp = number
    let reverse = 0

    if (number > 0)
    {
        while (number > 0){
            let digit = number % 10;
            reverse = reverse * 10 + digit
            number = Math.floor(number/10)
            if (temp == reverse){
                output.textContent = "Yes. This is a palindrome!"; 
                output.style.color ="green";
            }
            else{
                output.textContent = "No. Try again"; 
                output.style.color ="red"; 
             }
        }
    }
    else {
        output.textContent = "Please enter valid positive number. input cannot be text or negative number";
        output.style.color ="red";
    }
    
}
